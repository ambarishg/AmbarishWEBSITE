import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Tag,
  Text,
  Wrap,
  useColorModeValue
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import { achievements } from '../data/profile.js';

const linkForHighlight = (description) => {
  if (description.includes('Random Walk of the Penguins')) {
    return {
      label: 'Read the case study >',
      to: '/highlights/random-walk-of-the-penguins'
    };
  }
  if (description.includes('Bees health detection solution')) {
    return {
      label: 'Watch the Azure showcase >',
      to: '/highlights/bees-health-detection'
    };
  }
  if (description.includes('Future Ready Champions of Code')) {
    return {
      label: 'Explore the hackathon story >',
      to: '/highlights/future-ready-champions'
    };
  }
  if (description.includes('DonorsChoose.org Recommendation Challenge')) {
    return {
      label: 'Explore the DonorsChoose.org story >',
      to: '/highlights/donors-choose-recommendation'
    };
  }
  if (description.includes('Kiva Crowd Funding Data Challenge')) {
    return {
      label: 'Explore the Kiva analytics story >',
      to: '/highlights/kiva-crowdfunding-analysis'
    };
  }
  if (description.includes('Recommendation engine for careers with an Enterprise Architecture')) {
    return {
      label: 'Read the Azure Blogathon case study >',
      to: '/highlights/azure-blogathon-champion'
    };
  }
  if (description.includes('Cassava Leaf Disease Detection')) {
    return {
      label: 'Read the Cassava case study >',
      to: '/highlights/azure-blogathon-cassava'
    };
  }
  if (description.includes('DST Geospatial Hackathon 2023 Winner')) {
    return {
      label: 'Explore the Socio Economic Hub story >',
      to: '/highlights/dst-geospatial-hackathon'
    };
  }
  return null;
};

const Highlights = () => {
  const heroBg = useColorModeValue(
    'linear-gradient(135deg, rgba(59,134,245,0.12) 0%, rgba(14,116,244,0.2) 100%)',
    'linear-gradient(135deg, rgba(59,134,245,0.25) 0%, rgba(14,116,244,0.35) 100%)'
  );
  const breadcrumbColor = useColorModeValue('gray.500', 'gray.400');
  const cardBg = useColorModeValue('whiteAlpha.900', 'rgba(15,23,42,0.88)');
  const border = useColorModeValue('rgba(148,163,184,0.35)', 'rgba(148,163,184,0.25)');
  const headingColor = useColorModeValue('gray.800', 'gray.100');
  const bodyColor = useColorModeValue('gray.700', 'gray.200');
  const subtle = useColorModeValue('gray.600', 'gray.400');
  const linkColor = useColorModeValue('brand.600', 'brand.300');
  const tagBg = useColorModeValue('rgba(59,130,246,0.08)', 'rgba(59,130,246,0.18)');

  return (
    <Box>
      <Box bg={heroBg} borderBottom="1px solid" borderColor="outline" py={{ base: 14, md: 20 }}>
        <Container maxW="6xl">
          <Stack spacing={6} align="flex-start">
            <Breadcrumb fontSize="sm" separator="/" color={breadcrumbColor}>
              <BreadcrumbItem>
                <BreadcrumbLink as={RouterLink} to="/">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink>Highlights</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Stack spacing={3} maxW="3xl">
              <Tag
                size="sm"
                colorScheme="brand"
                variant="subtle"
                textTransform="uppercase"
                letterSpacing="0.12em"
                px={4}
                py={2}
                borderRadius="full"
              >
                Impact Portfolio
              </Tag>
              <Heading size={{ base: 'xl', md: '2xl' }} color={headingColor} lineHeight={1.1}>
                Recognitions across climate, recommendations, geospatial, and community impact.
              </Heading>
              <Text color={subtle} fontSize={{ base: 'md', md: 'lg' }}>
                Explore how award-winning analytics, responsible AI, and open collaboration have delivered measurable
                outcomes for conservation, education, national missions, and developer ecosystems.
              </Text>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Container maxW="6xl" py={{ base: 16, md: 20 }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 8, md: 10 }}>
          {achievements.map((group) => (
            <Box
              key={group.category}
              bg={cardBg}
              border="1px solid"
              borderColor={border}
              borderRadius="2xl"
              p={{ base: 6, md: 8 }}
              boxShadow="lg"
              transition="all 0.25s ease"
              _hover={{ transform: 'translateY(-4px)', boxShadow: 'xl' }}
            >
              <Stack spacing={5}>
                <Stack spacing={2}>
                  <Tag
                    size="sm"
                    variant="subtle"
                    colorScheme="brand"
                    w="fit-content"
                    px={3}
                    py={1.5}
                    borderRadius="full"
                    bg={tagBg}
                    letterSpacing="0.08em"
                    textTransform="uppercase"
                  >
                    Focus Area
                  </Tag>
                  <Heading size="md" color={headingColor}>
                    {group.category}
                  </Heading>
                  {group.description ? (
                    <Text color={subtle} fontSize="sm" lineHeight={1.6}>
                      {group.description}
                    </Text>
                  ) : null}
                </Stack>
                <Stack spacing={4}>
                  {group.items.map((item) => {
                    const description =
                      typeof item === 'string' || item === null ? item : item.description;
                    if (!description) {
                      return null;
                    }
                    const tags =
                      typeof item === 'object' && item !== null && Array.isArray(item.tags)
                        ? item.tags
                        : [];
                    const link = linkForHighlight(description);

                    return (
                      <Box key={description}>
                        <Stack direction="row" spacing={3} align="flex-start">
                          <Icon as={CheckCircleIcon} color="brand.400" boxSize={5} mt={1} />
                          <Stack spacing={2}>
                            <Text color={bodyColor} fontWeight="semibold" lineHeight={1.6}>
                              {description}
                            </Text>
                            {tags.length ? (
                              <Wrap spacing={1}>
                                {tags.map((tag) => (
                                  <Tag
                                    key={`${description}-${tag}`}
                                    size="sm"
                                    variant="subtle"
                                    colorScheme="brand"
                                  >
                                    {tag}
                                  </Tag>
                                ))}
                              </Wrap>
                            ) : null}
                            {link ? (
                              <Text
                                as={RouterLink}
                                to={link.to}
                                fontSize="sm"
                                color={linkColor}
                                fontWeight="semibold"
                              >
                                {link.label}
                              </Text>
                            ) : null}
                          </Stack>
                        </Stack>
                      </Box>
                    );
                  })}
                </Stack>
              </Stack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Highlights;
