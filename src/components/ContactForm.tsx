import React from 'react';

export default class ContactForm extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      feedback: '',
      name: '',
      email: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <form className='test-mailing'>
        <h1>Let's see if it works</h1>
        <div>
          Name:
          <input
            type='text'
            name='name'
            // @ts-ignore
            value={this.state.name}
            onChange={this.handleChange}
          />
          Email:
          <input
            type='email'
            name='email'
            // @ts-ignore
            value={this.state.email}
            onChange={this.handleChange}
          />
          <textarea
            name='feedback'
            onChange={this.handleChange}
            placeholder='Post some lorem ipsum here'
            required
            // @ts-ignore
            value={this.state.feedback}
            style={{ width: '100%', height: '150px' }}
          />
        </div>
        <input
          type='button'
          value='Submit'
          className='btn btn--submit'
          onClick={this.handleSubmit}
        />
      </form>
    );
  }

  handleChange(event: any) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event: any) {
    const templateId = 'template_R9iosiZr';

    this.sendFeedback(templateId, {
      // @ts-ignore
      message_html: this.state.feedback,
      // @ts-ignore
      from_name: this.state.name,
      // @ts-ignore
      from_email: this.state.email,
      // @ts-ignore
      // reply_to: this.state.email,
    });
  }

  sendFeedback(templateId: any, variables: any) {
    // @ts-ignore
    window.emailjs
      .send('gmail', templateId, variables)
      .then((res: any) => {
        console.log('Email successfully sent!');
      })
      // Handle errors here however you like, or use a React error boundary
      .catch((err: any) =>
        console.error(
          'Oh well, you failed. Here some thoughts on the error that occured:',
          err,
        ),
      );
  }
}
