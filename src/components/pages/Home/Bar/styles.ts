import { css } from '@/libs/stitches'

export const BarCSS = css({
  display: 'flex',
  fontWeight: '$medium',
  backgroundColor: '$dark',
  justifyContent: 'center',
  alignItems: 'center',
  height: '$20',
  position: 'relative',
  borderBottomWidth: '1px',
  textTransform: 'uppercase',
  borderLinearGradient:
    '90deg, #FF512F 0%,#0c0c0c 40%,#0c0c0c 60%, #DD2476 100%',
  color: '$neutral-400',
  fontSize: '$base',
})
