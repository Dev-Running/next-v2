import { cva, VariantProps } from 'class-variance-authority'

const buttonStyles = cva(
  'transition-all flex items-center justify-center z-10 duration-200',
  {
    variants: {
      intent: {
        primary: 'bg-primary hover:brightness-[1.20] text-dark ',
        dark: 'bg-dark text-neutral-300 hover:bg-neutral-900 ',
        light:
          'bg-neutral-200 text-dark hover:bg-neutral-1 hover:bg-neutral-100 ',
        outlineGradientHomeStart: 'bg-dark text-white hover:bg-black/0 ',
      },
      weight: {
        light: 'font-light',
        normal: 'font-normal',
        semibold: 'font-semibold',
        bold: 'font-bold',
        medium: 'font-medium',
      },
      size: {
        base: 'px-5 py-[0.688rem] text-sm',
        lg: 'px-[1.875rem] py-[1.52rem]  w-[196px] min-w-[196px] max-h-[45px]',
      },
      textSize: {
        md: 'text-base',
        sm: 'text-sm',
        lg: 'text-lg',
      },
      rounded: {
        md: 'rounded-[4px]',
      },
    },
    defaultVariants: {
      size: 'base',
      weight: 'semibold',
      rounded: 'md',
      intent: 'primary',
    },
  }
)

export interface Props
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  text: string
}

export const Button = ({
  intent,
  weight,
  size,
  rounded,
  textSize,
  text,
  ...props
}: Props) => {
  return (
    <button
      className={buttonStyles({
        intent,
        weight,
        size,
        rounded,
        textSize,
      })}
      {...props}
    >
      {text}
    </button>
  )
}
