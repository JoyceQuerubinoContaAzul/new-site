'use client';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { DeviceProvider } from '@/providers/DeviceProvider';
import type { RootProps } from './Root.types';

const Providers = (props: RootProps) => {
  const { children, userAgent } = props;

  return (
        <DeviceProvider userAgent={userAgent}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            {children}
          </ThemeProvider>
        </DeviceProvider>
  );
};

export { Providers };
