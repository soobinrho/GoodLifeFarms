import Footer from '@/components/footer';
import HeaderCreate from '@/components/header-create';
import HeaderGoBackToHome from '@/components/header-go-back-to-home';
import HeaderSocialMedia from '@/components/header-social-media';
import ListPage from '@/components/page-list';

export default function Home() {
  return (
    <main className='relative h-max min-h-screen w-full overflow-y-auto bg-background text-primary'>
      <HeaderGoBackToHome />
      <HeaderCreate />
      <HeaderSocialMedia />
      <ListPage />
      <Footer />
    </main>
  );
}
