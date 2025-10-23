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
  title: 'Azure Blogathon Champion | CareerVillage Case Study',
  subtitle:
    'Award-winning blueprint for connecting underserved students with volunteer mentors using Azure Kubernetes Service, Azure ML, Azure Service Bus, and Azure SQL.',
  tags: [
    'Azure Blogathon',
    'CareerVillage.org',
    'Azure Kubernetes Service',
    'Azure Machine Learning',
    'Responsible AI Storytelling'
  ],
  cta: {
    label: 'Open the detailed case study (PDF)',
    href: careerCaseStudy
  }
};

const impactStats = [
  {
    value: '≈500 : 1',
    label: 'Students per counsellor in the U.S.',
    description: 'Highlights the scale of the guidance gap the solution addresses.'
  },
  {
    value: '25K+',
    label: 'Volunteer mentors on CareerVillage.org',
    description: 'Community reach demanding automated routing and stewardship.'
  },
  {
    value: 'Top 10',
    label: 'Answers surfaced instantly',
    description: 'UI elevates the highest-similarity responses for every new student query.'
  }
];

const sections = [
  {
    eyebrow: 'Mission Framing',
    title: 'Closing the mentoring gap for underserved youth',
    description:
      'CareerVillage.org required an engine that could route student career questions to the right volunteer professionals despite limited counsellor capacity and disparate content sources.',
    paragraphs: [
      'The United States averages nearly five hundred students per guidance counsellor, leaving millions of learners without timely advice. CareerVillage.org bridges that gap through a global community of more than 25,000 volunteer mentors, yet the team needed automation to match questions with the best-suited experts.',
      'The Azure Blogathon submission tackled the challenge as a production-grade engagement, translating community ambition into an actionable, repeatable architecture others can adopt.'
    ],
    points: [
      'Blended student questions, mentor profiles, and historic answers into a reusable knowledge base.',
      'Established an equitable routing model so underserved youth receive personalised responses quickly.',
      'Treated the initiative with enterprise rigour, mirroring how regulated programmes launch modern Azure workloads.'
    ]
  },
  {
    eyebrow: 'Solution Blueprint',
    title: 'Microservices orchestrated on Azure Kubernetes Service',
    description:
      'The architecture separates recommendation intelligence from professional outreach, enabling independent scaling and resilient operations.',
    paragraphs: [
      'Azure ML hosts the experimentation workspace where TF-IDF vectorisation and cosine similarity models learn from historic Q&A. The resulting artefacts are versioned and published to a registry ready for containerised inference.',
      'Twin microservices are deployed to Azure Kubernetes Service: the recommendation service provides real-time similarity scoring, while the professionals service enriches matches with mentor availability sourced from Azure Storage-backed datasets.'
    ],
    points: [
      'Recommendation microservice exposes REST endpoints that retrieve the top ten semantically similar answers for each student query.',
      'Professionals microservice consumes recommendation events from Azure Service Bus, joins them with mentor metadata mounted via persistent volumes, and writes actionable tasks into Azure SQL.',
      'Persistent Volume and Persistent Volume Claim abstractions keep model artefacts and mentor rosters synchronised across pods for predictable rollouts.'
    ]
  },
  {
    eyebrow: 'Intelligence & Data',
    title: 'Applied natural language processing for contextual matching',
    description:
      'The notebook details how text features, TF-IDF weighting, and cosine similarity create fast, interpretable recommendations aligned with Azure ML best practices.',
    paragraphs: [
      'Tokenisation, stop-word removal, and TF-IDF scoring downplay high-frequency words such as “the” while amplifying context-rich signals like “first internship” or “cloud architect”.',
      'Cosine similarity matrices compare live questions to a curated library of answered prompts, returning the highest relevance scores in milliseconds.',
      'The user interface surfaces each recommended answer alongside its author, ensuring transparency and trust for students reviewing guidance.'
    ],
    points: [
      'Reinforced responsible AI principles by keeping explanations human-readable and auditable.',
      'Codified evaluation routines so additional question domains can be onboarded with minimal retraining.',
      'Published the GitHub repository with deployment scripts so other non-profits can operationalise similar workflows rapidly.'
    ]
  },
  {
    eyebrow: 'Operations & Governance',
    title: 'Reliable delivery pipelines with Azure Service Bus and SQL',
    description:
      'Beyond modelling, the article provides runbook-level guidance for production support teams operating in regulated environments.',
    paragraphs: [
      'Azure Service Bus Topics and Subscriptions decouple ingestion of recommendations from mentor outreach, enabling back-pressure handling and real-time monitoring.',
      'Azure SQL stores final student-to-mentor matches, acting as a durable queue for unanswered questions and a reporting source for fulfilment metrics.',
      'Comprehensive deployment steps describe how to package containers, configure ingress, and promote upgrades without downtime.'
    ],
    points: [
      'Documented health probes, autoscaling thresholds, and blue/green rollout patterns inside AKS.',
      'Protected sensitive data through role-based access on storage shares and encrypted configuration secrets.',
      'Captured post-deployment analytics so community managers can identify underserved domains and recruit additional mentors.'
    ]
  }
];

const architectureLayers = [
  {
    title: 'Azure ML Experimentation',
    description:
      'Feature engineering, TF-IDF training, and cosine similarity scoring executed in managed notebooks and pipelines.',
    bullets: [
      'Version-controlled experiments with repeatable dataset splits and evaluations.',
      'Model registry entries packaged for container inference in AKS.',
      'Relevance and fairness reports published for auditing and stakeholder review.'
    ]
  },
  {
    title: 'AKS Microservices',
    description:
      'Scalable recommendation and professional-routing services with persistent volumes for artefacts and mentor data.',
    bullets: [
      'Ingress controller exposes REST APIs that power the student-facing experience.',
      'Horizontal pod autoscaling keeps latency consistent during seasonal or campaign-driven spikes.',
      'Readiness and liveness probes monitored through Azure Monitor ensure rapid remediation.'
    ]
  },
  {
    title: 'Integration Fabric',
    description:
      'Azure Service Bus Topics, Storage File Shares, and Azure SQL orchestrate enterprise-grade data movement.',
    bullets: [
      'Service Bus subscriptions isolate recommendation, notification, and analytics workloads.',
      'Persistent storage ensures mentor profiles stay synchronised across pods and job runs.',
      'Azure SQL tables centralise question-to-mentor assignments for downstream reporting and triage.'
    ]
  }
];

const quickFacts = [
  {
    label: 'Competition',
    value: 'Azure Blogathon – community storytelling challenge (2× champion)'
  },
  {
    label: 'Use case',
    value: 'CareerVillage.org – career recommendations for underserved youth'
  },
  {
    label: 'Azure focus',
    value: 'Azure ML, AKS, Service Bus, Azure SQL, Storage File Shares'
  },
  {
    label: 'Delivery assets',
    value: 'Notebook, architecture diagrams, deployment runbooks, GitHub repository'
  }
];

const HighlightAzureBlogathon = () => {
  const badgeColor = useColorModeValue('brand.600', 'brand.300');
  const subtleText = useColorModeValue('gray.600', 'gray.400');
  const statBg = useColorModeValue('whiteAlpha.900', 'rgba(15,23,42,0.88)');
  const statBorder = useColorModeValue('rgba(148,163,184,0.28)', 'rgba(148,163,184,0.25)');
  const statLabel = useColorModeValue('gray.500', 'gray.400');
  const cardAccent = useColorModeValue('brand.500', 'brand.300');
  const tagBg = useColorModeValue('brand.50', 'rgba(59,130,246,0.12)');

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
              <WrapTags tags={highlight.tags} badgeColor={badgeColor} chipBg={tagBg} />
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
              <SimpleGrid columns={{ base: 1, sm: 3 }} spacing={4}>
                {impactStats.map((stat) => (
                  <Box
                    key={stat.label}
                    bg={statBg}
                    borderRadius="xl"
                    border="1px solid"
                    borderColor={statBorder}
                    p={{ base: 4, md: 5 }}
                    boxShadow="0 18px 40px -30px rgba(59,130,246,0.45)"
                  >
                    <Text fontSize="sm" letterSpacing="0.12em" textTransform="uppercase" color={statLabel}>
                      {stat.label}
                    </Text>
                    <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="semibold" mt={1}>
                      {stat.value}
                    </Text>
                    <Text fontSize="xs" mt={2} color={subtleText}>
                      {stat.description}
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>
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
          {sections.map((section) => (
            <Box
              key={section.title}
              layerStyle="card"
              p={{ base: 6, md: 8 }}
              borderLeftWidth="5px"
              borderLeftColor={cardAccent}
              boxShadow="lg"
            >
              <SectionHeading
                eyebrow={section.eyebrow}
                title={section.title}
                description={section.description}
              />
              {section.paragraphs?.length ? (
                <Stack spacing={3} mt={6}>
                  {section.paragraphs.map((paragraph) => (
                    <Text key={paragraph} color={subtleText}>
                      {paragraph}
                    </Text>
                  ))}
                </Stack>
              ) : null}
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

        <Divider my={{ base: 16, md: 20 }} borderColor="outline" />

        <Stack spacing={{ base: 12, md: 14 }}>
          <Box>
            <SectionHeading
              eyebrow="Solution Layers"
              title="Holistic Azure architecture delivered as a reusable playbook"
              description="Each layer of the solution focuses on one dimension—intelligence, orchestration, and integration—so teams can recompose the pattern for their own domains."
            />
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 6, md: 8 }} mt={{ base: 6, md: 8 }}>
              {architectureLayers.map((layer) => (
                <Box
                  key={layer.title}
                  layerStyle="subtleCard"
                  borderRadius="2xl"
                  p={{ base: 6, md: 7 }}
                  border="1px solid"
                  borderColor={useColorModeValue('rgba(99,102,241,0.18)', 'rgba(129,140,248,0.35)')}
                  boxShadow="0 24px 70px -40px rgba(30,64,175,0.45)"
                >
                  <Heading size="sm" color={cardAccent}>
                    {layer.title}
                  </Heading>
                  <Text color={subtleText} fontSize="sm" mt={3}>
                    {layer.description}
                  </Text>
                  <Stack spacing={2.5} mt={5}>
                    {layer.bullets.map((bullet) => (
                      <Stack key={bullet} direction="row" spacing={3} align="flex-start">
                        <Icon viewBox="0 0 20 20" color="brand.400" boxSize={4} mt={1}>
                          <path
                            fill="currentColor"
                            d="M8.5 13.5 5 10l1.4-1.4 2.1 2.1 5.1-5.1L15 7.1z"
                          />
                        </Icon>
                        <Text color={subtleText} fontSize="sm">
                          {bullet}
                        </Text>
                      </Stack>
                    ))}
                  </Stack>
                </Box>
              ))}
            </SimpleGrid>
          </Box>

          <Box layerStyle="card" p={{ base: 6, md: 8 }} borderRadius="3xl" boxShadow="lg">
            <SectionHeading
              eyebrow="Deployment Experience"
              title="From notebook to production without losing observability or empathy"
              description="The case study guides engineers and community stakeholders through every stage—from lab experimentation to student-facing rollout."
            />
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 6, md: 8 }} mt={8}>
              <Stack spacing={4}>
                <Heading size="sm" color={cardAccent}>
                  Student & Mentor Experience
                </Heading>
                <Stack spacing={3}>
                  <Text color={subtleText}>
                    • Students submit a question through the UI; the recommender instantly surfaces the ten closest answered matches so learners gain immediate context.
                  </Text>
                  <Text color={subtleText}>
                    • Recommended pairs are written to Azure SQL, forming a living backlog for any questions needing deeper, bespoke responses.
                  </Text>
                  <Text color={subtleText}>
                    • CareerVillage administrators monitor fulfilment metrics to spot topics that need additional volunteer recruitment.
                  </Text>
                </Stack>
              </Stack>
              <Stack spacing={4}>
                <Heading size="sm" color={cardAccent}>
                  Engineering & Ops Workflow
                </Heading>
                <Stack spacing={3}>
                  <Text color={subtleText}>
                    • Azure DevOps or GitHub Actions containerise the microservices and deploy them to AKS with blue/green rollouts for zero-downtime releases.
                  </Text>
                  <Text color={subtleText}>
                    • Service Bus diagnostics, AKS health probes, and SQL telemetry feed Azure Monitor dashboards for proactive alerting.
                  </Text>
                  <Text color={subtleText}>
                    • The GitHub repository packages infrastructure-as-code snippets, runbooks, and automation scripts so other organisations can replicate the stack quickly.
                  </Text>
                </Stack>
              </Stack>
            </SimpleGrid>
          </Box>
        </Stack>

        <Divider my={{ base: 16, md: 20 }} borderColor="outline" />

        <Stack spacing={{ base: 10, md: 12 }}>
          <Heading size="lg">Why this resonated with the Azure Blogathon jury</Heading>
          <Text color={subtleText}>
            The submission blended compassion with engineering rigour. It demonstrated how Azure services can be assembled
            to solve a human challenge, documented the journey with enterprise-grade artefacts, and open-sourced the learnings
            so other communities can replicate the impact. That balance of storytelling, technical depth, and social value
            secured the championship twice.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const WrapTags = ({ tags, badgeColor, chipBg }) => {
  if (!tags.length) {
    return null;
  }
  return (
    <SimpleGrid columns={{ base: 2, sm: tags.length >= 4 ? 3 : 2 }} spacing={2} maxW="xl">
      {tags.map((tag) => (
        <Tag
          key={tag}
          size="sm"
          variant="subtle"
          colorScheme="brand"
          bg={chipBg}
          color={badgeColor}
        >
          {tag}
        </Tag>
      ))}
    </SimpleGrid>
  );
};

export default HighlightAzureBlogathon;

