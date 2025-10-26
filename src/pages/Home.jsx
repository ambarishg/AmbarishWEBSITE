import { Fragment } from 'react';
import Hero from '../sections/Hero.jsx';
import Summary from '../sections/Summary.jsx';
import Experience from '../sections/Experience.jsx';
import Credentials from '../sections/Credentials.jsx';
import useSEO from '../hooks/useSEO.js';
import { seo } from '../data/seo.js';

const Home = () => {
  useSEO(seo.home);

  return (
    <Fragment>
      <Hero />
      <Summary />
      <Experience />
      <Credentials />
    </Fragment>
  );
};

export default Home;
