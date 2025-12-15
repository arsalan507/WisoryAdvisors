import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';
import '@/styles/globals.css';
import { SmoothScrollProvider } from '@/components/common/SmoothScrollProvider';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Wisory Global - Think Wise. Act Global.',
  description: 'Strategic consulting firm specializing in building capability centers in India for global enterprises. Unlock India\'s potential to power global enterprise innovation.',
  keywords: ['capability centers', 'GCC', 'India', 'consulting', 'strategic consulting', 'talent acquisition', 'operations excellence'],
  authors: [{ name: 'Wisory Global' }],
  creator: 'Wisory Global',
  publisher: 'Wisory Global',
  metadataBase: new URL('https://wisoryglobal.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://wisoryglobal.com',
    title: 'Wisory Global - Think Wise. Act Global.',
    description: 'Strategic consulting firm specializing in building capability centers in India for global enterprises.',
    siteName: 'Wisory Global',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Wisory Global',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wisory Global - Think Wise. Act Global.',
    description: 'Strategic consulting firm specializing in building capability centers in India for global enterprises.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="antialiased">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
