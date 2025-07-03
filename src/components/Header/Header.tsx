// import Image from 'next/image';
import { cn } from '@/utils/cn';
import { Container } from '@/components/Container';
import type { HeaderProps } from './Header.types';

export const Header = (props: HeaderProps) => {
  const { className, noLoginAction, ...rest } = props;

  return (
    <header
      className={cn(
        'sticky top-0 z-50 bg-white py-3.5 md:static md:pt-[46px] md:pb-7 dark:bg-[#1c191a]',
        className,
      )}
      {...rest}
    >
      <Container className="flex items-center justify-between gap-3">
        <div className="h-[24px] w-[167px]">
          <img src="/images/ca-logo.svg" alt="Logo" />
        </div>

        {!noLoginAction && (
          <div className="md:hidden">
            <p className="text-right text-xs font-medium">
              Já tem uma conta?
            </p>
          </div>
        )}
      </Container>
    </header>
  );
};
