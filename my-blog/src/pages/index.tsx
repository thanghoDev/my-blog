import Carousels from '@/components/section/Carousels';
import Health from '@/components/section/Health';
import Trending from '@/components/section/Trending';

// types
import { Blog } from '@/types/blog';

type HomePageProps = {
  health: Blog[];
  trending: Blog[];
  business: Blog[];
  politics: Blog[];
  carousel: Blog[];
};

export const getStaticProps = async () => {
  const responseCarousels = await fetch(
    `${process.env.NEXT_PUBLIC_DEVELOPMENT}?page=1&limit=2&sortBy=id&order=desc`
  );
  const responseHealth = await fetch(
    `${process.env.NEXT_PUBLIC_DEVELOPMENT}?page=1&limit=4&search=health&sortBy=id&order=desc`
  );
  const responseTrending = await fetch(
    `${process.env.NEXT_PUBLIC_DEVELOPMENT}?page=1&limit=4&sortBy=view&order=desc`
  );

  const responseBusiness = await fetch(
    `${process.env.NEXT_PUBLIC_DEVELOPMENT}?page=1&limit=3&search=business&sortBy=id&order=desc`
  );
  const responsePolitics = await fetch(
    `${process.env.NEXT_PUBLIC_DEVELOPMENT}?page=1&limit=3&search=politics&sortBy=id&order=desc`
  );

  const health = await responseHealth.json();
  const trending = await responseTrending.json();
  const business = await responseBusiness.json();
  const politics = await responsePolitics.json();
  const carousel = await responseCarousels.json();
  return {
    props: {
      health,
      trending,
      business,
      politics,
      carousel,
    },
    revalidate: 300,
  };
};

function Home({
  health,
  trending,
  business,
  politics,
  carousel,
}: HomePageProps) {
  return (
    <>
      <Carousels carousel={carousel} />
      <div className='d-flex'>
        <Health health={health} />
        <Trending trending={trending} />
      </div>
    </>
  );
}

export default Home;
