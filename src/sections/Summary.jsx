import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  IconButton,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { HiSparkles } from 'react-icons/hi';
import SectionHeading from '../components/SectionHeading.jsx';
import { summary } from '../data/profile.js';

const Summary = () => {
  return (
    <Box id="about" py={{ base: 16, md: 20 }}>
      <Container maxW="6xl">
        <SectionHeading
          eyebrow="Summary"
          title="Guiding mission-critical utilities through data, analytics, and AI."
        />
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mt={12}>
          {summary.map((item) => (
            <Stack
              key={item}
              spacing={6}
              layerStyle="card"
              p={{ base: 6, md: 8 }}
              transition="transform 0.2s ease, box-shadow 0.2s ease"
              _hover={{ transform: 'translateY(-6px)', boxShadow: 'floating' }}
            >
              <IconButton
                aria-label="Highlights"
                icon={<Icon as={HiSparkles} boxSize={5} />}
                size="lg"
                isRound
                variant="ghost"
                bg={useColorModeValue('rgba(59, 134, 245, 0.12)', 'rgba(59, 134, 245, 0.16)')}
                color={useColorModeValue('brand.600', 'brand.300')}
                _hover={{ bg: useColorModeValue('brand.100', 'rgba(59, 134, 245, 0.26)') }}
              />
              <Text color="text">{item}</Text>
            </Stack>
          ))}
        </SimpleGrid>
        <Box layerStyle="subtleCard" mt={{ base: 12, md: 16 }} p={{ base: 6, md: 8 }}>
          <Stack spacing={4} align={{ base: 'flex-start', md: 'center' }} textAlign={{ base: 'left', md: 'center' }}>
            <Heading size="md" color={useColorModeValue('brand.700', 'brand.200')}>
              Featured NASA Interview
            </Heading>
            <Text color="subtleText" maxW="3xl">
              NASA profiled Ambarish’s citizen science journey—spotlighting contributions to planetary research, open data, and applied AI for sustainability.
            </Text>
            <Button
              as={Link}
              href="https://science.nasa.gov/people/ambarish-ganguly/"
              colorScheme="brand"
              target="_blank"
              rel="noopener noreferrer"
              size="md"
            >
              Read the NASA Interview
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Summary;
