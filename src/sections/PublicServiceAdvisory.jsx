import { Box, Container, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import SectionHeading from '../components/SectionHeading.jsx';

const PublicServiceAdvisory = () => {
  const cardBg = useColorModeValue('white', 'blackAlpha.400');
  const cardBorder = useColorModeValue('rgba(59,134,245,0.2)', 'rgba(59,134,245,0.35)');
  const accent = useColorModeValue('brand.600', 'brand.300');

  return (
    <Box id="public-service" py={{ base: 16, md: 20 }}>
      <Container maxW="6xl">
        <SectionHeading
          eyebrow="Public Service & Advisory"
          title="Public Service & Government Advisory"
          description="Partnering with civic programs to seed AI talent, build trust, and scale data-science capacity."
        />
        <Box
          mt={10}
          p={{ base: 6, md: 8 }}
          layerStyle="card"
          bg={cardBg}
          border="1px solid"
          borderColor={cardBorder}
          boxShadow="0 30px 60px rgba(15, 23, 42, 0.15)"
        >
          <Stack spacing={4}>
            <Text color="text" fontSize={{ base: 'lg', md: 'xl' }}>
              Appointed as Pro Bono Subject Matter Expert by the Government of West Bengal's Centre of Excellence on Data
              Science &amp; Machine Learning, advising on AI talent assessment and contributing to the development of the
              state's next-generation data science workforce.
            </Text>
            <Text color={accent} fontWeight="semibold" fontSize="sm">
              Advisory focus: AI talent assessment, principled hiring, candidate quality calibration, and strategic
              mentorship.
            </Text>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default PublicServiceAdvisory;
