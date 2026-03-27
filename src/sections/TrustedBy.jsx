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
  const borderColor = useColorModeValue('rgba(15,23,42,0.08)', 'rgba(148,163,184,0.18)');
  const bg = useColorModeValue('rgba(255,255,255,0.82)', 'rgba(15,23,42,0.68)');
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
            <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="medium" color="text" maxW="3xl">
              Trusted across enterprise, research, government, and practitioner communities.
            </Text>
            <Flex
              wrap="wrap"
              gap={{ base: 6, md: 10 }}
              justify="center"
              align="center"
              w="full"
              mt={2}
            >
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
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    maxH={badgeSize.maxH}
                    objectFit="contain"
                  />
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
