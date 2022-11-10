import Image from 'next/future/image';
import Link from 'next/link';
import { Carousel } from 'react-bootstrap';

// constant
import { CATEGORY, DETAIL } from '@/constants/pages';

// types
import { Blog } from '@/types/blog';
type CarouselsProps = {
  carousel: Blog[];
};

function Carousels({ carousel }: CarouselsProps) {
  return (
    <Carousel variant='dark' className='mt-5 d-flex bg-light'>
      {carousel.map((item) => (
        <Carousel.Item key={item.id}>
          <Image
            className='d-block'
            width={555}
            height={377}
            src={item.images}
            alt={item.alt}
          />
          <Carousel.Caption className='text-dark text-start w-50 top-0 start-50 ps-4'>
            <Link href={`${DETAIL}/${item.id}`}>
              <h3 className='text-capitalize text-black postTitle'>
                <a>{item.title}</a>
              </h3>
            </Link>
            <p className='description'>{item.description}</p>
            <p className='text-capitalize category mt-3'>
              Dave Rogers <code className='text-secondary'>in</code>{' '}
              <Link href={`/${CATEGORY}/${item.category}`}>
                <a className='text-black text-decoration-none'>
                  {item.category}
                </a>
              </Link>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Carousels;
