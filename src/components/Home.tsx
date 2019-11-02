import React from 'react';
import { block } from 'bem-cn';
import Typist from 'react-typist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faViber,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const b = block('home-page');

const Home = () => {
  return (
    <div className={b()}>
      <div className={b('name')}>
        <Typist
          className={b('typing-text')}
          avgTypingDelay={200}
          startDelay={1000}
          cursor={{ hideWhenDone: true, hideWhenDoneDelay: 300 }}
        >
          Stefan Milic
        </Typist>
      </div>
      <div className={b('position')}> Programer, Frontend Developer</div>
      <div className={b('icons')}>
        <FontAwesomeIcon icon={faGithub} size='2x' />
        <FontAwesomeIcon icon={faLinkedin} size='2x' />
        <FontAwesomeIcon icon={faViber} size='2x' mask={['fas', 'circle']} />
        <FontAwesomeIcon icon={faEnvelope} size='2x' />
      </div>
      <div className={b('quote')} data-aos='zoom-in' data-aos-delay='1000'>
        <h2>
          &#8220;There is nothing like a dream to create the future &#8221;
        </h2>
        <p>~Victor Hugo~</p>
      </div>
    </div>
  );
};
export default Home;
