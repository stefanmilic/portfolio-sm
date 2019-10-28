import React from 'react';
import { block } from 'bem-cn';
import Me from '@images/me2.jpg';
const b = block('about-page');

export default function About() {
  return (
    <main className={b()}>
      <h1>
        About <span className={b('text-secondary')}>Me</span>
      </h1>
      <div className={b('sm-heading')}>
        <h2 className='scale'>Let me tell you few things...</h2>
      </div>
      <div className={b('about-info')}>
        <img
          className={b('bioimage')}
          src={Me}
          width={250}
          height={250}
          alt=''
        />
        <div className={b('bio')}>
          <h3 className={b('text-secondary')}>Biography</h3>
          <p>
            Engineer of electrical and computer science specialized for web
            development, having skills for creating and designing websites, deep
            and broad proficiency using MongoDB, Express, React, Node.js (MERN).
            Experienced in building CRUD applications, RESTful APIs using
            Node.js and Express, user Auth with PassportJS and Firebase. Common
            libraries of use: Axios, Redux, Mongoose, Express, body-parser,
            socket.io, react-router, redux- thunk. Also having big experience as
            IT Technician on resolving computer problems maintaining websites
            and checking the hardware's correctness.
          </p>

          <a
            className={b('resume')}
            href='https://1drv.ms/w/s!AiazCSGyfhztsgqNzYBNon-pdn6f'
            target='_blank'
            rel='noopener noreferrer'
          >
            Click here for my{' '}
            <span className={b('text-secondary')}> resume</span>
          </a>
        </div>

        <div data-aos='zoom-out-right' className={b('job').mix(b('job-1'))}>
          <h4>Education</h4>
          <p>
            I finished Gimnazija high school in 2012 and then in same year I
            enrolled in the faculty of technical science on department IT
            sector. After 5 years, I finished college in October 2017 with an
            average degree of 8.50 (eight and fifty). Currently attending Master
            studies.
          </p>
        </div>

        <div data-aos='zoom-in-right' className={b('job').mix(b('job-2'))}>
          <h4>First Job</h4>
          <p>
            In march 2017 my faculty gave me a chance to work as volunteer in
            High technical school. At the start that was very good for me to see
            how one serious institution works. And i started with basic stuff,
            maintenance website, computer networking, programming routers and
            checking the hardware's correctness. After one month I started
            receiving the salary. This job gave me opportunity for better
            acquainting with HTML, CSS, Java Script, Web services and how
            information system works and what it consists of.
          </p>
        </div>

        <div data-aos='zoom-in' className={b('job').mix(b('job-3'))}>
          <h4>My dream Job</h4>
          <p>
            As one developer I was not satisfied with the work in high school
            where I was doing some basic things. I was given the opportunity to
            work in the local municipality, I thought it would be better. I was
            working on diagnosing computer problems, monitoring computer
            processing systems, set up workstations, develop and maintain local
            networks in ways that optimize performance, perform troubleshooting
            to diagnose and resolve problems (repair or replace parts, debugging
            etc.) Also, I assisted employees with computer problems, teaching
            them how properly use computer's software and answer on their
            questions and other things. My job was not difficult, but I was not
            happy. All I learned at college and my own lot of staff but i didn't
            use. That's why I decided to go for my dream to become a successful
            programmer, I want to learn more and progress in IT world.
          </p>
        </div>
      </div>
    </main>
  );
}
