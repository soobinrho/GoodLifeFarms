import '@/app/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const title = 'Good Life Farm';
const description = 'Making the most self-sustainable farm.';
const url = 'https://github.com/soobinrho/good-life-farm';
const category = 'Vegetables';
const keywords = ['good life farm', 'self-sustainable farm'];
const images = '/group-picture.jpg';
const authors = 'Tobi, Kathy, and Soobin';

export const metadata: Metadata = {
  title: title,
  description: description,
  category: category,
  keywords: keywords,
  openGraph: {
    title: title,
    description: description,
    url: url,
    siteName: title,
    images: images,
    type: 'website',
  },
  twitter: {
    title: title,
    card: 'summary_large_image',
    description: description,
    images: images,
  },
  //   manifest: '/manifest.json',
  //   icons: {
  //     icon: '/icon.svg',
  //     shortcut: '/icon.png',
  //     apple: '/icon.png',
  //   },
  metadataBase: new URL(url),
  authors: [
    {
      name: authors,
      url: url,
    },
  ],
  creator: authors,
  publisher: authors,
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} antialased`}>{children}</body>
    </html>
  );
}
