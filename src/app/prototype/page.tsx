import Footer from '@/components/footer';
import HeaderSocialMedia from '@/components/header-social-media';
import PrototypePage from '@/components/prototype-page';

export default function Page() {
  return (
    <>
      <main className='relative min-h-screen w-full text-primary'>
        <HeaderSocialMedia />
        <PrototypePage />
        <Footer />
      </main>
    </>
  );
}
