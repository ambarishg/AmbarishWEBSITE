import { Box, useColorModeValue } from '@chakra-ui/react';
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
  const topGlow = useColorModeValue('rgba(201, 150, 31, 0.14)', 'rgba(201, 150, 31, 0.12)');
  const sideGlow = useColorModeValue('rgba(69, 107, 167, 0.12)', 'rgba(69, 107, 167, 0.18)');

  return (
    <Box position="relative" overflow="hidden">
      <Box
        position="absolute"
        top="-8rem"
        left="-8rem"
        w="30rem"
        h="30rem"
        bg={topGlow}
        filter="blur(120px)"
        borderRadius="full"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        top="28rem"
        right="-10rem"
        w="28rem"
        h="28rem"
        bg={sideGlow}
        filter="blur(120px)"
        borderRadius="full"
        pointerEvents="none"
      />
      <Hero />
      <TrustedBy />
      <Summary />
      <PublicServiceAdvisory />
      <NasaAchievement />
      <BeesAzureStory />
      <ExecutivePresence />
      <Credentials />
    </Box>
  );
};

export default Home;
