import { Box, Container, Grid, Heading, Link, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import SectionHeading from '../components/SectionHeading.jsx';
import { summary } from '../data/profile.js';

const Summary = () => {
  const { cards, conclusion } = summary;
  const accent = useColorModeValue('brand.700', 'accent.200');
  const borderColor = useColorModeValue('rgba(38,61,96,0.12)', 'rgba(208,220,240,0.14)');
  const panelBg = useColorModeValue('rgba(255,250,244,0.7)', 'rgba(10,20,38,0.66)');
  const featureBg = useColorModeValue(
    'linear-gradient(180deg, rgba(255,246,231,0.86), rgba(241,245,251,0.72))',
    'linear-gradient(180deg, rgba(26,37,59,0.84), rgba(14,23,39,0.74))'
  );

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
                  <Heading
                    as="h3"
                    fontFamily="body"
                    fontSize={{ base: 'lg', md: 'xl' }}
                    fontWeight="800"
                    letterSpacing="-0.02em"
                    lineHeight={1.3}
                    color={useColorModeValue('brand.900', 'white')}
                  >
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
            boxShadow="elevated"
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
              {'Read the NASA interview ->'}
            </Link>
          </Stack>
        </Grid>
      </Container>
    </Box>
  );
};

export default Summary;
