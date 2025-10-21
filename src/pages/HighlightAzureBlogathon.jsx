import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Container,
  Divider,
  Grid,
  GridItem,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Tag,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading.jsx';
import careerCaseStudy from '../../blogs/Career.pdf?url';

const highlight = {
  title: 'Azure Blogathon Champion | Case Study',
  subtitle:
    'How thought leadership, technical storytelling, and Azure architecture guidance earned a two-time championship.',
  tags: ['Azure Blogathon', 'Community Champion', 'Technical Writing', 'Azure Architecture'],
  cta: {
    label: 'Read the winning case study (PDF)',
    href: careerCaseStudy
  }
};

const narrative = [
  {
    eyebrow: 'Community Impact',
    title: 'Amplifying Azure adoption through storytelling',
    description:
      'The Azure Blogathon celebrates thought leaders who translate complex cloud architectures into actionable guidance. Ambarish’s submissions distilled enterprise-scale learnings into practitioner-friendly narratives that accelerated adoption across the community.',
    points: [
      'Articulated pragmatic reference architectures that practitioners could adapt with minimal friction.',
      'Connected real-world utility sector experiences to Azure-native patterns, demystifying modernization journeys.',
      'Highlighted responsible AI and governance considerations so teams could ship confidently.'
    ]
  },
  {
    eyebrow: 'Winning Entry Highlights',
    title: 'Blueprint for repeatable enterprise success',
    description:
      'The winning article (linked below) showcases how to structure an Azure solution from discovery through deployment, ensuring teams can move from ideation to measurable outcomes.',
    points: [
      'Mapped customer pains to Azure services, illustrating why each component mattered to business stakeholders.',
      'Outlined implementation sprints with checkpoints for security, data quality, and change management.',
      'Provided reusable assets—architecture diagrams, migration steps, and operational guardrails.'
    ]
  },
  {
    eyebrow: 'Beyond the Competition',
    title: 'Sustained excellence recognised twice',
    description:
      'Earning the Azure Blogathon championship twice underscores a long-term commitment to community-first contributions and rigorous storytelling.',
    points: [
      'Maintains a cadence of Azure-focused content that bridges leadership vision with engineering detail.',
      'Mentors practitioners across industries, enabling them to apply these approaches to their unique contexts.',
      'Continues to evolve the narrative with lessons learned from data, AI, and platform transformations.'
    ]
  }
];

const quickFacts = [
  {
    label: 'Championships',
    value: '2x Azure Blogathon Champion'
  },
  {
    label: 'Focus',
    value: 'Enterprise Azure adoption, storytelling, and governance'
  },
  {
    label: 'Format',
    value: 'Long-form technical case study backed by field experience'
  }
];

const HighlightAzureBlogathon = () => {
  const badgeColor = useColorModeValue('brand.600', 'brand.300');
  const subtleText = useColorModeValue('gray.600', 'gray.400');

  return (
    <Box as="article" py={{ base: 16, md: 20 }}>
      <Container maxW="6xl">
        <Breadcrumb
          mb={8}
          fontSize="sm"
          separator="/"
          color={useColorModeValue('gray.500', 'gray.400')}
        >
          <BreadcrumbItem>
            <BreadcrumbLink as={RouterLink} to="/">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink as={RouterLink} to="/highlights">
              Case Studies
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>Azure Blogathon Champion</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Grid templateColumns={{ base: '1fr', lg: '7fr 5fr' }} gap={{ base: 10, lg: 16 }}>
          <GridItem>
            <Stack spacing={{ base: 6, md: 8 }}>
              <Tag
                size="md"
                colorScheme="brand"
                variant="subtle"
                px={4}
                py={2}
                w="fit-content"
                borderRadius="full"
              >
                Azure Community Excellence
              </Tag>
              <Heading size={{ base: 'xl', md: '2xl' }}>{highlight.title}</Heading>
              <Text fontSize={{ base: 'md', md: 'lg' }} color={subtleText} maxW="3xl">
                {highlight.subtitle}
              </Text>
              <WrapTags tags={highlight.tags} badgeColor={badgeColor} />
              <Button
                as="a"
                href={highlight.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                colorScheme="brand"
                size="lg"
                rightIcon={<ExternalLinkIcon />}
              >
                {highlight.cta.label}
              </Button>
            </Stack>
          </GridItem>
          <GridItem>
            <Stack
              spacing={4}
              p={{ base: 6, md: 7 }}
              borderRadius="2xl"
              boxShadow="xl"
              layerStyle="card"
            >
              <Heading size="sm" color={badgeColor} letterSpacing="0.06em" textTransform="uppercase">
                Quick facts
              </Heading>
              <Stack spacing={4}>
                {quickFacts.map((fact) => (
                  <Box key={fact.label}>
                    <Text fontSize="sm" color={subtleText} textTransform="uppercase" letterSpacing="0.08em">
                      {fact.label}
                    </Text>
                    <Text fontWeight="semibold" mt={1}>
                      {fact.value}
                    </Text>
                  </Box>
                ))}
              </Stack>
            </Stack>
          </GridItem>
        </Grid>

        <Divider my={{ base: 16, md: 20 }} borderColor="outline" />

        <Stack spacing={{ base: 10, md: 12 }}>
          {narrative.map((section) => (
            <Box
              key={section.title}
              layerStyle="card"
              p={{ base: 6, md: 8 }}
              borderLeftWidth="4px"
              borderLeftColor={useColorModeValue('brand.500', 'brand.300')}
              boxShadow="lg"
            >
              <SectionHeading
                eyebrow={section.eyebrow}
                title={section.title}
                description={section.description}
              />
              <Stack spacing={3} mt={6}>
                {section.points.map((point) => (
                  <Stack key={point} direction="row" spacing={3} align="flex-start">
                    <Icon viewBox="0 0 20 20" color="brand.400" boxSize={5} mt={1}>
                      <path
                        fill="currentColor"
                        d="M8.5 13.5 5 10l1.4-1.4 2.1 2.1 5.1-5.1L15 7.1z"
                      />
                    </Icon>
                    <Text color={subtleText}>{point}</Text>
                  </Stack>
                ))}
              </Stack>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

const WrapTags = ({ tags, badgeColor }) => {
  if (!tags.length) {
    return null;
  }
  const tagBg = useColorModeValue('brand.50', 'rgba(59, 130, 246, 0.12)');
  return (
    <SimpleGrid columns={{ base: 2, sm: tags.length >= 4 ? 3 : 2 }} spacing={2} maxW="xl">
      {tags.map((tag) => (
        <Tag
          key={tag}
          size="sm"
          variant="subtle"
          colorScheme="brand"
          bg={tagBg}
          color={badgeColor}
        >
          {tag}
        </Tag>
      ))}
    </SimpleGrid>
  );
};

export default HighlightAzureBlogathon;
