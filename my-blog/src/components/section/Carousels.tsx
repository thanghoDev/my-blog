import Image from 'next/future/image';
import { Carousel } from 'react-bootstrap';
function Carousels() {
  return (
    <Carousel className='mt-5'>
      <Carousel.Item>
        <Image
          className='d-block w-100'
          width='200'
          height='300'
          src='https://i.ibb.co/gyydsgx/politics.jpg'
          alt='First slide'
        />
        <Carousel.Caption className='text-dark'>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className='d-block w-100'
          width='200'
          height='300'
          src='https://i.ibb.co/gyydsgx/politics.jpg'
          alt='Second slide'
        />
        <Carousel.Caption className='text-dark'>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;
