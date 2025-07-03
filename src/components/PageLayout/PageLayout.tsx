import { cn } from '@/utils/cn';
import { Header } from '@/components/Header';
import type { PageLayoutProps } from './PageLayout.types';

export const PageLayout = (props: PageLayoutProps) => {
  const { className, children, noFooter, ...rest } = props;

  return (
    <>
      <Header className="shrink-0" noLoginAction={!!noFooter} />

      <main className={cn(className)} {...rest}>
        {children}
      </main>

      {/* {!noFooter && <Footer className="shrink-0" />} */}
    </>
  );
};
