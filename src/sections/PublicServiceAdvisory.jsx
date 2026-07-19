import {
  Box,
  Button,
  Container,
  Grid,
  Image,
  Link,
  List,
  ListIcon,
  ListItem,
  Stack,
  Tag,
  Text,
  Wrap,
  WrapItem,
  useColorModeValue
} from '@chakra-ui/react';
import { ArrowForwardIcon, CheckIcon } from '@chakra-ui/icons';
import SectionHeading from '../components/SectionHeading.jsx';
import WBAICOEProofImage from '../../docs/WBAICOE/29102025.jpeg';
import WBAICOECycleMay2025 from '../../docs/WBAICOE/21052025.pdf';
import WBAICOECycleMar2026 from '../../docs/WBAICOE/10032026.pdf';
import WBAICOECycleJul2026 from '../../docs/WBAICOE/12072026.pdf';

const PublicServiceAdvisory = () => {
  const cardBg = useColorModeValue('rgba(255,250,244,0.74)', 'rgba(10,20,38,0.68)');
  const cardBorder = useColorModeValue('rgba(38,61,96,0.12)', 'rgba(208,220,240,0.14)');
  const accent = useColorModeValue('brand.700', 'accent.200');
  const subtleCard = useColorModeValue('rgba(255,255,255,0.8)', 'rgba(15,23,42,0.58)');
  const subtleBorder = useColorModeValue('rgba(38,61,96,0.1)', 'rgba(208,220,240,0.12)');

  return (
    <Box id="public-service" py={{ base: 16, md: 20 }}>
      <Container maxW="6xl">
        <SectionHeading
          eyebrow="Public Service & Advisory"
          title="Helping shape AI talent standards for a state-backed Centre of Excellence."
          description="This work reflects a leadership position in AI: contributing judgment, standards, and assessment rigor to how talent is evaluated in a public-sector context."
        />
        <Box
          mt={10}
          p={{ base: 6, md: 8 }}
          borderRadius="3xl"
          bg={cardBg}
          border="1px solid"
          borderColor={cardBorder}
          backdropFilter="blur(16px)"
        >
          <Grid templateColumns={{ base: '1fr', md: '0.92fr 1.08fr' }} gap={{ base: 6, md: 10 }}>
            <Stack spacing={5}>
              <Stack spacing={3}>
                <Text color="caption" fontSize="xs" textTransform="uppercase" letterSpacing="0.18em">
                  Advisory Mandate
                </Text>
                <Text color={accent} fontSize={{ base: '2xl', md: '3xl' }} fontWeight="semibold" lineHeight={1.1}>
                  Pro Bono Subject Matter Expert
                </Text>
                <Text color="subtleText" lineHeight={1.8}>
                  Government of West Bengal Centre of Excellence on Data Science &amp; Machine Learning.
                </Text>
              </Stack>
              <Wrap spacing={3}>
                <WrapItem>
                  <Tag borderRadius="full" colorScheme="blue" variant="subtle">
                    Five evaluation cycles
                  </Tag>
                </WrapItem>
                <WrapItem>
                  <Tag borderRadius="full" colorScheme="green" variant="subtle">
                    Talent quality calibration
                  </Tag>
                </WrapItem>
                <WrapItem>
                  <Tag borderRadius="full" colorScheme="orange" variant="subtle">
                    Principled hiring
                  </Tag>
                </WrapItem>
              </Wrap>
              <Box
                borderRadius="2xl"
                overflow="hidden"
                bg={subtleCard}
                border="1px solid"
                borderColor={subtleBorder}
              >
                <Image
                  src={WBAICOEProofImage}
                  alt="Government of West Bengal Centre of Excellence proof artifact"
                  objectFit="cover"
                  w="full"
                />
              </Box>
              <Wrap spacing={3}>
                <WrapItem>
                  <Button
                    as={Link}
                    href={WBAICOECycleMay2025}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="sm"
                    variant="outline"
                    colorScheme="brand"
                    rightIcon={<ArrowForwardIcon />}
                  >
                    Evidence 21 May 2025
                  </Button>
                </WrapItem>
                <WrapItem>
                  <Button
                    as={Link}
                    href={WBAICOECycleMar2026}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="sm"
                    variant="outline"
                    colorScheme="brand"
                    rightIcon={<ArrowForwardIcon />}
                  >
                    Evidence 10 Mar 2026
                  </Button>
                </WrapItem>
                <WrapItem>
                  <Button
                    as={Link}
                    href={WBAICOECycleJul2026}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="sm"
                    variant="outline"
                    colorScheme="brand"
                    rightIcon={<ArrowForwardIcon />}
                  >
                    Evidence 12 Jul 2026
                  </Button>
                </WrapItem>
              </Wrap>
            </Stack>
            <Stack spacing={5}>
              <Text color="text" fontSize={{ base: 'md', md: 'lg' }} lineHeight={1.9}>
                Contributed to AI talent assessment across five evaluation cycles, interviewing
                candidates and bringing an industry perspective to how data science and AI capability
                is evaluated.
              </Text>
              <Text color="subtleText" lineHeight={1.8}>
                The focus was on standards, candidate calibration, structured assessment, principled
                evaluation, and long-term capability development.
              </Text>
              <Box
                p={{ base: 5, md: 6 }}
                borderRadius="2xl"
                bg={subtleCard}
                border="1px solid"
                borderColor={subtleBorder}
              >
                <Stack spacing={3}>
                  <Text color={accent} fontSize={{ base: 'lg', md: 'xl' }} fontWeight="semibold">
                    Public-Sector Trust
                  </Text>
                  <Text color="text" lineHeight={1.9}>
                    This role reflects recognition beyond project delivery. It placed responsibility on
                    evaluating judgment, readiness, and professional standards in AI talent, where the
                    quality of assessment carries institutional significance.
                  </Text>
                </Stack>
              </Box>
              <Stack spacing={2}>
                <Text color={accent} fontWeight="semibold">
                  Positioning
                </Text>
                <List spacing={2}>
                  <ListItem>
                    <ListIcon as={CheckIcon} color={accent} />
                    <Text as="span" color="subtleText">
                      Places the work at the intersection of technical authority, governance, and talent
                      stewardship.
                    </Text>
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckIcon} color={accent} />
                    <Text as="span" color="subtleText">
                      Shows sustained participation over time, with evidence spanning May 21, 2025 to
                      July 12, 2026.
                    </Text>
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckIcon} color={accent} />
                    <Text as="span" color="subtleText">
                      Reinforces an AI leadership profile grounded in standards, calibration, and
                      long-horizon capability building.
                    </Text>
                  </ListItem>
                </List>
              </Stack>
            </Stack>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default PublicServiceAdvisory;
