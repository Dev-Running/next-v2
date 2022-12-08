import { cva, VariantProps } from 'class-variance-authority'

const buttonStyles = cva('transition-all z-10 ', {
  variants: {
    intent: {
      primary: 'bg-primary hover:brightness-90 text-zinc-900 ',
      secondary:
        'bg-zinc-900 text-zinc-300 hover:text-white hover:bg-zinc-900/90 dark:bg-white dark:text-zinc-900 dark:hover:bg-white/90 ',
      outlineGradientPrimary:
        'dark:bg-black bg-white dark:hover:bg-black/0 hover:bg-black/0 ',
    },
    weight: {
      light: 'font-light',
      normal: 'font-normal',
      semibold: 'font-semibold',
      bold: 'font-bold',
      medium: 'font-medium',
    },
    size: {
      md: 'px-5 py-[0.688rem] text-sm',
      lg: 'px-[1.875rem] py-[0.775rem] pb-[0.875rem] w-[196px] min-w-[196px] max-h-[45px]',
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
    size: 'md',
    weight: 'semibold',
    rounded: 'md',
    intent: 'primary',
  },
})

export interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
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