import { Box, Container, Grid, Heading, Link, List, ListIcon, ListItem, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import SectionHeading from '../components/SectionHeading.jsx';

const cards = [
  {
    title: 'Hands-on Practitioner in Data & AI',
    description:
      'Over 25 years of delivery across utilities, energy, and enterprise programs, pairing strategy, analytics, and AI with measurable outcomes.',
    minH: '180px'
  },
  {
    title: 'NASA citizen scientist & Random Walk of the Penguins champion',
    description:
      'Featured by NASA for applied citizen science and honored with the DrivenData Random Walk of the Penguins win sponsored by NASA.',
    details: [
      'NASA recognition for planetary citizen science collaborations.',
      '1st prize winner of the climate intelligence Random Walk of the Penguins challenge on DrivenData.org.'
    ],
    link: { label: 'Read the NASA profile', href: 'https://science.nasa.gov/people/ambarish-ganguly/' },
    minH: '200px'
  },
  {
    title: 'Microsoft & Azure recognitions',
    description:
      'Microsoft Most Valuable Professional (AI) alum, Certified Trainer, and repeat Blogathon champion running production-ready Azure solutions.',
    details: [
      'Microsoft Most Valuable Professional in the AI category (Alumni).',
      'Microsoft Certified Trainer delivering Azure & AI mastery sessions.',
      'Two-time Azure Blogathon winner and the Future Ready Champions of Code victory.',
      'Bees Health detection on Azure showcased by Microsoft India.'
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
    title: 'DST Geospatial Hackathon 2023',
    description: 'Winner of the Government of India DST hackathon building geospatial intelligence for policy & infrastructure planning.',
    link: { label: 'See the DST announcement', href: 'https://www.indianweb2.com/2023/06/winners-of-dst-geospatial-hackathon-2023.html' },
    minH: '180px'
  },
  {
    title: 'Kaggle achievements (a Google company)',
    description: 'Kernel awards, storytelling, and recommender wins that complement the executive advisory portfolio.',
    details: [
      'Kaggle Kernel Master',
      'Kaggle Weekly Kernel Award Winner',
      'Themed Kernel Award Winner — Spooky Author Competition',
      'Kernel Award Winner — Data Science for Good: Kiva Crowdfunding dataset',
      'Kernel Award Winner — DonorsChoose.org Application Screening',
      'Kernel Award Winner — DonorsChoose.org Recommender Competition',
      'Kernel Award for Recommender System — DonorsChoose.org Recommender Competition'
    ],
    link: { label: 'Explore the Kaggle story', href: '/highlights/kaggle-achievements' },
    minH: '280px'
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
          title="Executive proof points across NASA, Microsoft, and national hackathons"
          description="Each card highlights a credential, award, or recognition that reinforces the executive narrative on the homepage."
        />
        <Grid templateColumns={gridTemplate} gridAutoRows="1fr" gap={gridGap} mt={8}>
          {cards.map((card) => (
            <Box
              key={card.title}
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
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ExecutivePresence;
