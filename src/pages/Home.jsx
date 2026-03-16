import { Fragment } from 'react';
import Hero from '../sections/Hero.jsx';
import TrustedBy from '../sections/TrustedBy.jsx';
import PublicServiceAdvisory from '../sections/PublicServiceAdvisory.jsx';
import Summary from '../sections/Summary.jsx';
import ExecutivePresence from '../sections/ExecutivePresence.jsx';
import NasaAchievement from '../sections/NasaAchievement.jsx';
import BeesAzureStory from '../sections/BeesAzureStory.jsx';
import Credentials from '../sections/Credentials.jsx';
import useSEO from '../hooks/useSEO.js';
import { seo } from '../data/seo.js';

const Home = () => {
  useSEO(seo.home);

  return (
    <Fragment>
      <Hero />
      <NasaAchievement />
      <BeesAzureStory />
      <TrustedBy />
      <PublicServiceAdvisory />
      <Summary />
      <ExecutivePresence />
      <Credentials />
    </Fragment>
  );
};

export default Home;
