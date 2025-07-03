import { userAgent } from 'next/server';

export type RootProps = React.PropsWithChildren<{
  userAgent: ReturnType<typeof userAgent>;
}>;
