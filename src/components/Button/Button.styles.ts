import { cva } from 'class-variance-authority';

export default cva(
  'inline-flex items-center justify-center gap-2 rounded text-xxs-medium leading-[normal] ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-grayscale-dark focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40 cursor-pointer active:scale-95 border border-transparent',
  {
    variants: {
      variant: {
        link: '!bg-transparent !border-transparent active:!bg-white active:shadow-sm',
        contained: '',
        outlined: '',
      },
      color: {
        primary:
          'bg-primary text-primary-foreground hover:bg-green active:bg-green-dark',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-blue-ca-semi-light active:bg-blue-ca-semi-dark',
        danger: 'bg-red-semi-dark text-white hover:bg-red active:bg-red-dark',
        default:
          'border border-border hover:bg-grayscale-semi-light text-blue-ca-dark active:bg-grayscale-semi-light',
      },
      size: {
        small: 'py-1 px-2',
        medium: 'py-3 px-4',
      },
    },
    compoundVariants: [
      {
        variant: 'outlined',
        color: 'primary',
        className:
          'border-primary bg-transparent text-primary hover:border-green hover:text-green active:border-green-dark active:text-green-dark hover:bg-transparent active:bg-transparent',
      },
      {
        variant: 'outlined',
        color: 'secondary',
        className:
          'border-secondary bg-transparent text-secondary hover:border-blue-ca-semi-light hover:text-blue-ca-semi-light active:border-blue-ca-semi-dark active:text-blue-ca-semi-dark hover:bg-transparent active:bg-transparent',
      },
      {
        variant: 'outlined',
        color: 'danger',
        className:
          'border-red-semi-dark bg-transparent text-red-semi-dark hover:border-red hover:text-red active:border-red-dark active:text-red-dark hover:bg-transparent active:bg-transparent',
      },
      {
        variant: 'link',
        color: 'primary',
        className: 'text-primary hover:text-green active:text-green-dark',
      },
      {
        variant: 'link',
        color: 'secondary',
        className:
          'text-secondary hover:text-blue-ca-semi-light active:text-blue-ca-semi-dark',
      },
      {
        variant: 'link',
        color: 'danger',
        className: 'text-red-semi-dark hover:text-red active:text-red-dark',
      },
      {
        variant: 'link',
        color: 'default',
        className:
          'text-blue-ca-dark hover:text-blue-ca active:text-blue-ca-dark',
      },
    ],
    defaultVariants: {
      variant: 'contained',
      color: 'primary',
      size: 'medium',
    },
  },
);
