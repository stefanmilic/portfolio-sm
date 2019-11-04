import React from 'react';
import { block } from 'bem-cn';
import Loader from 'react-loader-spinner';
import emailjs from 'emailjs-com';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faAddressBook } from '@fortawesome/free-solid-svg-icons';

const b = block('contact-form');

interface ContactFormState {
  text: string;
  name: string;
  email: string;
  error: boolean;
  isLoading: boolean;
  infoMsg: string;
}

interface FormProps {
  message_html: string;
  from_name: string;
  from_email: string;
}

export default class ContactForm extends React.Component<{}, ContactFormState> {
  state: ContactFormState = {
    text: '',
    name: '',
    email: '',
    error: false,
    isLoading: false,
    infoMsg: '',
  };

  handleChange = (event: any) => {
    this.setState({ [event.target.name]: event.target.value } as any);
  };

  handleSubmit = (event: any) => {
    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    event.preventDefault();
    const { text, name, email } = this.state;

    if (!name || !text || !email) {
      return null;
    }

    return this.sendFeedback(templateId, {
      message_html: text,
      from_name: name,
      from_email: email,
    });
  };

  sendFeedback = (templateId: string, variables: FormProps) => {
    this.setState({ isLoading: true });
    emailjs
      .send('gmail', templateId, variables)
      .then((res: any) => {
        console.log('Email successfully sent!');
        this.setState({
          isLoading: false,
          name: '',
          email: '',
          text: '',
          infoMsg: 'Email successfully sent!',
          error: false,
        });
      })
      // Handle errors here however you like, or use a React error boundary
      .catch((err: any) => {
        console.error(
          'Oh well, you failed. Here some thoughts on the error that occured:',
          err,
        );
        this.setState({
          isLoading: false,
          name: '',
          email: '',
          text: '',
          infoMsg: `Oh well, you failed. ${err.text}`,
          error: true,
        });
      });
  };

  render() {
    const { text, name, email, isLoading, infoMsg, error } = this.state;

    return (
      <>
        <form data-aos='fade-left' className={b()}>
          <div className={b('title')}> Contact form </div>

          <div className={b('name-wrapper')}>
            <FontAwesomeIcon
              icon={faAddressBook}
              color='black'
              className={String(b('icons'))}
            />
            <input
              type='text'
              id='name'
              name='name'
              required
              value={name}
              placeholder='Name'
              onChange={this.handleChange}
              className={b('input-name')}
            />
          </div>
          <div className={b('email-wrapper')}>
            <FontAwesomeIcon
              icon={faEnvelope}
              color='black'
              className={String(b('icons'))}
            />
            <input
              type='email'
              name='email'
              required
              pattern='/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/'
              placeholder='Email'
              value={email}
              onChange={this.handleChange}
              className={b('input-email')}
            />
          </div>

          <textarea
            name='text'
            onChange={this.handleChange}
            placeholder='Your message'
            required
            value={text}
            className={b('text-area')}
          />

          <button
            type='submit'
            disabled={!email || !name || !text}
            className={String(b('submit'))}
            onClick={this.handleSubmit}
          >
            Send
          </button>

          {!isLoading && (
            <Loader
              type='ThreeDots'
              color='gray'
              className={String(b('loader'))}
              height={50}
              width={50}
            />
          )}
          <div className={b('info-msg', { error: error })}> {infoMsg} </div>
        </form>
      </>
    );
  }
}
