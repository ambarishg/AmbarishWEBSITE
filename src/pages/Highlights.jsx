import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Heading,
  Stack,
  Tag,
  Text,
  Wrap,
  useColorModeValue
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading.jsx';
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
  const subtle = useColorModeValue('gray.600', 'gray.400');
  const linkColor = useColorModeValue('brand.600', 'brand.300');

  return (
    <Box py={{ base: 16, md: 20 }}>
      <Container maxW="6xl">
        <Breadcrumb
          mb={6}
          fontSize="sm"
          separator="/"
          color={useColorModeValue('gray.500', 'gray.400')}
        >
          <BreadcrumbItem>
            <BreadcrumbLink as={RouterLink} to="/">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>Highlights</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <SectionHeading
          eyebrow="Highlights"
          title="Recognitions that showcase impact across AI, energy, and community."
          description="Each accolade reflects a significant milestone--capturing measurable outcomes, industry recognition, and the passion for building data-driven futures."
        />

        <Stack spacing={10} mt={12}>
          {achievements.map((group) => (
            <Box
              key={group.category}
              layerStyle="card"
              p={{ base: 6, md: 8 }}
              _hover={{ boxShadow: 'floating' }}
              transition="box-shadow 0.2s ease"
            >
              <Heading
                size="sm"
                color={useColorModeValue('brand.600', 'brand.300')}
                letterSpacing="0.08em"
                textTransform="uppercase"
              >
                {group.category}
              </Heading>
              <Stack spacing={4} mt={6}>
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
                    <Stack key={description} spacing={2}>
                      <Text color={subtle} fontSize="md" lineHeight={1.7}>
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
                        <Text as={RouterLink} to={link.to} fontSize="sm" color={linkColor} fontWeight="semibold">
                          {link.label}
                        </Text>
                      ) : null}
                    </Stack>
                  );
                })}
              </Stack>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Highlights;
