import * as uuid from 'uuid/v4';
import ShopIcon from '@images/projects/shop.png';
import ChatIcon from '@images/projects/chat.png';
import ParallaxIcon from '@images/projects/parallax.png';
import PortfolioIcon from '@images/projects/portfolio.png';

export const myProjects = [
  {
    name: 'Shopping application',
    image: ShopIcon,
    id: uuid(),
    text:
      'This application was built with Node Js and Express framework using Mongo dB database, Passport js authentication, Stripe api for users’ payments. It also covers Sessions, Local storage, Cookies, Jade template, and everything is deployed on the Heroku service platform. Shopping application is only for testing, but it has a lot of functionalities: sign up and sign in functionality for users, so you can access application with your email, Google and GitHub account. The application has shopping cart functionality where users can store their orders and eventually add or delete items. The process automatically adds and subtracts total value. The whole process is under Stripe api control so when you put your credit card number and basic information about your data it will store in Mongo DB and in the section user management you can see all your purchases. Click on project to see how it looks.',
  },
  {
    name: 'Chat application',
    image: ChatIcon,
    id: uuid(),
    text:
      "I built a Node.js chat application with express and Socket.io,Socket.io enables real-time, bidirectional and event-based communication. It works on every platform, browser or device, focusing equally on reliability and speed. This apllication looks simple but the code is a bit advanced. I didn't focus on disagn but i put some animations, like a sounds effects and you can upload your picture as avatar. I put this appliaction on heroku so click on project to see how it looks",
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
    text: `Portfolio is created with React and TypeScript, also i used Aos animations and Sass structure.
    Site is responsive, so it nicely adjusts on both large and small screens.`,
  },
];
