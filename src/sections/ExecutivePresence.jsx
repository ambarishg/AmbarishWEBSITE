import { Box, Container, Grid, Heading, Link, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import SectionHeading from '../components/SectionHeading.jsx';

const cards = [
  {
    title: 'Research and public-interest credibility',
    description:
      'Recognition built through work that connects analytical discipline to conservation, public-interest, and mission-driven outcomes.',
    link: { label: 'Read the NASA profile', href: 'https://science.nasa.gov/people/ambarish-ganguly/' }
  },
  {
    title: 'Microsoft validation for applied AI leadership',
    description:
      'Repeated Microsoft recognition reflects a pattern of practical cloud and AI execution rather than purely conceptual experimentation.',
    links: [
      { label: 'Watch the Bees health showcase', href: 'https://www.youtube.com/watch?v=d92H_wPyrUE' },
      {
        label: 'Future Ready Champions press release',
        href: 'https://news.microsoft.com/en-in/microsoft-celebrates-future-ready-champions-of-code-with-over-100k-developers-and-technology-enthusiasts/'
      }
    ]
  },
  {
    title: 'Government-facing problem solving',
    description:
      'Recognition from public programmes demonstrates the ability to connect analytics and AI with infrastructure, policy, and societal outcomes.',
    link: { label: 'See the DST announcement', href: 'https://www.indianweb2.com/2023/06/winners-of-dst-geospatial-hackathon-2023.html' }
  },
  {
    title: 'Analytical range with communication strength',
    description:
      'The Kaggle record reinforces both analytical depth and the ability to communicate complex work with clarity and influence.',
    link: { label: 'Explore the Kaggle portfolio', href: '/highlights/kaggle-achievements' }
  }
];

const ExecutivePresence = () => {
  const accent = useColorModeValue('brand.500', 'brand.200');
  const borderColor = useColorModeValue('rgba(15,23,42,0.08)', 'rgba(148,163,184,0.18)');
  const softBg = useColorModeValue('rgba(255,255,255,0.82)', 'rgba(15,23,42,0.68)');
  const sideBg = useColorModeValue('rgba(59,134,245,0.06)', 'rgba(59,134,245,0.12)');

  return (
    <Box id="executive-presence" py={{ base: 14, md: 18 }}>
      <Container maxW="7xl">
        <SectionHeading
          eyebrow="Authority Signals"
          title="Proof points that reinforce leadership authority."
          description="Recognition matters here because it supports an operating record built on judgment, execution, and technical credibility."
        />
        <Grid templateColumns={{ base: '1fr', xl: '0.9fr 1.5fr' }} gap={{ base: 8, xl: 10 }} mt={10}>
          <Stack
            spacing={5}
            borderRadius="3xl"
            border="1px solid"
            borderColor={borderColor}
            bg={sideBg}
            p={{ base: 6, md: 8 }}
          >
            <Text textTransform="uppercase" letterSpacing="0.18em" fontSize="xs" color="caption">
              Leadership Context
            </Text>
            <Heading size="md" lineHeight={1.35}>
              External recognition reinforces the operating record rather than defining it.
            </Heading>
            <Text color="subtleText" lineHeight={1.85}>
              The portfolio spans enterprise transformation, public-interest research, applied AI, and community-facing delivery. What matters is not the breadth alone, but the consistency of judgment across different environments.
            </Text>
          </Stack>
          <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6}>
            {cards.map((card, index) => (
              <Box
                key={card.title}
                borderRadius="3xl"
                border="1px solid"
                borderColor={borderColor}
                bg={softBg}
                p={{ base: 6, md: 7 }}
                backdropFilter="blur(16px)"
                position="relative"
                overflow="hidden"
              >
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  h="3px"
                  bg={index % 2 === 0 ? accent : 'rgba(148,163,184,0.45)'}
                />
                <Stack spacing={4}>
                  <Text textTransform="uppercase" letterSpacing="0.18em" fontSize="xs" color="caption">
                    Signal {index + 1}
                  </Text>
                  <Heading size="sm" color={accent} lineHeight={1.4}>
                    {card.title}
                  </Heading>
                  <Text color="text" lineHeight={1.8}>
                    {card.description}
                  </Text>
                  {card.link ? (
                    <Link
                      href={card.link.href}
                      color={accent}
                      fontWeight="semibold"
                      isExternal={card.link.href.startsWith('http')}
                    >
                      {card.link.label} →
                    </Link>
                  ) : null}
                  {card.links ? (
                    <Stack spacing={2}>
                      {card.links.map((link) => (
                        <Link
                          key={link.label + link.href}
                          href={link.href}
                          color={accent}
                          fontWeight="semibold"
                          isExternal={link.href.startsWith('http')}
                        >
                          {link.label} →
                        </Link>
                      ))}
                    </Stack>
                  ) : null}
                </Stack>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ExecutivePresence;
