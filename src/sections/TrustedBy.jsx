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
  const borderColor = useColorModeValue('rgba(148, 163, 184, 0.35)', 'rgba(148, 163, 184, 0.25)');
  const bg = useColorModeValue('white', 'rgba(15, 23, 42, 0.6)');
  const badgeSize = { maxW: '220px', minW: '160px', maxH: { base: 54, md: 64 } };

  return (
    <Box py={{ base: 10, md: 14 }} id="trusted-badges">
      <Container maxW="6xl">
        <Stack
          spacing={4}
          layerStyle="card"
          borderRadius="3xl"
          border="1px solid"
          borderColor={borderColor}
          bg={bg}
          p={{ base: 6, md: 8 }}
          align="center"
          textAlign="center"
        >
          <Text textStyle="eyebrow" letterSpacing="0.4em">
            Trusted by
          </Text>
          <Text fontSize="xl" fontWeight="semibold" color="text">
            Industry, research, and government partners who expect clarity and execution.
          </Text>
          <Flex
            wrap="wrap"
            gap={{ base: 6, md: 10 }}
            justify="center"
            align="center"
            w="full"
            mt={4}
          >
            {trustedPartners.map((partner) => (
              <Box
                key={partner.alt}
                maxW={badgeSize.maxW}
                minW={badgeSize.minW}
                display="flex"
                alignItems="center"
                justifyContent="center"
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
      </Container>
    </Box>
  );
};

export default TrustedBy;
