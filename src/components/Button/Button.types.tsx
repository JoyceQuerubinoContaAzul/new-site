import { type VariantProps } from 'class-variance-authority';
import styles from './Button.styles';

export type ButtonProps = React.ComponentProps<'button'> &
  VariantProps<typeof styles> & {
    asChild?: boolean;
    isLoading?: boolean;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
  };
