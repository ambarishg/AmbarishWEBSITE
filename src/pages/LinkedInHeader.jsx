import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  Link,
  Stack,
  Tag,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import useSEO from '../hooks/useSEO.js';
import { seo } from '../data/seo.js';
import { hero } from '../data/profile.js';

const LinkedInHeader = () => {
  useSEO(seo.linkedinHeader);

  const borderColor = useColorModeValue('rgba(38,61,96,0.14)', 'rgba(173,192,225,0.16)');
  const bodyColor = useColorModeValue('#4f5b6c', '#d0dae7');
  const labelColor = useColorModeValue('accent.700', 'accent.200');
  const headlineColor = useColorModeValue('brand.900', 'white');
  const sublineColor = useColorModeValue('rgba(38,49,69,0.78)', 'whiteAlpha.840');
  const captionColor = useColorModeValue('accent.700', 'accent.200');
  const previewBg = useColorModeValue(
    'linear-gradient(180deg, #f3efe7 0%, #f7f1e8 45%, #eef3f8 100%)',
    'linear-gradient(180deg, #08101e 0%, #0e1a30 55%, #111c2f 100%)'
  );
  const headerGradient = useColorModeValue(
    'linear-gradient(145deg, rgba(255,252,247,0.96) 0%, rgba(248,241,231,0.98) 52%, rgba(237,243,250,0.98) 100%)',
    'linear-gradient(135deg, rgba(8,18,34,0.98) 0%, rgba(23,40,63,0.96) 60%, rgba(201,150,31,0.78) 100%)'
  );
  const sidePanelBg = useColorModeValue('rgba(255,250,242,0.84)', 'rgba(9,19,36,0.76)');
  const linkColor = useColorModeValue('brand.700', 'accent.200');

  return (
    <Box position="relative" overflow="hidden">
      <Box
        position="absolute"
        top="-10rem"
        left="-8rem"
        w="24rem"
        h="24rem"
        bg="rgba(201,150,31,0.1)"
        filter="blur(120px)"
        borderRadius="full"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        bottom="-12rem"
        right="-8rem"
        w="26rem"
        h="26rem"
        bg="rgba(69,107,167,0.14)"
        filter="blur(120px)"
        borderRadius="full"
        pointerEvents="none"
      />

      <Container maxW="7xl" py={{ base: 10, md: 16 }}>
        <Stack spacing={{ base: 8, md: 10 }}>
          <Stack spacing={3} maxW="2xl">
            <Tag alignSelf="flex-start" textStyle="eyebrow" color={labelColor} bg="transparent">
              LinkedIn Header
            </Tag>
            <Heading size={{ base: 'xl', md: '3xl' }}>Premium and minimal</Heading>
            <Text color={bodyColor} fontSize={{ base: 'md', md: 'lg' }}>
              Reduced wording, stronger hierarchy, same brand system.
            </Text>
          </Stack>

          <Box
            border="1px solid"
            borderColor={borderColor}
            borderRadius={{ base: '3xl', md: '32px' }}
            bg={previewBg}
            boxShadow="elevated"
            overflow="hidden"
          >
            <Grid templateColumns={{ base: '1fr', xl: '1.45fr 0.75fr' }}>
              <Stack p={{ base: 6, md: 10 }} justify="center">
                <Box
                  borderRadius="32px"
                  border="1px solid"
                  borderColor={useColorModeValue('rgba(201,150,31,0.22)', 'rgba(255,255,255,0.18)')}
                  bg={headerGradient}
                  color={headlineColor}
                  p={{ base: 6, md: 9 }}
                  position="relative"
                  overflow="hidden"
                  minH={{ base: '19rem', md: '22rem' }}
                  boxShadow={useColorModeValue(
                    '0 32px 80px -38px rgba(17, 33, 61, 0.24)',
                    '0 28px 70px -34px rgba(17, 33, 61, 0.42)'
                  )}
                >
                  <Box
                    position="absolute"
                    top="-4rem"
                    right="-3rem"
                    w="13rem"
                    h="13rem"
                    bg={useColorModeValue('rgba(201,150,31,0.16)', 'rgba(255,255,255,0.1)')}
                    borderRadius="full"
                    filter="blur(12px)"
                  />
                  <Box
                    position="absolute"
                    bottom="-5rem"
                    left="-3rem"
                    w="16rem"
                    h="16rem"
                    bg={useColorModeValue('rgba(69,107,167,0.12)', 'rgba(255,255,255,0.08)')}
                    borderRadius="full"
                    filter="blur(18px)"
                  />
                  <Box
                    position="absolute"
                    inset="1px"
                    borderRadius="31px"
                    border="1px solid"
                    borderColor={useColorModeValue('rgba(255,255,255,0.72)', 'transparent')}
                    pointerEvents="none"
                  />
                  <Stack spacing={8} position="relative" justify="space-between" h="full">
                    <Stack spacing={4}>
                      <Heading
                        fontSize={{ base: '2rem', md: '3.4rem' }}
                        color={headlineColor}
                        lineHeight={0.95}
                        letterSpacing="-0.04em"
                      >
                        ambarishganguly.com
                      </Heading>
                      <Text
                        fontSize={{ base: 'sm', md: 'md' }}
                        fontWeight="medium"
                        color={sublineColor}
                        maxW="xl"
                      >
                        {hero.title}
                      </Text>
                    </Stack>

                    <Text fontSize="sm" color={captionColor} letterSpacing="0.08em" textTransform="uppercase">
                      Enterprise AI | Data Platforms | Transformation
                    </Text>
                  </Stack>
                </Box>
              </Stack>

              <Stack
                spacing={6}
                p={{ base: 6, md: 8 }}
                bg={sidePanelBg}
                borderLeft={{ base: 'none', xl: '1px solid' }}
                borderTop={{ base: '1px solid', xl: 'none' }}
                borderColor={borderColor}
                justify="center"
              >
                <Stack spacing={2}>
                  <Text textStyle="eyebrow" color={labelColor}>
                    Header
                  </Text>
                  <Heading size="lg" lineHeight={1.1}>
                    Clean. Premium. Direct.
                  </Heading>
                </Stack>

                <Stack spacing={3}>
                  <Text color={bodyColor}>ambarishganguly.com</Text>
                  <Text color={bodyColor}>{hero.title}</Text>
                </Stack>

                <Stack direction={{ base: 'column', sm: 'row' }} spacing={3}>
                  <Button
                    as={Link}
                    href={hero.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    leftIcon={<FaLinkedin />}
                    rightIcon={<ArrowForwardIcon />}
                  >
                    Open LinkedIn
                  </Button>
                  <Button
                    as={Link}
                    href={`mailto:${hero.contact.email}`}
                    leftIcon={<FaEnvelope />}
                    variant="outline"
                  >
                    Contact
                  </Button>
                </Stack>

                <Button
                  as={RouterLink}
                  to="/speaking-conferences"
                  variant="ghost"
                  justifyContent="flex-start"
                  rightIcon={<ArrowForwardIcon />}
                  px={0}
                  color={linkColor}
                >
                  Back to speaking page
                </Button>
              </Stack>
            </Grid>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default LinkedInHeader;
