import Health from '@/components/section/Health';
import PostList from '@/components/section/PostList';
import Trending from '@/components/section/Trending';
import Carousels from '@/components/section/Carousels';
import Subscribe from '@/components/section/Subscribe';

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
  const fetchPosts = async (queryObj: fetchAPIsProps) => {
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_DEVELOPMENT}?${new URLSearchParams(
        queryObj
      ).toString()}`
    );
    return await data.json();
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
      <div className='container'>
        <Carousels carousel={carousel} />
        <div className='d-flex pt-5 pb-5'>
          <Health health={health} />
          <Trending trending={trending} />
        </div>
        <div className='d-flex pt-5 pb-5'>
          <PostList title='politics' data={politics} />
          <PostList title='business' data={business} />
        </div>
      </div>
      <div className='bg-light pt-5 pb-5 mt-5'>
        <Subscribe />
      </div>
    </>
  );
}

export default Home;
