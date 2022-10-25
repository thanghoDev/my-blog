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

type fetchAPIsProps = {
  page: string;
  order: string;
  limit: string;
  sortBy: string;
  search?: string;
};

export const getStaticProps = async () => {
  const fetchPosts = (queryObj: fetchAPIsProps) => {
    return fetch(
      `${process.env.NEXT_PUBLIC_DEVELOPMENT}?${new URLSearchParams(queryObj)}`
    ).then((data) => data.json());
  };
  const [carousel, health, trending, business, politics] = await Promise.all([
    fetchPosts({ page: '1', limit: '2', sortBy: 'id', order: 'desc' }),
    fetchPosts({
      page: '1',
      limit: '4',
      search: 'health',
      sortBy: 'id',
      order: 'desc',
    }),
    fetchPosts({ page: '1', limit: '4', sortBy: 'view', order: 'desc' }),
    fetchPosts({
      page: '1',
      limit: '3',
      search: 'business',
      sortBy: 'id',
      order: 'desc',
    }),
    fetchPosts({
      page: '1',
      limit: '3',
      search: 'politics',
      sortBy: 'id',
      order: 'desc',
    }),
  ]);

  return {
    props: {
      carousel,
      health,
      trending,
      business,
      politics,
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
