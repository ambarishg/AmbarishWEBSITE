import {
  Box,
  Container,
  Divider,
  Grid,
  Heading,
  Link,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Tag,
  Text,
  Wrap,
  WrapItem,
  useColorModeValue
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import SectionHeading from '../components/SectionHeading.jsx';
import WBAICOEProofImage from '../../docs/WBAICOE/29102025.jpeg';
import WBAICOECycleMay2025 from '../../docs/WBAICOE/21052025.pdf';
import WBAICOECycleMar2026 from '../../docs/WBAICOE/10032026.pdf';
import WBAICOECycleJul2026 from '../../docs/WBAICOE/12072026.pdf';

const PublicServiceAdvisory = () => {
  const cardBg = useColorModeValue('rgba(248,250,252,0.9)', 'rgba(10,20,38,0.72)');
  const cardBorder = useColorModeValue('rgba(38,61,96,0.14)', 'rgba(208,220,240,0.16)');
  const accent = useColorModeValue('brand.700', 'accent.200');
  const headingColor = useColorModeValue('brand.900', 'white');
  const mutedAccent = useColorModeValue('rgba(38,61,96,0.7)', 'rgba(226,232,240,0.82)');
  const subtleCard = useColorModeValue('rgba(255,255,255,0.94)', 'rgba(15,23,42,0.62)');
  const subtleBorder = useColorModeValue('rgba(38,61,96,0.12)', 'rgba(208,220,240,0.12)');
  const dividerColor = useColorModeValue('rgba(38,61,96,0.12)', 'rgba(208,220,240,0.12)');
  const statBg = useColorModeValue('rgba(241,245,249,0.95)', 'rgba(20,31,52,0.78)');

  return (
    <Box id="public-service" py={{ base: 12, md: 14 }}>
      <Container maxW="6xl">
        <SectionHeading
          eyebrow="Public Service & Advisory"
          title="Supporting AI talent assessment for a state-backed Centre of Excellence."
          description="This section outlines advisory work related to candidate evaluation, assessment standards, and interview processes in a public-sector setting."
        />
        <Box
          mt={8}
          p={{ base: 5, md: 6 }}
          borderRadius="3xl"
          bg={cardBg}
          border="1px solid"
          borderColor={cardBorder}
          backdropFilter="blur(16px)"
        >
          <Grid templateColumns={{ base: '1fr', lg: '0.95fr 1.05fr' }} gap={{ base: 4, lg: 6 }}>
            <Stack spacing={3}>
              <Stack spacing={2}>
                <Text color="caption" fontSize="xs" textTransform="uppercase" letterSpacing="0.18em">
                  Advisory Mandate
                </Text>
                <Heading
                  as="h3"
                  fontFamily="body"
                  color={headingColor}
                  fontSize={{ base: '2xl', md: '3xl' }}
                  fontWeight="800"
                  letterSpacing="-0.02em"
                  lineHeight={1.15}
                >
                  Pro Bono Subject Matter Expert
                </Heading>
                <Text color="subtleText" lineHeight={1.8}>
                  Government of West Bengal Centre of Excellence on Data Science &amp; Machine Learning.
                </Text>
              </Stack>
              <Wrap spacing={2}>
                <WrapItem>
                  <Tag borderRadius="md" bg={statBg} color={mutedAccent} px={3} py={2}>
                    Five evaluation cycles
                  </Tag>
                </WrapItem>
                <WrapItem>
                  <Tag borderRadius="md" bg={statBg} color={mutedAccent} px={3} py={2}>
                    Candidate calibration
                  </Tag>
                </WrapItem>
                <WrapItem>
                  <Tag borderRadius="md" bg={statBg} color={mutedAccent} px={3} py={2}>
                    Structured assessment
                  </Tag>
                </WrapItem>
              </Wrap>
            </Stack>
            <Stack spacing={3}>
              <Text color="text" fontSize={{ base: 'md', md: 'lg' }} lineHeight={1.9}>
                Participated in five evaluation cycles focused on AI and data science talent
                assessment, including candidate interviews and structured evaluation.
              </Text>
              <Text color="subtleText" lineHeight={1.8}>
                The work centered on consistent assessment criteria, candidate calibration, and
                review processes intended to support capability development over time, with
                supporting evidence dated October 29, 2025, May 21, 2025, March 10, 2026, and
                July 12, 2026.
              </Text>
              <SimpleGrid columns={{ base: 1, sm: 3 }} spacing={3}>
                <Box p={3} borderRadius="xl" bg={subtleCard} border="1px solid" borderColor={subtleBorder}>
                  <Text color="caption" fontSize="xs" textTransform="uppercase" letterSpacing="0.14em">
                    Role
                  </Text>
                  <Text mt={2} color={headingColor} fontWeight="semibold">
                    Subject matter expert
                  </Text>
                </Box>
                <Box p={3} borderRadius="xl" bg={subtleCard} border="1px solid" borderColor={subtleBorder}>
                  <Text color="caption" fontSize="xs" textTransform="uppercase" letterSpacing="0.14em">
                    Coverage
                  </Text>
                  <Text mt={2} color={headingColor} fontWeight="semibold">
                    Five evaluation cycles
                  </Text>
                </Box>
                <Box p={3} borderRadius="xl" bg={subtleCard} border="1px solid" borderColor={subtleBorder}>
                  <Text color="caption" fontSize="xs" textTransform="uppercase" letterSpacing="0.14em">
                    Focus
                  </Text>
                  <Text mt={2} color={headingColor} fontWeight="semibold">
                    Assessment quality
                  </Text>
                </Box>
              </SimpleGrid>
            </Stack>
          </Grid>
          <Grid
            mt={4}
            templateColumns={{ base: '1fr', lg: '0.95fr 1.05fr' }}
            gap={{ base: 4, lg: 6 }}
            alignItems="stretch"
          >
            <Box
              p={{ base: 4, md: 5 }}
              borderRadius="2xl"
              bg={subtleCard}
              border="1px solid"
              borderColor={subtleBorder}
            >
              <Stack spacing={3}>
                <Text color={accent} fontSize={{ base: 'lg', md: 'xl' }} fontWeight="semibold">
                  Evidence
                </Text>
                <Divider borderColor={dividerColor} />
                <Text color="subtleText" lineHeight={1.8}>
                  Supporting materials are provided below for the recorded evaluation cycles and
                  related advisory activity, dated May 21, 2025, October 29, 2025, March 10,
                  2026, and July 12, 2026.
                </Text>
                <Stack spacing={2}>
                  <Link
                    href={WBAICOEProofImage}
                    target="_blank"
                    rel="noopener noreferrer"
                    color={mutedAccent}
                    fontWeight="medium"
                  >
                    Supporting image evidence dated 29 Oct 2025
                  </Link>
                  <Link
                    href={WBAICOECycleMay2025}
                    target="_blank"
                    rel="noopener noreferrer"
                    color={mutedAccent}
                    fontWeight="medium"
                  >
                    Evaluation cycle evidence dated 21 May 2025
                  </Link>
                  <Link
                    href={WBAICOECycleMar2026}
                    target="_blank"
                    rel="noopener noreferrer"
                    color={mutedAccent}
                    fontWeight="medium"
                  >
                    Evaluation cycle evidence dated 10 Mar 2026
                  </Link>
                  <Link
                    href={WBAICOECycleJul2026}
                    target="_blank"
                    rel="noopener noreferrer"
                    color={mutedAccent}
                    fontWeight="medium"
                  >
                    Evaluation cycle evidence dated 12 Jul 2026
                  </Link>
                </Stack>
              </Stack>
            </Box>
            <Box
              p={{ base: 4, md: 5 }}
              borderRadius="2xl"
              bg={subtleCard}
              border="1px solid"
              borderColor={subtleBorder}
            >
              <Stack spacing={3}>
                <Text color={accent} fontSize={{ base: 'lg', md: 'xl' }} fontWeight="semibold">
                  Scope of Contribution
                </Text>
                <Divider borderColor={dividerColor} />
                <Text color="text" lineHeight={1.9}>
                  The role involved assessing candidate readiness, technical judgment, and
                  professional standards within a formal public-sector evaluation context.
                </Text>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={CheckIcon} color={accent} />
                    <Text as="span" color="subtleText">
                      Work focused on structured evaluation, assessment consistency, and interview
                      rigor.
                    </Text>
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckIcon} color={accent} />
                    <Text as="span" color="subtleText">
                      Participation is documented across multiple cycles, with evidence dated May 21,
                      2025, October 29, 2025, March 10, 2026, and July 12, 2026.
                    </Text>
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckIcon} color={accent} />
                    <Text as="span" color="subtleText">
                      The advisory contribution covered candidate review, calibration, and process
                      quality in AI-related hiring.
                    </Text>
                  </ListItem>
                </List>
                <Divider borderColor={dividerColor} />
                <Text color="subtleText" lineHeight={1.8}>
                  The evidence is documented separately to keep the section concise and focused on
                  the advisory scope.
                </Text>
              </Stack>
            </Box>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default PublicServiceAdvisory;
