import type { Metadata } from 'next';
import { ClerkProvider, SignInButton } from '@clerk/nextjs';
import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-roboto',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Plan Reakcji',
  description: 'Twoje wsparcie w każdej sytuacji kryzysowej',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" data-theme="light">
        <body
          className={`${roboto.variable} align-center flex min-h-screen w-full flex-col items-center justify-between text-center antialiased`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}