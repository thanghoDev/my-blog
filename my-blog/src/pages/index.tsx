import Carousels from '@/components/section/Carousels';
import Health from '@/components/section/Health';
import { Blog } from '@/types/blog';
// import styles from '@/styles/Home.module.css';

type TpHomePage = {
  data: Blog[];
};

export const getStaticProps = async () => {
  const response = await fetch(
    'https://63520df09d64d7c7130d539c.mockapi.io/blog'
  );
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
};

function Home({ data }: TpHomePage) {
  return (
    <>
      <Carousels />
      <Health />
    </>
  );
}

export default Home;
