import { styled } from '@/libs/stitches'

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

export const VideoBoxStyled = styled('div', {
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1,
  overflow: 'hidden',
  borderRadius: '6px',
  dropShadow: '2px',
  p: '2px',
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
    animation: 'rotate 3s linear infinite',
    linearGradient: 'to right, #FF512F,  #DD2476',
  },
})

export const VideoBoxSectionStyled = styled('section', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  py: '5rem',
  backgroundColor: '$dark-100',
})
