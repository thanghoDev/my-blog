import Link from 'next/link';

// constants
import { CATEGORY, DETAIL } from '@/constants/pages';

// types
import { Blog } from '@/types/blog';

import Styles from '@/styles/Trending.module.css';

type TrendsProps = {
  trends: Blog;
  index: number;
};

function Trends({ trends, index }: TrendsProps) {
  return (
    <div className='mt-3 d-flex'>
      <h3 className={Styles.number}>0{index + 1}</h3>
      <div className='ms-4'>
        <Link href={`/${DETAIL}/${trends.id}`}>
          <a
            className={`text-black text-capitalize text-decoration-none ${Styles.title}`}
          >
            {trends.title}
          </a>
        </Link>
        <p className='text-capitalize category mt-3'>
          Dave Rogers <code className='text-secondary'>in</code>{' '}
          <Link href={`/${CATEGORY}/${trends.category}`}>
            <a className='text-black text-decoration-none'>{trends.category}</a>
          </Link>
        </p>
      </div>
    </div>
  );
}
export default Trends;
