import {
  Box,
  Container,
  Grid,
  Heading,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import SectionHeading from '../components/SectionHeading.jsx';
import { certifications, education } from '../data/profile.js';

const Credentials = () => {
  const subtle = useColorModeValue('gray.600', 'gray.400');
  const borderColor = useColorModeValue('rgba(15,23,42,0.08)', 'rgba(148,163,184,0.18)');
  const panelBg = useColorModeValue('rgba(255,255,255,0.84)', 'rgba(15,23,42,0.72)');

  return (
    <Box
      id="credentials"
      py={{ base: 16, md: 20 }}
      bg={useColorModeValue('rgba(236, 243, 255, 0.4)', 'gray.900')}
    >
      <Container maxW="6xl">
        <SectionHeading
          eyebrow="Credentials"
          title="Technical depth sustained through continuous learning."
          description="Presented with emphasis on foundation and currency rather than exhaustive detail."
        />
        <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={8} mt={10}>
          <Box
            borderRadius="3xl"
            border="1px solid"
            borderColor={borderColor}
            bg={panelBg}
            p={{ base: 6, md: 8 }}
            backdropFilter="blur(16px)"
          >
            <Stack spacing={5}>
              <Text textTransform="uppercase" letterSpacing="0.18em" fontSize="xs" color="caption">
                Certifications
              </Text>
              {certifications.slice(0, 6).map((item) => (
                <Box key={item} pb={4} borderBottom="1px solid" borderColor={borderColor}>
                  <Text color="text" fontWeight="semibold" lineHeight={1.7}>
                    {item}
                  </Text>
                </Box>
              ))}
              <Text fontSize="sm" color={subtle}>
                Language: English (Full Professional Proficiency)
              </Text>
            </Stack>
          </Box>
          <Box
            borderRadius="3xl"
            border="1px solid"
            borderColor={borderColor}
            bg={panelBg}
            p={{ base: 6, md: 8 }}
            backdropFilter="blur(16px)"
          >
            <Stack spacing={5}>
              <Text textTransform="uppercase" letterSpacing="0.18em" fontSize="xs" color="caption">
                Education
              </Text>
              {education.map((item) => (
                <Box key={`${item.school}-${item.degree}`} pb={4} borderBottom="1px solid" borderColor={borderColor}>
                  <Text fontWeight="semibold" color="text">
                    {item.school}
                  </Text>
                  <Text color={subtle} lineHeight={1.7}>
                    {item.degree}
                  </Text>
                  <Text color={subtle} fontSize="sm">
                    {item.period}
                  </Text>
                </Box>
              ))}
            </Stack>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default Credentials;
