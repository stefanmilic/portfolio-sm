import React from 'react';
import { block } from 'bem-cn';
import { programs, frameworks, tools, bases } from 'src/Data/Technologies';

const b = block('technologies-page');

interface CardProps {
  name: string;
  link: string;
}

interface CardListProps {
  skills: CardProps[];
  animation: string;
}

const Card: React.FC<CardProps> = ({ name, link }) => (
  <li>
    <div className={b('card')}>
      <div className={b('card-header')}>
        <img src={link} alt='' />
      </div>
    </div>
    <div className={b('footer')}>{name}</div>
  </li>
);

const CardList: React.FC<CardListProps> = ({ skills, animation }) => (
  <ul data-aos={animation} className={b('list-program1')}>
    {skills.map(item => {
      return <Card name={item.name} link={item.link} />;
    })}
  </ul>
);

export default function Technologies() {
  return (
    <main className={b()}>
      <h1>Tehnologies</h1>
      <div className={b('sm-heading')}>
        <h2 className={b('scale')}>Check out some of my skills...</h2>
      </div>
      <section>
        <h2>Programming languages</h2>
        <CardList skills={programs} animation='fade-right' />
        <br />
        <h2>Frameworks and technologies</h2>
        <CardList skills={frameworks} animation='zoom-in-right' />
        <br />
        <h2>Tools and Platforms</h2>
        <CardList skills={tools} animation='fade-up' />
        <br />
        <h2>Database servers</h2>
        <CardList skills={bases} animation='fade-right' />
      </section>
    </main>
  );
}
