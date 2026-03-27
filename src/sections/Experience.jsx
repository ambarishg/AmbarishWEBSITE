import {
  Box,
  Container,
  Divider,
  Grid,
  Heading,
  HStack,
  Link,
  Stack,
  Text,
  Wrap,
  WrapItem,
  useColorModeValue
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading.jsx';
import { experiences } from '../data/profile.js';

const Experience = () => {
  const sectionBg = useColorModeValue('#f8fafc', '#0b1220');
  const cardBg = useColorModeValue('rgba(255,255,255,0.88)', 'rgba(15,23,42,0.72)');
  const borderColor = useColorModeValue('rgba(15,23,42,0.08)', 'rgba(148,163,184,0.18)');
  const muted = useColorModeValue('gray.500', 'gray.400');
  const labelColor = useColorModeValue('gray.500', 'gray.400');
  const roleBg = useColorModeValue('rgba(15,23,42,0.03)', 'rgba(255,255,255,0.05)');
  const academyLinkColor = useColorModeValue('brand.700', 'brand.200');
  const academyHoverColor = useColorModeValue('brand.600', 'brand.300');
  const summaries = {
    'Tata Consultancy Services':
      'Long-term leadership across utility transformation, data and analytics, energy trading, and enterprise modernization.',
    'Ambarish Ganguly Academy':
      'Independent applied AI platform reflecting technical authority, public recognition, and thought leadership.',
    'Large Canadian Gas Utilities':
      'Architecture and operating model leadership across large-scale gas utility functions and business design.',
    'Australian Energy Utility':
      'Advisory work focused on market intelligence, trading operations, and decision support.'
  };

  return (
    <Box
      id="experience"
      py={{ base: 16, md: 20 }}
      bg={sectionBg}
    >
      <Container maxW="6xl">
        <SectionHeading
          eyebrow="Experience"
          title="A concise view of leadership, mandate, and operating range."
          description="Presented with emphasis on scope and seniority rather than project-level detail."
        />
        <Stack spacing={8} mt={14}>
          {experiences.map((experience) => (
            <Box
              key={experience.company}
              bg={cardBg}
              borderWidth="1px"
              borderColor={borderColor}
              borderRadius={{ base: '2xl', md: '3xl' }}
              px={{ base: 6, md: 8 }}
              py={{ base: 6, md: 8 }}
              backdropFilter="blur(16px)"
            >
              <Grid templateColumns={{ base: '1fr', lg: '1.1fr 1.4fr' }} gap={{ base: 8, lg: 12 }}>
                <Stack spacing={5}>
                  <Stack spacing={3}>
                    <Text
                      color={labelColor}
                      textTransform="uppercase"
                      letterSpacing="0.2em"
                      fontSize="xs"
                    >
                      Organization
                    </Text>
                    <Heading size="md" lineHeight={1.3}>
                      {experience.company === 'Ambarish Ganguly Academy' ? (
                        <Link
                          as={RouterLink}
                          to="/ag-academy"
                          color={academyLinkColor}
                          _hover={{ textDecoration: 'none', color: academyHoverColor }}
                        >
                          {experience.company}
                        </Link>
                      ) : (
                        experience.company
                      )}
                    </Heading>
                    <Text color={muted} maxW="md" lineHeight={1.8}>
                      {summaries[experience.company]}
                    </Text>
                  </Stack>
                  <HStack spacing={6} flexWrap="wrap">
                    <Stack spacing={1}>
                      <Text color={labelColor} textTransform="uppercase" letterSpacing="0.18em" fontSize="xs">
                        Location
                      </Text>
                      <Text color="text">{experience.location}</Text>
                    </Stack>
                    <Stack spacing={1}>
                      <Text color={labelColor} textTransform="uppercase" letterSpacing="0.18em" fontSize="xs">
                        Tenure
                      </Text>
                      <Text color="text">{experience.duration}</Text>
                    </Stack>
                  </HStack>
                </Stack>

                <Stack spacing={5}>
                  <Text
                    color={labelColor}
                    textTransform="uppercase"
                    letterSpacing="0.2em"
                    fontSize="xs"
                  >
                    Roles
                  </Text>
                  <Wrap spacing={3}>
                    {experience.roles.map((role) => (
                      <WrapItem key={`${experience.company}-${role.title}`}>
                        <Box
                          px={4}
                          py={3}
                          borderRadius="2xl"
                          bg={roleBg}
                          borderWidth="1px"
                          borderColor={borderColor}
                        >
                          <Stack spacing={1}>
                            <Text color="text" fontWeight="semibold">
                              {role.title}
                            </Text>
                            <Text color={muted} fontSize="sm">
                              {role.period}
                            </Text>
                          </Stack>
                        </Box>
                      </WrapItem>
                    ))}
                  </Wrap>
                  {experience.roles.length > 1 ? (
                    <>
                      <Divider borderColor={borderColor} />
                      <Text color={muted} lineHeight={1.8}>
                        Multiple leadership mandates across strategy, architecture, delivery, and practice-building.
                      </Text>
                    </>
                  ) : null}
                </Stack>
              </Grid>
              </Box>
            ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Experience;
