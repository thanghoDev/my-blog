import React from 'react';
import { Button, Form } from 'react-bootstrap';
import Image from 'next/future/image';
import Link from 'next/link';

import Styles from '@/styles/SearchPosts.module.css';
import { Blog } from '@/types/blog';
import { DETAIL } from 'constant/Category';
type SearchPostsProps = {
  searchValue: string;
  onSearchValueChange: React.Dispatch<React.SetStateAction<string>>;
  data: Blog[];
  loading: boolean;
};

function SearchPosts({
  searchValue,
  onSearchValueChange,
  data,
  loading,
}: SearchPostsProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchValueChange(e.target.value);
  };

  return (
    <Form className='d-flex position-relative'>
      <Form.Control
        type='search'
        placeholder='Search...'
        value={searchValue}
        onChange={handleChange}
        className='me-2 ps-3 rounded-pill'
        aria-label='Search'
      />
      <Button variant='outline-success border border-light rounded-5 bg-dark'>
        <i className='bi bi-search text-light px-2'></i>
      </Button>
      {searchValue && (
        <div
          className={`${Styles.search} position-absolute top-100 border border-top-0 w-100 p-2`}
        >
          {!loading ? (
            data.map((item) => (
              <div key={item.id} className='d-flex mb-3'>
                <Image
                  width='50'
                  height='50'
                  src={item.images}
                  alt={item.alt}
                />
                <div className='ms-4'>
                  <Link href={`/${DETAIL}/${item.id}`}>
                    <a className='fs-6 text-decoration-none text-black text-capitalize postTitle'>
                      {item.title}
                    </a>
                  </Link>
                  <p className='text-capitalize category'>
                    Dave Rogers <code className='text-secondary'>in</code>{' '}
                    <Link href={`/category/${item.category}`}>
                      <a className='text-black text-decoration-none'>
                        {item.category}
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div>loading</div>
          )}
        </div>
      )}
    </Form>
  );
}

export default SearchPosts;
