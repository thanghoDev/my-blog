import { Blog } from '@/types/blog';
import Image from 'next/future/image';
import { Carousel } from 'react-bootstrap';

type CarouselsProps = {
  carousel: Blog[];
};

function Carousels({ carousel }: CarouselsProps) {
  return (
    <Carousel className='mt-5 d-flex bg-light'>
      {carousel.map((item) => (
        <Carousel.Item key={item.id}>
          <Image
            className='d-block w-50'
            width='200'
            height='300'
            src={item.images}
            alt='First slide'
          />
          <Carousel.Caption className='text-dark text-start w-50 top-0 start-50 ps-4'>
            <h3 className='text-capitalize text-black'>{item.title}</h3>
            <p>{item.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Carousels;
