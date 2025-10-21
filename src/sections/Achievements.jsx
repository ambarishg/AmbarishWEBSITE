import {
  Box,
  Container,
  Heading,
  Link,
  List,
  ListIcon,
  ListItem,
  Stack,
  Tag,
  Wrap,
  useColorModeValue
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { StarIcon } from '@chakra-ui/icons';
import SectionHeading from '../components/SectionHeading.jsx';
import { achievements } from '../data/profile.js';

const Achievements = () => {
  const accent = useColorModeValue('brand.500', 'brand.300');
  const textColor = useColorModeValue('gray.700', 'gray.200');

  return (
    <Box id="highlights" py={{ base: 16, md: 20 }}>
      <Container maxW="6xl">
        <SectionHeading
          eyebrow="Highlights"
          title="Awards, recognitions, and community impact."
          description="Consistently celebrated for applied AI that advances energy, sustainability, and developer ecosystems."
        />
        <Stack spacing={8} mt={12}>
          {achievements.map((group) => (
            <Box
              key={group.category}
              layerStyle="card"
              p={{ base: 6, md: 8 }}
              _hover={{ boxShadow: 'floating' }}
            >
              <Heading
                size="sm"
                color={useColorModeValue('brand.600', 'brand.300')}
                mb={4}
                letterSpacing="0.08em"
                textTransform="uppercase"
              >
                {group.category}
              </Heading>
              <List spacing={2}>
                {group.items.map((item) => {
                  const description =
                    typeof item === 'string' || item === null ? item : item.description;
                  const tags =
                    typeof item === 'object' && item !== null && Array.isArray(item.tags)
                      ? item.tags
                      : [];

                  if (!description) {
                    return null;
                  }

                  const isRandomWalk = description.includes('Random Walk of the Penguins');
                  const isBeesShowcase = description.includes('Bees health detection solution');
                  const isFutureReady = description.includes('Future Ready Champions of Code');

                  let content = description;
                  if (isRandomWalk) {
                    content = (
                      <Link
                        as={RouterLink}
                        to="/highlights/random-walk-of-the-penguins"
                        color={useColorModeValue('brand.600', 'brand.300')}
                        fontWeight="semibold"
                      >
                        {description}
                      </Link>
                    );
                  } else if (isBeesShowcase) {
                    content = (
                      <Link
                        as={RouterLink}
                        to="/highlights/bees-health-detection"
                        color={useColorModeValue('brand.600', 'brand.300')}
                        fontWeight="semibold"
                      >
                        {description}
                      </Link>
                    );
                  } else if (isFutureReady) {
                    content = (
                      <Link
                        as={RouterLink}
                        to="/highlights/future-ready-champions"
                        color={useColorModeValue('brand.600', 'brand.300')}
                        fontWeight="semibold"
                      >
                        {description}
                      </Link>
                    );
                  }

                  return (
                    <ListItem key={description} color={textColor}>
                      <Box display="flex" alignItems="flex-start" gap={3}>
                        <ListIcon as={StarIcon} color={accent} mt="4px" />
                        <Stack spacing={2}>
                          <Box>{content}</Box>
                          {tags.length ? (
                            <Wrap spacing={1}>
                              {tags.map((tag) => (
                                <Tag key={tag} size="sm" variant="subtle" colorScheme="brand">
                                  {tag}
                                </Tag>
                              ))}
                            </Wrap>
                          ) : null}
                        </Stack>
                      </Box>
                    </ListItem>
                  );
                })}
              </List>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Achievements;
