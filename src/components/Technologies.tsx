import React from 'react';
import { block } from 'bem-cn';
// program skils
import HtmlIcon from '@images/tehnologies/html.png';
import CssIcon from '@images/tehnologies/css.png';
import JsIcon from '@images/tehnologies/JavaScript.png';
import TSIcon from '@images/tehnologies/typescript.png';
// frameworks
import BootstrapIcon from '@images/tehnologies/frameworks/bootstrap.png';
import ExpressIcon from '@images/tehnologies/frameworks/express.png';
import JQueryIcon from '@images/tehnologies/frameworks/jquery.png';
import ReactIcon from '@images/tehnologies/frameworks/react.png';
import ReduxIcon from '@images/tehnologies/frameworks/redux.png';
import SassIcon from '@images/tehnologies/frameworks/sass.svg';
// tools
import FirebaseIcon from '@images/tehnologies/tools/firebase.png';
import GitHubIcon from '@images/tehnologies/tools/github.png';
import HerokuIcon from '@images/tehnologies/tools/heroku.png';
import MongoDBIcon from '@images/tehnologies/tools/mongodb.jpg';
import NodeIcon from '@images/tehnologies/tools/nodejs.png';
import SqlIcon from '@images/tehnologies/tools/sql.jpg';
import PostgreIcon from '@images/tehnologies/tools/PostgreSQL.png';

const b = block('technologies-page');

const programs = [
  { name: 'Html', link: HtmlIcon },
  { name: 'Css', link: CssIcon },
  { name: 'JavaScript', link: JsIcon },
  { name: 'TypeScript', link: TSIcon },
];

const frameworks = [
  { name: 'Bootstrap', link: BootstrapIcon },
  { name: 'Express', link: ExpressIcon },
  { name: 'JQuery', link: JQueryIcon },
  { name: 'React', link: ReactIcon },
  { name: 'Redux', link: ReduxIcon },
  { name: 'Sass', link: SassIcon },
];

const tools = [
  { name: 'Firebase', link: FirebaseIcon },
  { name: 'GitHub', link: GitHubIcon },
  { name: 'Heroku', link: HerokuIcon },
  { name: 'NodeJs', link: NodeIcon },
];

const bases = [
  { name: 'MongoDB', link: MongoDBIcon },
  { name: 'Sql', link: SqlIcon },
  { name: 'PostgreSql', link: PostgreIcon },
];

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
