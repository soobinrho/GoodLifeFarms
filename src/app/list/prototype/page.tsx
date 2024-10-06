import Footer from '@/components/footer';
import HeaderGoBackToHome from '@/components/header-go-back-to-home';
import HeaderGoogleSheets from '@/components/header-google-sheets';
import HeaderSocialMedia from '@/components/header-social-media';
import PrototypePage from '@/components/page-prototype';

export default function Page() {
  return (
    <main className='relative h-max min-h-screen w-full overflow-y-hidden bg-background text-primary'>
      <HeaderGoBackToHome />
      <HeaderGoogleSheets />
      <HeaderSocialMedia />
      <PrototypePage />
      <Footer />
    </main>
  );
}
