import '@/app/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const title = 'Good Life Farms';
const description = 'Self-sustainable platform for local producers and local consumers.';
const url = 'https://github.com/soobinrho/GoodLifeFarms';
const category = 'Vegetables';
const keywords = ['good life farms', 'self-sustainable', 'selling', 'local producers', 'local consumers'];
const images =
  'https://repository-images.githubusercontent.com/758805409/3abfde88-4dd5-42eb-aa2c-2394a1072462';
const authors = 'Nsustain';

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
