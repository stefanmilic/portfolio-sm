import React, { useState } from 'react';
import { block } from 'bem-cn';
import Typist from 'react-typist';
import Me from '@images/me2.jpg';
import { experience } from '../Data/Experience';

const b = block('about-page');

export default function About() {
  const [done, setDone] = useState(false);

  return (
    <main className={b()}>
      <h1>
        About <span className={b('text-secondary')}>Me</span>
      </h1>
      <div className={b('sm-heading')}>
        <h2 className='scale'>
          <Typist
            avgTypingDelay={70}
            startDelay={100}
            onTypingDone={() => setDone(true)}
            cursor={{ hideWhenDone: true, hideWhenDoneDelay: 300 }}
          >
            Let me tell you few things...
          </Typist>
        </h2>
      </div>
      {done && (
        <div className={b('about-info')}>
          <img
            data-aos='fade-up-right'
            className={b('bioimage')}
            src={Me}
            width={250}
            height={250}
            alt=''
          />
          <div className={b('bio')}>
            <h3 className={b('text-secondary')}>Biography</h3>
            <p data-aos='flip-left'>
              Engineer of electrical and computer science. Specialized for web
              development skilled in designing and creating reusable and stable
              user interface components. Proficient in HTML, CSS, JavaScript,
              plus modern libraries and frameworks. React is my favourite
              framework . Experienced in building CRUD applications, RESTful
              APIs using Node.js and Express.
            </p>

            <a
              data-aos='fade-right'
              className={b('resume')}
              href='https://1drv.ms/w/s!AiazCSGyfhztsgqNzYBNon-pdn6f'
              target='_blank'
              rel='noopener noreferrer'
            >
              Click here for my{' '}
              <span className={b('text-secondary')}> resume</span>
            </a>
          </div>

          {experience.map((item, index) => (
            <div
              key={index}
              data-aos='zoom-out-right'
              className={b('job').mix(b(`job-${index + 1}`))}
            >
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
