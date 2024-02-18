import Footer from '@/components/footer';
import HeaderSocialMedia from '@/components/header-social-media';
import LandingPage from '@/components/landing-page';

export default function Home() {
  return (
    <main className='relative min-h-screen w-full text-primary'>
      <HeaderSocialMedia />
      <LandingPage />
      <Footer />
    </main>
  );
}
