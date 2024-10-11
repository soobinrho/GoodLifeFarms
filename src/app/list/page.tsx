import Footer from '@/components/footer';
import HeaderCreate from '@/components/header-create';
import HeaderLogo from '@/components/header-logo';
import HeaderSocialMedia from '@/components/header-social-media';
import ListPage from '@/components/page-list';

export default function Home() {
  return (
    <main className='relative h-max min-h-screen w-full overflow-y-auto bg-background text-primary'>
      <HeaderLogo />
      <HeaderCreate />
      <HeaderSocialMedia />
      <ListPage />
      <Footer />
    </main>
  );
}
