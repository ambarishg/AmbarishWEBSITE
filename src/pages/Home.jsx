import { Fragment } from 'react';
import Hero from '../sections/Hero.jsx';
import Summary from '../sections/Summary.jsx';
import Experience from '../sections/Experience.jsx';
import Credentials from '../sections/Credentials.jsx';

const Home = () => (
  <Fragment>
    <Hero />
    <Summary />
    <Experience />
    <Credentials />
  </Fragment>
);

export default Home;
