import Health from '@/components/section/Health';
import PostList from '@/components/section/PostList';
import Trending from '@/components/section/Trending';
import Carousels from '@/components/section/Carousels';
import Subscribe from '@/components/section/Subscribe';

// types
import { Blog } from '@/types/blog';

// helpers
import { FetchPosts } from '@/helpers/FetchPosts';

type HomePageProps = {
  health: Blog[];
  trending: Blog[];
  business: Blog[];
  politics: Blog[];
  carousel: Blog[];
};

export const getStaticProps = async () => {
  const [carousel, health, trending, business, politics] = await Promise.all([
    FetchPosts({ page: '1', limit: '2', sortBy: 'id', order: 'asc' }),
    FetchPosts({
      page: '1',
      limit: '4',
      search: 'health',
      sortBy: 'id',
      order: 'asc',
    }),
    FetchPosts({ page: '1', limit: '4', sortBy: 'view', order: 'asc' }),
    FetchPosts({
      page: '1',
      limit: '3',
      search: 'business',
      sortBy: 'id',
      order: 'asc',
    }),
    FetchPosts({
      page: '1',
      limit: '3',
      search: 'politics',
      sortBy: 'id',
      order: 'asc',
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
      <Subscribe />
    </>
  );
}

export default Home;
