import { Box, Container, Grid, Heading, Link, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import SectionHeading from '../components/SectionHeading.jsx';
import { summary } from '../data/profile.js';

const Summary = () => {
  const { cards, conclusion } = summary;
  const accent = useColorModeValue('brand.600', 'brand.200');
  const borderColor = useColorModeValue('rgba(15,23,42,0.08)', 'rgba(148,163,184,0.18)');
  const panelBg = useColorModeValue('rgba(255,255,255,0.82)', 'rgba(15,23,42,0.68)');
  const featureBg = useColorModeValue('rgba(59, 134, 245, 0.06)', 'rgba(59, 134, 245, 0.12)');

  return (
    <Box id="about" py={{ base: 16, md: 20 }}>
      <Container maxW="7xl">
        <SectionHeading
          eyebrow="Leadership Positioning"
          title="Boardroom credibility backed by delivery depth."
          description="A compact view of the operating style behind long-horizon transformation work."
        />
        <Grid templateColumns={{ base: '1fr', lg: '1.1fr 0.9fr' }} gap={{ base: 8, lg: 10 }} mt={12}>
          <Box
            borderRadius="3xl"
            border="1px solid"
            borderColor={borderColor}
            bg={panelBg}
            p={{ base: 6, md: 8 }}
            backdropFilter="blur(16px)"
          >
            <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={5}>
              {cards.map((card, index) => (
                <Stack
                  key={card.title}
                  spacing={3}
                  borderLeft={index === 0 ? 'none' : { base: 'none', md: '1px solid' }}
                  borderColor={borderColor}
                  pl={index === 0 ? 0 : { base: 0, md: 5 }}
                >
                  <Text textTransform="uppercase" letterSpacing="0.18em" fontSize="xs" color="caption">
                    {index === 0 ? 'Mandate' : index === 1 ? 'Authority' : 'Execution'}
                  </Text>
                  <Heading size="sm" color={accent} lineHeight={1.35}>
                    {card.title}
                  </Heading>
                  <Text color="text" lineHeight={1.8}>
                    {card.description}
                  </Text>
                </Stack>
              ))}
            </Grid>
          </Box>
          <Stack
            spacing={5}
            borderRadius="3xl"
            border="1px solid"
            borderColor={borderColor}
            bg={featureBg}
            p={{ base: 6, md: 8 }}
          >
            <Text textTransform="uppercase" letterSpacing="0.18em" fontSize="xs" color="caption">
              Perspective
            </Text>
            {conclusion ? (
              <Text color="text" fontSize={{ base: 'md', md: 'lg' }} fontWeight="medium" lineHeight={1.9}>
                {conclusion}
              </Text>
            ) : null}
            <Link
              href="https://science.nasa.gov/people/ambarish-ganguly/"
              color={accent}
              fontWeight="semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the NASA interview →
            </Link>
          </Stack>
        </Grid>
      </Container>
    </Box>
  );
};

export default Summary;
