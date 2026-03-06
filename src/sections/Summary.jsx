import { Box, Button, Container, Heading, Link, SimpleGrid, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import SectionHeading from '../components/SectionHeading.jsx';
import { summary } from '../data/profile.js';

const Summary = () => {
  const { cards, conclusion } = summary;
  const accent = useColorModeValue('brand.600', 'brand.200');
  const cardBorder = useColorModeValue('rgba(148, 163, 184, 0.35)', 'rgba(148, 163, 184, 0.25)');
  const cardTitleColor = useColorModeValue('brand.700', 'brand.200');

  return (
    <Box id="about" py={{ base: 16, md: 20 }}>
      <Container maxW="7xl">
        <SectionHeading
          eyebrow="Summary"
          title="Executive leadership anchored in delivery."
        />
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mt={12}>
          {cards.map((card) => (
            <Stack
              key={card.title}
              layerStyle="card"
              spacing={4}
              p={{ base: 5, md: 6 }}
              minH="220px"
            >
              <Heading size="md" color={cardTitleColor}>
                {card.title}
              </Heading>
              <Text color="text" lineHeight={1.7}>
                {card.description}
              </Text>
            </Stack>
          ))}
        </SimpleGrid>
        {conclusion ? (
          <Box
            mt={{ base: 8, md: 10 }}
            borderRadius="xl"
            px={{ base: 6, md: 8 }}
            py={{ base: 5, md: 6 }}
            bg={useColorModeValue('rgba(59, 134, 245, 0.08)', 'rgba(59, 134, 245, 0.14)')}
            border="1px solid"
            borderColor={cardBorder}
          >
            <Text color="text" fontSize={{ base: 'md', md: 'lg' }} fontWeight="medium" lineHeight={1.7}>
              {conclusion}
            </Text>
          </Box>
        ) : null}
        <Box layerStyle="subtleCard" mt={{ base: 10, md: 14 }}>
          <Stack
            spacing={4}
            align={{ base: 'flex-start', md: 'center' }}
            textAlign={{ base: 'left', md: 'center' }}
          >
            <Heading size="md" color={accent}>
              External recognition
            </Heading>
            <Text color="subtleText" maxW="3xl">
              External recognition reinforces the operating record rather than defining it, including a NASA profile on applied citizen science and sustained industry recognition for practical AI leadership.
            </Text>
            <Button
              as={Link}
              href="https://science.nasa.gov/people/ambarish-ganguly/"
              colorScheme="brand"
              target="_blank"
              rel="noopener noreferrer"
              size="md"
            >
              Read the NASA interview
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Summary;
