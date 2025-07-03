import { headers } from 'next/headers';
import { userAgent } from 'next/server';
import { raleway, pingPong } from './fonts';
import type { Metadata } from 'next';
import '@/styles/global.css';
import { Providers } from '@/providers/Root';

export async function generateMetadata(): Promise<Metadata> {
  const title =
    'Gestão Financeira para pequenas empresas que pensam grande | Conta Azul';

  const description =
    'Simplifique a gestão financeira da sua empresa com nosso ERP na nuvem. Automatize processos e melhore a eficiência.';

  return {
    title,
    description,
    robots: {
      index: false,
      follow: false,
    },
    openGraph: {
      title,
      description,
      type: 'website',
      siteName: 'Conta Azul',
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const UA = userAgent({ headers: headersList });

  return (
    <html
      lang="pt-BR"
      className={`${raleway.variable} ${pingPong.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://cdn.segment.com" />
      </head>
      <body className="flex flex-col">
        <Providers userAgent={UA}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
