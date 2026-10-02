import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Heading,
  HStack,
  Link,
  SimpleGrid,
  Stack,
  Tag,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { FaArrowRight, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import { hero } from '../data/profile.js';
import heroAvatar from '../../images/AG.jpg';

const Hero = () => {
  const accent = useColorModeValue('brand.700', 'accent.200');
  const headingColor = useColorModeValue('brand.900', 'white');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const panelBg = useColorModeValue('white', 'rgba(10,20,38,0.72)');
  const panelBorder = useColorModeValue('rgba(38,61,96,0.12)', 'rgba(208,220,240,0.14)');
  const metricBg = useColorModeValue('gray.50', 'whiteAlpha.50');

  return (
    <Box
      id="hero"
      position="relative"
      py={{ base: 14, md: 20, lg: 24 }}
      borderBottom="1px solid"
      borderColor={panelBorder}
    >
      <Container maxW="7xl" position="relative">
        <Grid
          templateColumns={{ base: '1fr', lg: '1.2fr 0.8fr' }}
          gap={{ base: 12, lg: 16 }}
          alignItems="center"
        >
          <Stack spacing={{ base: 5, md: 6 }} align="flex-start">
            <Tag
              size="md"
              bg={useColorModeValue('blue.50', 'whiteAlpha.100')}
              color={accent}
              borderRadius="md"
              px={3}
              py={1.5}
              fontWeight="700"
              letterSpacing="0.08em"
              textTransform="uppercase"
            >
              Data &amp; AI executive
            </Tag>
            <Stack spacing={3} align="flex-start">
              <Heading
                as="h1"
                fontSize={{ base: '3.25rem', sm: '4rem', md: '5rem', xl: '5.5rem' }}
                lineHeight={{ base: 1, md: 0.98 }}
                color={headingColor}
                maxW="5xl"
                letterSpacing="-0.045em"
                fontWeight="800"
              >
                {hero.name}
              </Heading>
              {hero.title ? (
                <Heading
                  as="h2"
                  fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
                  fontWeight="600"
                  lineHeight={1.3}
                  letterSpacing="-0.02em"
                  color={accent}
                  maxW="3xl"
                >
                  {hero.title}
                </Heading>
              ) : null}
            </Stack>
            {hero.valueStatement ? (
              <Text fontSize={{ base: 'md', md: 'lg' }} color={textColor} maxW="42rem" lineHeight={1.8}>
                {hero.valueStatement}
              </Text>
            ) : null}

            <HStack spacing={3} flexWrap="wrap" pt={1}>
              <Button
                as={Link}
                href={`mailto:${hero.contact.email}`}
                leftIcon={<FaEnvelope />}
                rightIcon={<FaArrowRight />}
                textTransform="none"
              >
                Contact
              </Button>
              <Button
                as={Link}
                href={hero.contact.linkedin}
                leftIcon={<FaLinkedin />}
                variant="outline"
                isExternal
                textTransform="none"
              >
                LinkedIn profile
              </Button>
              <Link
                as={RouterLink}
                to="/experience"
                fontWeight="semibold"
                color={accent}
                px={2}
                py={2}
                _hover={{ textDecoration: 'underline' }}
              >
                View experience
              </Link>
            </HStack>

            <SimpleGrid
              columns={{ base: 1, sm: 3 }}
              spacing={3}
              w="full"
              maxW="44rem"
              pt={{ base: 3, md: 5 }}
            >
              {hero.authorityMetrics?.map((item) => (
                <Stack
                  key={item.label}
                  spacing={1}
                  minH="5.75rem"
                  justify="center"
                  px={4}
                  py={3}
                  bg={metricBg}
                  borderLeft="3px solid"
                  borderColor={accent}
                >
                  <Text fontSize="xl" fontWeight="800" color={headingColor} lineHeight={1.1}>
                    {item.value}
                  </Text>
                  <Text fontSize="sm" color={textColor} lineHeight={1.4}>
                    {item.label}
                  </Text>
                </Stack>
              ))}
            </SimpleGrid>
          </Stack>

          <Stack spacing={4} align="center">
            <Box
              w="full"
              maxW={{ base: '22rem', lg: '28rem' }}
              p={{ base: 5, md: 7 }}
              bg={panelBg}
              border="1px solid"
              borderColor={panelBorder}
              borderRadius="2xl"
              boxShadow="elevated"
            >
              <Stack spacing={5} align="center" textAlign="center">
                <Avatar
                  boxSize={{ base: '13rem', md: '17rem' }}
                  src={heroAvatar}
                  name={hero.name}
                  bg="brand.900"
                  color="white"
                  border="6px solid"
                  borderColor={useColorModeValue('white', 'gray.700')}
                  boxShadow="lg"
                />
                <Stack spacing={2}>
                  <Text textStyle="eyebrow" color={accent}>
                    Leadership across strategy and delivery
                  </Text>
                  <Text color={textColor} lineHeight={1.7}>
                    Connecting enterprise priorities with data, AI, architecture, and measurable outcomes.
                  </Text>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
