import { cn } from '@/utils/cn';
import type { ContainerProps } from './Container.types';

export const Container = (props: ContainerProps) => {
  const { children, className, ...rest } = props;

  return (
    <div className={cn('mx-auto max-w-[520px] px-5', className)} {...rest}>
      {children}
    </div>
  );
};
