import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  styled,
  keyframes,
  css,
  getCssText,
  config,
  createTheme,
  globalCss,
  prefix,
  reset,
  theme,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    width: 'space',
    height: 'space',
    opacity: 'opacity',
    color: 'colors',
  },
  prefix: 'dr-',

  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1280px)',
    '2xl': '(min-width: 1536px)',
  },
  theme: {
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
    },

    colors: {
      dr: '#ff512f',
      white: '#ffffff',
      black: '#000000',
      dark: '#0c0c0c',
      'dark-100': '#111111',
      'dark-200': '#131313',
      'dark-300': '#171717',
      'dark-400': '#212121',
      'dark-logo': '#18181b',
      'neutral-50': '#fafafa',
      'neutral-100': '#f5f5f5',
      'neutral-200': '#e5e5e5',
      'neutral-300': '#d4d4d4',
      'neutral-400': '#a3a3a3',
      'neutral-500': '#737373',
      'neutral-600': '#525252',
      'neutral-700': '#404040',
      'neutral-800': '#262626',
      'neutral-900': '#171717',
    },
    fonts: {
      inter: 'Inter',
      roboto: 'Roboto',
      poppins: 'Poppins',
      pacifico: 'Pacifico',
    },
    borderWidths: {
      1: '1px',
      2: '2px',
      3: '3px',
      4: '4px',
    },

    opacity: {
      0: 0,
      1: 1,
      '0.1': 0.1,
      '0.2': 0.2,
      '0.3': 0.3,
      '0.4': 0.4,
      '0.5': 0.5,
      '0.6': 0.6,
      '0.7': 0.7,
      '0.8': 0.8,
      '0.9': 0.9,
    },
    fontWeights: {
      light: '300',
      normal: '400',
      medium: '500',
      'semi-bold': '600',
      bold: '700',
      black: '900',
    },

    borderStyles: {
      solid: 'solid',
    },
    space: {
      0: '0',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      13: '3.25rem',
      14: '3.5rem',
      15: '3.75rem',
      16: '4rem',
      17: '4.25rem',
      18: '4.5rem',
      19: '4.75rem',
      20: '5rem',
      21: '5.25rem',
      22: '5.5rem',
      23: '5.75rem',
      24: '6rem',
      25: '6.25rem',
      26: '6.5rem',
      27: '6.75rem',
      28: '7rem',
      29: '7.25rem',
      30: '7.5rem',
      31: '7.75rem',
      32: '8rem',
      33: '8.25rem',
      34: '8.5rem',
      35: '8.75rem',
      36: '9rem',
      37: '9.25rem',
      38: '9.5rem',
      39: '9.75rem',
      40: '10rem',
      41: '10.25rem',
      42: '10.5rem',
      43: '10.75rem',
      44: '11rem',
      45: '11.25rem',
      46: '11.5rem',
      47: '11.75rem',
      48: '12rem',
      49: '12.25rem',
      50: '12.5rem',
      51: '12.75rem',
      52: '13rem',
      53: '13.25rem',
      54: '13.5rem',
      55: '13.75rem',
      56: '14rem',
      57: '14.25rem',
      58: '14.5rem',
      59: '14.75rem',
      60: '15rem',
      61: '15.25rem',
      62: '15.5rem',
      63: '15.75rem',
      64: '16rem',
      65: '16.25rem',
      66: '16.5rem',
      67: '16.75rem',
      68: '17rem',
      69: '17.25rem',
      70: '17.5rem',
      71: '17.75rem',
      72: '18rem',
      73: '18.25rem',
      74: '18.5rem',
      75: '18.75rem',
      76: '19rem',
      77: '19.25rem',
      78: '19.5rem',
      79: '19.75rem',
      80: '20rem',
      81: '20.25rem',
      82: '20.5rem',
      83: '20.75rem',
      84: '21rem',
      85: '21.25rem',
      86: '21.5rem',
      87: '21.75rem',
      88: '22rem',
      89: '22.25rem',
      90: '22.5rem',
      91: '22.75rem',
      92: '23rem',
      93: '23.25rem',
      94: '23.5rem',
      95: '23.75rem',
      96: '24rem',
    },
  },

  utils: {
    linearGradient: (value: string) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),
    animation: (value: string) => ({
      animation: `${value}`,
    }),

    m: (value: string) => ({
      margin: value,
    }),

    mt: (value: string) => ({
      marginTop: value,
    }),

    mr: (value: string) => ({
      marginRight: value,
    }),

    mb: (value: string) => ({
      marginBottom: value,
    }),

    ml: (value: string) => ({
      marginLeft: value,
    }),

    mx: (value: string) => ({
      marginLeft: value,
      marginRight: value,
    }),

    my: (value: string) => ({
      marginTop: value,
      marginBottom: value,
    }),

    p: (value: string) => ({
      padding: value,
    }),

    pt: (value: string) => ({
      paddingTop: value,
    }),

    pr: (value: string) => ({
      paddingRight: value,
    }),

    pb: (value: string) => ({
      paddingBottom: value,
    }),

    pl: (value: string) => ({
      paddingLeft: value,
    }),

    px: (value: string) => ({
      paddingLeft: value,
      paddingRight: value,
    }),

    py: (value: string) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    size: (value: string) => ({
      width: value,
      height: value,
    }),

    scale: (value: string) => ({
      transform: `scale(${value})`,
    }),

    rotate: (value: string) => ({
      transform: `rotate(${value})`,
    }),

    translate: (value: string) => ({
      transform: `translate(${value})`,
    }),

    translateX: (value: string) => ({
      transform: `translateX(${value})`,
    }),
    translateY: (value: string) => ({
      transform: `translateY(${value})`,
    }),

    borderLinearGradient: (value: string) => ({
      borderImage: `linear-gradient(${value})1`,
    }),

    dropShadow: (value: string) => ({
      filter: `drop-shadow(0px 2px ${value} rgba(0, 0, 0, 0.25))`,
    }),
  },
})
