import { extendTheme, theme as base } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false
  },
  fonts: {
    heading: `Poppins, ${base.fonts?.heading}`,
    body: `Inter, ${base.fonts?.body}`
  },
  colors: {
    brand: {
      50: '#eef6ff',
      100: '#cbe0ff',
      200: '#a7caff',
      300: '#83b3ff',
      400: '#5f9dff',
      500: '#3b86f5',
      600: '#2b6bc4',
      700: '#1c5092',
      800: '#0c3661',
      900: '#031b31'
    }
  },
  semanticTokens: {
    colors: {
      text: { default: 'gray.800', _dark: 'gray.100' },
      subtleText: { default: 'gray.600', _dark: 'gray.400' },
      caption: { default: 'gray.500', _dark: 'gray.500' },
      surface: { default: 'rgba(255,255,255,0.92)', _dark: 'rgba(15,23,42,0.88)' },
      mutedSurface: { default: 'rgba(249, 252, 255, 0.75)', _dark: 'rgba(15, 23, 42, 0.7)' },
      outline: { default: 'rgba(17, 70, 113, 0.08)', _dark: 'rgba(96, 165, 250, 0.18)' },
      headingAccent: { default: 'brand.600', _dark: 'brand.300' }
    }
  },
  shadows: {
    elevated: '0 24px 50px -25px rgba(15, 39, 87, 0.25)',
    floating: '0 18px 35px -20px rgba(15, 39, 87, 0.35)'
  },
  layerStyles: {
    card: {
      borderRadius: '3xl',
      borderWidth: '1px',
      borderColor: 'outline',
      backdropFilter: 'blur(16px)',
      bg: 'surface',
      boxShadow: 'elevated'
    },
    subtleCard: {
      borderRadius: '2xl',
      borderWidth: '1px',
      borderColor: 'outline',
      bg: 'mutedSurface',
      boxShadow: 'floating'
    }
  },
  textStyles: {
    eyebrow: {
      fontSize: 'sm',
      fontWeight: 'semibold',
      letterSpacing: '0.3em',
      textTransform: 'uppercase'
    },
    muted: {
      color: 'subtleText'
    }
  },
  styles: {
    global: (props) => ({
      body: {
        bg:
          props.colorMode === 'dark'
            ? 'linear-gradient(180deg, #050b16 0%, #0f172a 55%, #111827 100%)'
            : 'linear-gradient(180deg, #f6f9ff 0%, #f1f5ff 55%, #f7f9fb 100%)',
        color: props.colorMode === 'dark' ? 'gray.100' : 'gray.800',
        transitionProperty: 'background-color, background-image, color',
        transitionDuration: '0.3s'
      },
      '#root': {
        minHeight: '100%'
      },
      '::selection': {
        backgroundColor: props.colorMode === 'dark' ? 'brand.500' : 'brand.200',
        color: props.colorMode === 'dark' ? 'gray.900' : 'gray.800'
      }
    })
  },
  components: {
    Container: {
      baseStyle: {
        px: { base: 6, md: 10 }
      }
    },
    Button: {
      baseStyle: {
        borderRadius: 'full',
        fontWeight: 'semibold',
        letterSpacing: '0.01em'
      },
      variants: {
        solid: (props) => ({
          bg: props.colorMode === 'dark' ? 'brand.400' : 'brand.500',
          color: 'white',
          _hover: {
            bg: props.colorMode === 'dark' ? 'brand.300' : 'brand.600',
            transform: 'translateY(-2px)',
            boxShadow: 'md'
          },
          _active: {
            bg: props.colorMode === 'dark' ? 'brand.500' : 'brand.700',
            transform: 'translateY(0)'
          }
        }),
        outline: (props) => ({
          borderRadius: 'full',
          color: props.colorMode === 'dark' ? 'brand.200' : 'brand.600',
          borderColor: props.colorMode === 'dark' ? 'brand.200' : 'brand.200',
          _hover: {
            bg: props.colorMode === 'dark' ? 'rgba(59, 130, 246, 0.12)' : 'rgba(59, 134, 245, 0.08)',
            borderColor: props.colorMode === 'dark' ? 'brand.300' : 'brand.400'
          }
        }),
        ghost: {
          bg: 'transparent'
        }
      }
    },
    Tag: {
      baseStyle: {
        borderRadius: 'full',
        fontWeight: 'medium',
        letterSpacing: '0.02em'
      }
    },
    Heading: {
      baseStyle: {
        color: 'text'
      }
    },
    Text: {
      baseStyle: {
        color: 'subtleText'
      }
    }
  }
});

export default theme;
