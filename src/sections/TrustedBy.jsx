import { Box, Container, Flex, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import kaggleLogo from '../../docs/KAGGLE-LOGO.svg';
import microsoftLogo from '../../docs/Microsoft-logo.svg';
import nasaLogo from '../../docs/nasa-logo.svg';
import surveyLogo from '../../docs/SURVEY-LOGO.png';
import westBengalLogo from '../../docs/WBGOVT.png';

const trustedPartners = [
  { src: nasaLogo, alt: 'Trusted by NASA', title: 'NASA' },
  { src: kaggleLogo, alt: 'Trusted by Kaggle', title: 'Kaggle' },
  { src: microsoftLogo, alt: 'Trusted by Microsoft', title: 'Microsoft' },
  { src: surveyLogo, alt: 'Trusted by Survey', title: 'Survey' },
  { src: westBengalLogo, alt: 'Trusted by the Government of West Bengal', title: 'Government of West Bengal' }
];

const TrustedBy = () => {
  const borderColor = useColorModeValue('rgba(38,61,96,0.12)', 'rgba(208,220,240,0.14)');
  const bg = useColorModeValue('rgba(255,250,244,0.7)', 'rgba(10,20,38,0.66)');
  const badgeSize = { maxW: '220px', minW: '160px', maxH: { base: 54, md: 64 } };

  return (
    <Box py={{ base: 8, md: 10 }} id="trusted-badges">
      <Container maxW="6xl">
        <Box
          borderRadius="3xl"
          border="1px solid"
          borderColor={borderColor}
          bg={bg}
          px={{ base: 6, md: 8 }}
          py={{ base: 6, md: 7 }}
          backdropFilter="blur(16px)"
        >
          <Stack spacing={4} align="center" textAlign="center">
            <Text textStyle="eyebrow" letterSpacing="0.36em">
              Trusted By
            </Text>
            <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="600" color="text" maxW="3xl">
              Trusted across enterprise, research, government, and practitioner communities.
            </Text>
            <Flex wrap="wrap" gap={{ base: 6, md: 10 }} justify="center" align="center" w="full" mt={2}>
              {trustedPartners.map((partner) => (
                <Box
                  key={partner.alt}
                  maxW={badgeSize.maxW}
                  minW={badgeSize.minW}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  opacity={0.92}
                >
                  <Image src={partner.src} alt={partner.alt} maxH={badgeSize.maxH} objectFit="contain" />
                </Box>
              ))}
            </Flex>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default TrustedBy;
