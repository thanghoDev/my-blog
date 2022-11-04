import React from 'react';
import { useRouter } from 'next/router';
import { Button, Form } from 'react-bootstrap';

type SearchPostsProps = {
  searchValue: string;
  onSearchValueChange: React.Dispatch<React.SetStateAction<string>>;
};

function SearchPosts({ searchValue, onSearchValueChange }: SearchPostsProps) {
  const router = useRouter();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchValueChange(e.target.value);
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (searchValue) {
      router.push(`/search/${searchValue}`, undefined, {
        shallow: true,
      });
    }
  };
  return (
    <Form className='d-flex position-relative'>
      <Form.Group controlId='validationCustom03'>
        <Form.Control
          type='text'
          placeholder='Search...'
          aria-label='Search'
          value={searchValue}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Button
        onClick={handleClick}
        type='submit'
        variant='outline-success border border-light rounded-5 bg-dark'
      >
        <i className='bi bi-search text-light px-2'></i>
      </Button>
    </Form>
  );
}

export default SearchPosts;
