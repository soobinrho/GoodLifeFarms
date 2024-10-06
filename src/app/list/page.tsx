import Footer from '@/components/footer';
import HeaderCreate from '@/components/header-create';
import HeaderGoBackToHome from '@/components/header-go-back-to-home';
import HeaderSocialMedia from '@/components/header-social-media';
import ListPage from '@/components/page-list';

export default function Home() {
  // "`noStore` can be used to declaratively opt out of static rendering
  // and indicate a particular Server Component should not be cached."
  // Source:
  //   https://nextjs.org/docs/app/api-reference/functions/unstable_noStore
  noStore();

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
