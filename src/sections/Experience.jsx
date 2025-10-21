import {
  Badge,
  Box,
  Container,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import SectionHeading from '../components/SectionHeading.jsx';
import { experiences } from '../data/profile.js';

const Experience = () => {
  const accent = useColorModeValue('brand.500', 'brand.300');
  const divider = useColorModeValue('rgba(59,134,245,0.2)', 'rgba(59,134,245,0.35)');
  const subtle = useColorModeValue('gray.600', 'gray.400');

  return (
    <Box
      id="experience"
      py={{ base: 16, md: 20 }}
      bg={useColorModeValue('rgba(236, 243, 255, 0.45)', 'gray.900')}
    >
      <Container maxW="7xl">
        <SectionHeading
          eyebrow="Experience"
          title="Longevity, depth, and delivery across energy utilities and AI."
          description="Strategic and hands-on leadership across global transformation programs, data platforms, and AI innovation."
        />
        <Stack spacing={10} mt={12}>
          {experiences.map((experience) => (
            <Box
              key={experience.company}
              position="relative"
              layerStyle="card"
              p={{ base: 6, md: 10 }}
              _hover={{ boxShadow: 'floating' }}
            >
              <Box
                position="absolute"
                left={{ base: 3, md: 6 }}
                top={{ base: 6, md: 8 }}
                bottom={{ base: 6, md: 8 }}
                w="3px"
                bgGradient={useColorModeValue(
                  'linear(to-b, rgba(59,134,245,0.18), brand.400)',
                  'linear(to-b, rgba(59,134,245,0.28), brand.300)'
                )}
                rounded="full"
              />
              <Stack spacing={2} mb={8} pl={{ base: 5, md: 8 }}>
                <Heading size="md">{experience.company}</Heading>
                <Text color="subtleText">{experience.location}</Text>
                <Badge
                  colorScheme="brand"
                  variant="subtle"
                  w="fit-content"
                  px={3}
                  py={1}
                  borderRadius="full"
                >
                  {experience.duration}
                </Badge>
              </Stack>
              <Stack spacing={6} pl={{ base: 5, md: 8 }}>
                {experience.roles.map((role) => (
                  <Stack
                    key={`${experience.company}-${role.title}`}
                    spacing={3}
                    borderLeft="2px solid"
                    borderColor={divider}
                    pl={5}
                  >
                    <Stack direction={{ base: 'column', md: 'row' }} justify="space-between">
                      <Heading size="sm">{role.title}</Heading>
                      <Text color="caption" fontWeight="medium">
                        {role.period}
                      </Text>
                    </Stack>
                    {role.points ? (
                      <List spacing={2} mt={3}>
                        {role.points.map((point) => (
                          <ListItem key={point} color={subtle}>
                            <ListIcon as={CheckCircleIcon} color={accent} />
                            {point}
                          </ListItem>
                        ))}
                      </List>
                    ) : null}
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

export default Experience;
