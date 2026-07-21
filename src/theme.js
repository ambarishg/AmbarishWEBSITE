import { extendTheme, theme as base } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false
  },
  fonts: {
    heading: `'Source Serif 4', ${base.fonts?.heading}`,
    body: `'IBM Plex Sans', ${base.fonts?.body}`
  },
  colors: {
    brand: {
      50: '#eef3fb',
      100: '#d6e1f3',
      200: '#b4c8e8',
      300: '#8da9d8',
      400: '#6489c5',
      500: '#456ba7',
      600: '#355382',
      700: '#263d60',
      800: '#17283f',
      900: '#0a1426'
    },
    accent: {
      50: '#fff8e8',
      100: '#fce9bc',
      200: '#f6d88f',
      300: '#edc55f',
      400: '#dfb23e',
      500: '#c9961f',
      600: '#9e7514',
      700: '#74550d',
      800: '#4c3808',
      900: '#261c02'
    }
  },
  semanticTokens: {
    colors: {
      text: { default: 'gray.800', _dark: 'gray.100' },
      subtleText: { default: '#52606f', _dark: '#c3cedc' },
      caption: { default: 'gray.500', _dark: 'gray.500' },
      surface: { default: 'rgba(255,252,248,0.88)', _dark: 'rgba(10,20,38,0.86)' },
      mutedSurface: { default: 'rgba(247,241,232,0.78)', _dark: 'rgba(17, 31, 56, 0.72)' },
      outline: { default: 'rgba(32, 55, 94, 0.14)', _dark: 'rgba(173, 192, 225, 0.16)' },
      headingAccent: { default: 'brand.700', _dark: 'accent.200' }
    }
  },
  shadows: {
    elevated: '0 36px 80px -44px rgba(17, 33, 61, 0.26)',
    floating: '0 28px 52px -34px rgba(17, 33, 61, 0.2)'
  },
  layerStyles: {
    card: {
      borderRadius: '28px',
      borderWidth: '1px',
      borderColor: 'outline',
      backdropFilter: 'blur(18px)',
      bg: 'surface',
      boxShadow: 'elevated'
    },
    subtleCard: {
      borderRadius: '24px',
      borderWidth: '1px',
      borderColor: 'outline',
      bg: 'mutedSurface',
      boxShadow: 'floating'
    }
  },
  textStyles: {
    eyebrow: {
      fontSize: '0.72rem',
      fontWeight: '800',
      letterSpacing: '0.22em',
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
            ? 'radial-gradient(circle at top left, rgba(77,111,168,0.22), transparent 28%), radial-gradient(circle at top right, rgba(201,150,31,0.1), transparent 24%), linear-gradient(180deg, #08101e 0%, #0e1a30 55%, #111c2f 100%)'
            : 'linear-gradient(180deg, rgba(255,255,255,0.35), rgba(255,255,255,0.35)), linear-gradient(90deg, rgba(32,55,94,0.04) 1px, transparent 1px), linear-gradient(rgba(32,55,94,0.04) 1px, transparent 1px), linear-gradient(180deg, #f4efe6 0%, #f6f1e8 44%, #edf2f7 100%)',
        color: props.colorMode === 'dark' ? 'gray.100' : 'gray.800',
        backgroundSize:
          props.colorMode === 'dark' ? 'auto' : 'auto, 28px 28px, 28px 28px, auto',
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
        letterSpacing: '0.03em',
        textTransform: 'uppercase'
      },
      variants: {
        solid: (props) => ({
          bg: props.colorMode === 'dark' ? 'accent.400' : 'brand.800',
          color: 'white',
          _hover: {
            bg: props.colorMode === 'dark' ? 'accent.300' : 'brand.700',
            transform: 'translateY(-2px)',
            boxShadow: 'md'
          },
          _active: {
            bg: props.colorMode === 'dark' ? 'accent.500' : 'brand.900',
            transform: 'translateY(0)'
          }
        }),
        outline: (props) => ({
          borderRadius: 'full',
          color: props.colorMode === 'dark' ? 'accent.200' : 'brand.700',
          borderColor: props.colorMode === 'dark' ? 'rgba(246,216,143,0.5)' : 'rgba(38,61,96,0.18)',
          _hover: {
            bg: props.colorMode === 'dark' ? 'rgba(246,216,143,0.08)' : 'rgba(38,61,96,0.05)',
            borderColor: props.colorMode === 'dark' ? 'accent.300' : 'rgba(38,61,96,0.32)'
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
        color: 'text',
        fontWeight: '600',
        letterSpacing: '-0.02em',
        lineHeight: '1.02'
      }
    },
    Text: {
      baseStyle: {
        color: 'subtleText',
        fontSize: '1rem',
        lineHeight: '1.85'
      }
    },
    Link: {
      baseStyle: {
        fontWeight: '600'
      }
    }
  }
});

export default theme;
