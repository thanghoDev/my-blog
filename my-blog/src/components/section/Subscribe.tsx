import React from 'react';
import { Button } from 'react-bootstrap';

function Subscribe() {
  return (
    <div className='bg-light pt-5 pb-5 mt-5'>
      <div className='container'>
        <form action='#' className='row align-items-center'>
          <div className='col-md-5 mr-auto'>
            <h2 className='text-capitalize'>newsletter subscribe</h2>
            <p className='description'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perferendis aspernatur ut at quae omnis pariatur obcaecati
              possimus nisi ea iste!
            </p>
          </div>
          <div className='col-md-6 ml-auto d-flex gap-2'>
            <input
              type='email'
              className='form-control rounded-pill'
              placeholder='Enter your email'
            />
            <Button variant='outline-success border border-light rounded-circle bg-dark'>
              <i className='bi bi-send text-light'></i>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Subscribe;
