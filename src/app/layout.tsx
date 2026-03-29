import type { Metadata } from 'next';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import Header from '@/components/Header';

export const metadata: Metadata = {
  metadataBase: new URL('https://satoristay.com'),
  title: 'Satori Stay | A Calm Retreat',
  description: 'Discover a peaceful Airbnb retreat nestled in the serenity of the Darjeeling mountains. Experience comfort, nature, and the iconic toy train.',
  openGraph: {
    title: 'Satori Stay | A Calm Retreat',
    description: 'Discover a peaceful Airbnb retreat nestled in the serenity of the Darjeeling mountains.',
    url: 'https://airbnb.co.in',
    siteName: 'Satori Stay',
    images: [
      {
        url: '/hero&room.jpeg',
        width: 1200,
        height: 630,
        alt: 'Satori Stay Luxury Room',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Satori Stay | A Calm Retreat',
    description: 'Discover a peaceful Airbnb retreat nestled in the serenity of the Darjeeling mountains.',
    images: ['/hero&room.jpeg'],
  },
  icons: {
    icon: '/logo.avif',
    shortcut: '/logo.avif',
    apple: '/logo.avif',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;700&family=Zen+Maru+Gothic:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-abyss text-champagne selection:bg-gold selection:text-abyss">
        <SmoothScroll>
          <Header />
          {children}
          <WhatsAppCTA />
        </SmoothScroll>
      </body>
    </html>
  );
}
