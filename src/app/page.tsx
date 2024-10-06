import Footer from '@/components/footer';
import HeaderSocialMedia from '@/components/header-social-media';
import LandingPage from '@/components/page-landing';

export default function Home() {
  return (
    <main className='relative h-max min-h-screen w-full overflow-y-hidden bg-background text-primary'>
      <HeaderSocialMedia />
      <LandingPage />
      <Footer />
    </main>
  );
}
