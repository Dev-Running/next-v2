import { css } from '@/libs/stitches'

export const buttonStyles = css({
  transition: 'all 0.2s ease-in-out',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 10,
  variants: {
    intent: {
      primary: {
        backgroundColor: '$dr',
        color: '$dark',
        '&:hover': {
          filter: 'brightness(1.20)',
        },
      },
      dark: {
        backgroundColor: '$dark',
        color: '$neutral-300',
        '&:hover': {
          backgroundColor: '$dark-300',
        },
      },
      light: {
        backgroundColor: '$neutral-200',
        color: '$dark',
        '&:hover': {
          backgroundColor: '$neutral-100',
        },
      },
      lightHomeStart: {
        backgroundColor: '$neutral-200',
        filter: 'drop-shadow(0px 0px 60px #dd247640)',
        color: '$dark',
        '&:hover': {
          backgroundColor: '$neutral-100',
        },
      },
      outlinedGradientHomeStart: {
        backgroundColor: '$dark',
        borderImage: 'linear-gradient(90deg, #FF512F 0%, #DD2476 100%)2',
        borderWidth: '2px',
        position: 'relative',
        backgroundImage: 'linear-gradient(90deg, $dark 0%, $dark 100%)',
        borderRadius: '4px',
        backgroundClip: 'content-box, border-box',
        borderImageWidth: '2px',
        color: '$white',
        '&:hover': {
          backgroundColor: 'linear-gradient(90deg, #FF512F 0%, #DD2476 100%)',
        },
        '&:before': {
          position: 'absolute',
          content: '',
          width: '100%',
          height: '100%',
          opacity: 0,
          transition: 'opacity 0.2s linear',
          zIndex: -1,
          backgroundImage: 'linear-gradient(90deg, #FF512F 0%, #DD2476 100%)',
        },
        '&:hover:before': {
          opacity: 1,
          transition: 'opacity 0.2s linear',
        },
      },
    },
    size: {
      base: {
        padding: '0.688rem 1.25rem 0.688rem  1.25rem',
      },
      lg: {
        padding: '0.875rem 1.875rem 0.875rem 1.875rem',
        // width: '196px',
        // minWidth: '196px',
        // maxHeight: '45px',
      },
    },
    weight: {
      light: {
        fontWeight: '$light',
      },
      normal: {
        fontWeight: '$normal',
      },
      medium: {
        fontWeight: '$medium',
      },
      'semi-bold': {
        fontWeight: '$semi-bold',
      },
      bold: {
        fontWeight: '$bold',
      },
    },
    'text-size': {
      sm: {
        fontSize: '0.875rem',
        lineHeight: '1.25rem',
      },
      md: {
        fontSize: '1rem',
        lineHeight: '1.5rem',
      },
      lg: {
        fontSize: '1.125rem',
        lineHeight: '1.75rem',
      },
    },
    rounded: {
      md: { borderRadius: '4px' },
    },
  },

  defaultVariants: {
    intent: 'outlinedGradientHomeStart',
    'text-size': 'md',
    weight: 'semi-bold',
    size: 'base',
    rounded: 'md',
  },
})
