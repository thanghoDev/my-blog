import Carousels from '@/components/section/Carousels';
import Health from '@/components/section/Health';
import Trending from '@/components/section/Trending';

// types
import { Blog } from '@/types/blog';
import { fetchAPIs } from '../../helpers/fetchAPIs';

type HomePageProps = {
  health: Blog[];
  trending: Blog[];
  business: Blog[];
  politics: Blog[];
  carousel: Blog[];
};

export const getStaticProps = async () => {
  const [carousel, health, trending, business, politics] = await Promise.all([
    fetchAPIs({ page: '1', limit: '2', sortBy: 'id', order: 'desc' }),
    fetchAPIs({
      page: '1',
      limit: '4',
      search: 'health',
      sortBy: 'id',
      order: 'desc',
    }),
    fetchAPIs({ page: '1', limit: '4', sortBy: 'view', order: 'desc' }),
    fetchAPIs({
      page: '1',
      limit: '3',
      search: 'business',
      sortBy: 'id',
      order: 'desc',
    }),
    fetchAPIs({
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
