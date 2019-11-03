import React, { useState } from 'react';
import { block } from 'bem-cn';
import Typist from 'react-typist';

import ContactForm from './ContactForm';

const b = block('contact-page');

export default function Contact() {
  const [done, setDone] = useState(false);

  return (
    <div className={b()}>
      <h1>
        Contact <span>Me</span>{' '}
      </h1>

      <div className='sm-heading'>
        <h2 className='scale'>
          <Typist
            avgTypingDelay={60}
            startDelay={70}
            onTypingDone={() => setDone(true)}
            cursor={{ hideWhenDone: true, hideWhenDoneDelay: 300 }}
          >
            This is how you can reach me...
          </Typist>
        </h2>
      </div>
      {done && (
        <div className={b('wrapper')}>
          <div data-aos='zoom-in' className={b('boxes')}>
            <div className={b('boxes-wrapper')}>
              <span className={b('text-secondary')}>Email:</span>{' '}
              milicstefan6@gmail.com
            </div>
            <div className={b('boxes-wrapper')}>
              <span className={b('text-secondary')}>Phone:</span> 066 5236337
            </div>
          </div>
          <ContactForm />
        </div>
      )}
    </div>
  );
}
