import '@/app/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const title = 'Good Life Farms';
const description = 'Creating self-sustainable platform for local producers.';
const url = 'https://github.com/soobinrho/good-life-farms';
const category = 'Vegetables';
const keywords = ['good life farms', 'self-sustainable farm'];
const images =
  'https://opengraph.githubassets.com/1e6735c3a867f91324705ce1701f44ad153a85555826c48cf9d8ff50c4ff3de1/soobinrho/good-life-farms';
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
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
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
      <body className={`${inter.className} antialased text-sm sm:text-base`}>
        {children}
      </body>
    </html>
  );
}
