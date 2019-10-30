import * as uuid from 'uuid/v4';
import ShopIcon from '@images/projects/shop.png';

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
    image: ShopIcon,
    id: uuid(),
    text: 'chat app',
  },
  {
    name: 'Portfolio',
    image: ShopIcon,
    id: uuid(),
    text:
      'Portfolio PortfolioPortfolio PortfolioPortfolioPortfolioPortfolioPortfolioPortfolioPortfolioPortfolioPortfolioPortfolio',
  },
];
