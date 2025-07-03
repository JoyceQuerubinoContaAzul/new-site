import { cn } from '@/utils/cn';
import { Slot } from '@radix-ui/react-slot';
import styles from './Button.styles';
import type { ButtonProps } from './Button.types';

export const Button = (props: ButtonProps) => {
  const {
    size,
    color,
    asChild,
    variant,
    disabled,
    children,
    className,
    isLoading,
    startIcon,
    endIcon,
    ...rest
  } = props;

  const Comp = asChild ? Slot : 'button';

  if (asChild) {
    return (
      <Comp
        disabled={disabled || isLoading}
        className={cn(styles({ variant, color, size, className }))}
        {...rest}
      >
        {asChild && children}
      </Comp>
    );
  }

  return (
    <Comp
      disabled={disabled || isLoading}
      className={cn(styles({ variant, color, size, className }))}
      {...rest}
    >
      <>
        {startIcon && <span className="shrink-0">{startIcon}</span>}
        {children}
        {endIcon && <span className="shrink-0">{endIcon}</span>}
      </>
    </Comp>
  );
};
