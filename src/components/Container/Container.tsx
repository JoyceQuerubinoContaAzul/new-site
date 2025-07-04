import { cn } from '@/utils/cn';
import type { ContainerProps } from './Container.types';

export const Container = (props: ContainerProps) => {
  const { children, className, ...rest } = props;

  return (
    <section className={cn('mx-auto flex w-full lg:w-[1296] px-5', className)} {...rest}>
      {children}
    </section>
  );
};
