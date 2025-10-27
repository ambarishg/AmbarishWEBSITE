import { useEffect } from 'react';
import { Box, Flex, IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';
import Header from './components/Header.jsx';
import Footer from './sections/Footer.jsx';
import Home from './pages/Home.jsx';
import Highlights from './pages/Highlights.jsx';
import HighlightRandomWalk from './pages/HighlightRandomWalk.jsx';
import HighlightBees from './pages/HighlightBees.jsx';
import HighlightFutureReady from './pages/HighlightFutureReady.jsx';
import HighlightAzureBlogathon from './pages/HighlightAzureBlogathon.jsx';
import HighlightAzureBlogathonCassava from './pages/HighlightAzureBlogathonCassava.jsx';
import HighlightDSTGeospatial from './pages/HighlightDSTGeospatial.jsx';
import HighlightDonorsChoose from './pages/HighlightDonorsChoose.jsx';
import HighlightKiva from './pages/HighlightKiva.jsx';
import HighlightAfricanConflicts from './pages/HighlightAfricanConflicts.jsx';
import HighlightCPE from './pages/HighlightCPE.jsx';
import AGAcademy from './pages/AGAcademy.jsx';
import KaggleAchievements from './pages/KaggleAchievements.jsx';

function ColorModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = useColorModeValue('gray.700', 'yellow.200');
  const toggleBg = useColorModeValue('whiteAlpha.900', 'blackAlpha.500');
  const border = useColorModeValue('rgba(148,163,184,0.35)', 'rgba(148,163,184,0.35)');

  return (
    <IconButton
      aria-label="Toggle color mode"
      icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
      onClick={toggleColorMode}
      bg={toggleBg}
      border="1px solid"
      borderColor={border}
      color={iconColor}
      size="lg"
      position="fixed"
      bottom={8}
      right={8}
      zIndex={10}
      borderRadius="full"
      boxShadow="xl"
      _hover={{
        transform: 'translateY(-2px)',
        boxShadow: '2xl'
      }}
      _active={{
        transform: 'translateY(0)'
      }}
    />
  );
}

const App = () => {
  const location = useLocation();

  useEffect(() => {
    const { hash, pathname } = location;
    if (hash) {
      const target = document.getElementById(hash.replace('#', ''));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <Box minH="100vh" position="relative" display="flex" flexDirection="column">
      <Header />
      <Flex as="main" id="main-content" direction="column" flex="1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/highlights" element={<Highlights />} />
          <Route path="/highlights/random-walk-of-the-penguins" element={<HighlightRandomWalk />} />
          <Route path="/highlights/bees-health-detection" element={<HighlightBees />} />
          <Route path="/highlights/future-ready-champions" element={<HighlightFutureReady />} />
          <Route path="/highlights/azure-blogathon-champion" element={<HighlightAzureBlogathon />} />
          <Route path="/highlights/azure-blogathon-cassava" element={<HighlightAzureBlogathonCassava />} />
          <Route path="/highlights/dst-geospatial-hackathon" element={<HighlightDSTGeospatial />} />
          <Route path="/highlights/donors-choose-recommendation" element={<HighlightDonorsChoose />} />
          <Route path="/highlights/kiva-crowdfunding-analysis" element={<HighlightKiva />} />
          <Route path="/highlights/african-conflicts-visualisation" element={<HighlightAfricanConflicts />} />
          <Route path="/highlights/cpe-equity-visualisation" element={<HighlightCPE />} />
          <Route path="/highlights/kaggle-achievements" element={<KaggleAchievements />} />
          <Route path="/ag-academy" element={<AGAcademy />} />
        </Routes>
      </Flex>
      <Footer />
      <ColorModeToggle />
    </Box>
  );
};

export default App;
