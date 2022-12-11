import { styled } from '@/libs/stitches'

export const VideoBoxSectionStyled = styled('section', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '5rem 0rem 5rem 0rem',
  backgroundColor: '$dark-100',
})

export const VideoBoxStyled = styled('div', {
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1,
  overflow: 'hidden',
  borderRadius: '6px',
  dropShadow: '2px',
  padding: '3px',
  '&:before': {
    content: '',
    width: '60rem',
    height: '10rem',
    position: 'absolute',
  },
  '&:after': {
    position: 'absolute',
    content: '',
    width: '60rem',
    height: '15rem',
    animation: 'rotate 3.5s linear infinite',
    linearGradient:
      'to right, #FF512F 0%,$dark-100 30%, $dark-100 70%, #DD2476 100%',
  },
})

export const VideoStyled = styled('div', {
  display: 'flex',
  aspectRatio: '16 / 9',
  height: '27rem',
  width: '50rem',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '6px',
  outline: 'solid',
  outlineWidth: '1px',
  zIndex: 20,
  outlineColor: '$dark-400',
  backgroundColor: '$dark',
  '&:hover': {
    backgroundColor: '$dark-100',
  },
})
