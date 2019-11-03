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

const socialIcons = [
  { icon: faGithub, link: 'https://github.com/stefanmilic' },
  { icon: faLinkedin, link: 'https://www.linkedin.com/in/stefan-milic/' },
  { icon: faViber, link: 'viber://chat?number=+381665236337' },
  { icon: faEnvelope, link: 'mailto:milicstefan6@gmail.com' },
];

const handleClick = (value: string) => () => {
  window.location.href = value;
};

const Home = () => {
  return (
    <div className={b()}>
      <div className={b('name')}>
        <Typist
          className={String(b('typing-text'))}
          avgTypingDelay={150}
          startDelay={700}
          cursor={{ hideWhenDone: true, hideWhenDoneDelay: 300 }}
        >
          Stefan Milic
        </Typist>
      </div>
      <div className={b('position')}> Programer, Frontend Developer</div>
      <div className={b('icons')}>
        {socialIcons.map(item => (
          <React.Fragment key={item.link}>
            <FontAwesomeIcon
              icon={item.icon}
              size='2x'
              onClick={handleClick(item.link)}
            />
          </React.Fragment>
        ))}
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
