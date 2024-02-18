import Footer from '@/components/footer';
import HeaderGoBackToHome from '@/components/header-go-back-to-home';
import HeaderSocialMedia from '@/components/header-social-media';
import PrototypePage from '@/components/prototype-page';

export default function Page() {
  return (
    <main className='relative min-h-screen w-full text-primary'>
      <HeaderGoBackToHome />
      <HeaderSocialMedia />
      <PrototypePage />
      <Footer />
    </main>
  );
}
