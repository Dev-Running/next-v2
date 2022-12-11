import { cva, VariantProps } from 'class-variance-authority'

const buttonStyles = cva(
  ' flex items-center justify-center   transition-all ',
  {
    variants: {
      intent: {
        home: 'bg-dark text-white hover:bg-transparent',
      },
      size: {
        md: 'px-5 py-[0.688rem] text-sm',
        lg: 'px-[1.875rem] py-[0.775rem]  w-[196px] min-w-[196px] max-h-[45px]',
      },
      rounded: {
        md: 'rounded-[4px]',
      },
      weight: {
        light: 'font-light',
        normal: 'font-normal',
        semibold: 'font-semibold',
        bold: 'font-bold',
        medium: 'font-medium',
      },
    },
    defaultVariants: {
      size: 'md',
      weight: 'semibold',
      rounded: 'md',
      intent: 'home',
    },
  }
)

interface Props
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  text: string
  gradient: string
  outlinePadding: string
}

export const ButtonOutlinedGradient = ({
  text,
  intent,
  gradient,
  size,
  weight,
  rounded,
  outlinePadding,
  ...props
}: Props) => {
  return (
    <div
      style={{ backgroundImage: gradient, padding: outlinePadding }}
      className={buttonStyles({ rounded }) + ' AnimateBGButtonGradient'}
    >
      <button className={buttonStyles({ size, intent, weight })} {...props}>
        {text}
      </button>
    </div>
  )
}
