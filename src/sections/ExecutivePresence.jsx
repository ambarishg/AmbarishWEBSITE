import { Box, Container, Grid, GridItem, Heading, Link, List, ListIcon, ListItem, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import SectionHeading from '../components/SectionHeading.jsx';

const cards = [
  {
    title: 'Enterprise mandate with hands-on involvement',
    description:
      'More than 25 years leading transformation across utilities and energy, while staying directly involved in architecture, solution shaping, and execution tradeoffs.',
    details: [
      'Leads data, analytics, AI, and modernization mandates for enterprise utility programs.',
      'Operates across strategy, operating model, delivery governance, and technical direction.'
    ],
    minH: '220px'
  },
  {
    title: 'Public-sector and research credibility',
    description:
      'Credibility built through real contribution, including NASA recognition and work that connects data science to public-interest and sustainability outcomes.',
    details: [
      'Featured by NASA for citizen science contributions.',
      'Winner of the NASA-sponsored Random Walk of the Penguins challenge on DrivenData.'
    ],
    link: { label: 'Read the NASA profile', href: 'https://science.nasa.gov/people/ambarish-ganguly/' },
    minH: '200px'
  },
  {
    title: 'Microsoft validation for practical AI leadership',
    description:
      'Recognition from Microsoft reflects a pattern of building practical, production-oriented AI and cloud solutions rather than purely conceptual work.',
    details: [
      'Microsoft Most Valuable Professional in AI (Alumni).',
      'Microsoft Certified Trainer and repeat Azure Blogathon winner.',
      'Future Ready Champions of Code winner.',
      'Azure-based solution showcased by Microsoft India.'
    ],
    links: [
      { label: 'Watch the Bees health showcase', href: 'https://www.youtube.com/watch?v=d92H_wPyrUE' },
      {
        label: 'Future Ready Champions press release',
        href: 'https://news.microsoft.com/en-in/microsoft-celebrates-future-ready-champions-of-code-with-over-100k-developers-and-technology-enthusiasts/'
      }
    ],
    minH: '280px'
  },
  {
    title: 'Government-facing problem solving',
    description: 'Recognition from Government of India programs demonstrates the ability to connect analytics and AI with infrastructure, policy, and societal outcomes.',
    link: { label: 'See the DST announcement', href: 'https://www.indianweb2.com/2023/06/winners-of-dst-geospatial-hackathon-2023.html' },
    minH: '180px'
  },
  {
    title: 'Analytical depth and communication range',
    description: 'A strong Kaggle record adds evidence of analytical range, clear storytelling, and the discipline to turn complex data into actionable decisions.',
    details: [
      'Kaggle Kernel Master',
      'Kaggle Weekly Kernel Award Winner',
      'Award-winning work in recommendation systems and social-impact analysis',
      'Recognized for both technical quality and communication clarity'
    ],
    link: { label: 'Explore the Kaggle story', href: '/highlights/kaggle-achievements' },
    minH: '240px',
    colSpan: { base: 1, md: 2 }
  }
];

const ExecutivePresence = () => {
  const bg = useColorModeValue('surface', 'rgba(255,255,255,0.02)');
  const accent = useColorModeValue('brand.500', 'brand.200');
  const gridTemplate = { base: 'repeat(1, minmax(0, 1fr))', md: 'repeat(2, minmax(0, 1fr))', xl: 'repeat(3, minmax(0, 1fr))' };
  const gridGap = { base: 3, md: 4 };

  return (
    <Box id="executive-presence" py={{ base: 12, md: 16 }}>
      <Container maxW="7xl">
        <SectionHeading
          eyebrow="Executive presence"
          title="Selective proof points that support the leadership narrative"
          description="These recognitions matter because they reinforce an operating record built on execution, judgment, and technical credibility."
        />
        <Grid templateColumns={gridTemplate} gridAutoRows="1fr" gap={gridGap} mt={8}>
          {cards.map((card) => (
            <GridItem key={card.title} colSpan={card.colSpan ?? 1}>
              <Box
                layerStyle="card"
                bg={bg}
                borderColor="outline"
                borderWidth="1px"
                p={{ base: 5, md: 6 }}
                display="flex"
                flexDirection="column"
                minH={card.minH}
              >
                <Stack spacing={2} flex={1}>
                  <Heading size="md" color={accent}>
                    {card.title}
                  </Heading>
                  <Text color="subtleText" lineHeight={1.6}>
                    {card.description}
                  </Text>
                  {card.details ? (
                    <List spacing={2} pl={0}>
                      {card.details.map((detail) => (
                        <ListItem key={detail} color="text" fontSize="sm">
                          <ListIcon as={CheckCircleIcon} color={accent} />
                          {detail}
                        </ListItem>
                      ))}
                    </List>
                  ) : null}
                  {card.link ? (
                    <Link
                      href={card.link.href}
                      color={accent}
                      fontWeight="semibold"
                      isExternal={card.link.href.startsWith('http')}
                    >
                      {card.link.label}
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
                          {link.label}
                        </Link>
                      ))}
                    </Stack>
                  ) : null}
                </Stack>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ExecutivePresence;
