import * as uuid from 'uuid/v4';
import ShopIcon from '@images/projects/shop.jpg';
import ChatIcon from '@images/projects/chat.png';
import ParallaxIcon from '@images/projects/parallax.jpg';
import PortfolioIcon from '@images/projects/portfolio.jpg';
import MeetUpIcon from '@images/projects/meetup-logo.png';

export const myProjects = [
  {
    name: 'Shopping application',
    image: ShopIcon,
    id: uuid(),
    text: `This application was built with Node Js and Express framework using Mongo dB database,
       Passport js authentication, Stripe api for users’ payments. It also covers Sessions, Local storage, Cookies,
       Jade template. Shopping application has a lot of functionalities: sign up and sign in functionality for users, so you can access application with your email,
        Google and GitHub account. The application has shopping cart functionality where users can store their orders and eventually add or delete items.
         The process automatically adds and subtracts total value. The whole process is under Stripe api control so when you put your
          credit card number and basic information about your data it will store in Mongo DB and in the section user management you can see all your purchases.`,
  },
  {
    name: 'Chat application',
    image: ChatIcon,
    id: uuid(),
    text: `I built a Node.js chat application with express and Socket.io and JavaScript on client side. Socket.io enables real-time, bidirectional and event-based communication.
      It works on every platform, browser or device, focusing equally on reliability and speed.
      Everybody who wants chat, must enter his credentials first, avatar image is optional.
      After that you entered on page where is chat section and list online users .
       Application has nice animations and sounds, and is perfect for big and small devices
     `,
  },
  {
    name: 'Parallax website',
    image: ParallaxIcon,
    id: uuid(),
    text:
      'I built very basic implementation of a parallax website with fixed scrolling using HTML and CSS. We can scroll and the images will stay in place.',
  },
  {
    name: 'Portfolio',
    image: PortfolioIcon,
    id: uuid(),
    text: `Portfolio is created with React, TypeScript and Sass.
    I used Bem concept for class naming, Aos animations, react-bootstrap,
    react-awesome icons and emailjs server provider. With emailjs users can send me email via contact form
     in Contact section, without any server implementation.
    Projects has many feature and modern concepts, like react hooks, react-router-5, interfaces, types etc..
    Site is responsive, so it nicely adjusts on both large and small screens.`,
  },
  {
    name: 'Meetup',
    image: MeetUpIcon,
    id: uuid(),
    text: `This projects is built with react and clean css. Application is showing
    a list of cities where meetup events are held. And by clicking on a city,
    we get additional information about the event, where it takes place in, on how many hours and so on.`,
  },
];
