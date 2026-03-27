import { Box, Container, Grid, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import SectionHeading from '../components/SectionHeading.jsx';

const PublicServiceAdvisory = () => {
  const cardBg = useColorModeValue('rgba(255,250,244,0.74)', 'rgba(10,20,38,0.68)');
  const cardBorder = useColorModeValue('rgba(38,61,96,0.12)', 'rgba(208,220,240,0.14)');
  const accent = useColorModeValue('brand.700', 'accent.200');

  return (
    <Box id="public-service" py={{ base: 16, md: 20 }}>
      <Container maxW="6xl">
        <SectionHeading
          eyebrow="Public Service & Advisory"
          title="Government advisory shaped by standards, judgment, and talent stewardship."
          description="Leadership extending beyond enterprise delivery into public capability-building."
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
          <Grid templateColumns={{ base: '1fr', md: '0.8fr 1.2fr' }} gap={{ base: 6, md: 10 }}>
            <Stack spacing={2}>
              <Text color="caption" fontSize="xs" textTransform="uppercase" letterSpacing="0.18em">
                Advisory Mandate
              </Text>
              <Text color={accent} fontSize={{ base: '2xl', md: '3xl' }} fontWeight="semibold" lineHeight={1.1}>
                Pro Bono Subject Matter Expert
              </Text>
              <Text color="subtleText" lineHeight={1.8}>
                Government of West Bengal Centre of Excellence on Data Science & Machine Learning.
              </Text>
            </Stack>
            <Stack spacing={4}>
              <Text color="text" fontSize={{ base: 'md', md: 'lg' }} lineHeight={1.9}>
                Contributed to AI talent assessment across three evaluation cycles, interviewing candidates and helping shape a stronger pipeline of industry-ready data science capability.
              </Text>
              <Text color="subtleText" lineHeight={1.8}>
                Focused on talent standards, candidate quality calibration, structured assessment, principled hiring, and strategic mentorship.
              </Text>
            </Stack>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default PublicServiceAdvisory;
