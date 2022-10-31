import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';

// components
import SearchPosts from '@/components/SearchPosts';
import { Blog } from '@/types/blog';

import { BLOG } from 'constant/Blog';

function Header() {
  const [data, setData] = useState<Blog[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    if (searchValue) {
      setLoading(true);
      fetch(
        `${process.env.NEXT_PUBLIC_DEVELOPMENT}/${BLOG}?search=${searchValue}`
      )
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    }
  }, [searchValue]);
  console.log(data);

  return (
    <div className='container'>
      <Navbar className='mt-3'>
        <Container fluid>
          <Link href='/' passHref>
            <Navbar.Brand className='text-capitalize fs-2'>
              meranda
            </Navbar.Brand>
          </Link>
          <Navbar.Offcanvas placement='end'>
            <Offcanvas.Body>
              <Nav className='justify-content-end flex-grow-1 pe-3 gap-2'>
                <Nav.Link href='#'>
                  <i className='bi bi-facebook'></i>
                </Nav.Link>
                <Nav.Link href='#'>
                  <i className='bi bi-twitter'></i>
                </Nav.Link>
                <Nav.Link href='#'>
                  <i className='bi bi-instagram'></i>
                </Nav.Link>
              </Nav>
              <SearchPosts
                searchValue={searchValue}
                onSearchValueChange={setSearchValue}
                data={data}
                loading={isLoading}
              />
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <Nav defaultActiveKey='/home' className='gap-4 mt-4 pb-5' as='ul'>
        <Nav.Item as='li'>
          <Link href='/' passHref>
            <Nav.Link className='text-black-50'>Home</Nav.Link>
          </Link>
        </Nav.Item>
        <Nav.Item as='li'>
          <Link href='/category/politics' passHref>
            <Nav.Link className='text-black-50'>Politics</Nav.Link>
          </Link>
        </Nav.Item>
        <Nav.Item as='li'>
          <Link href='/category/business' passHref>
            <Nav.Link className='text-black-50'>Business</Nav.Link>
          </Link>
        </Nav.Item>
        <Nav.Item as='li'>
          <Link href='/category/health' passHref>
            <Nav.Link className='text-black-50'>Health</Nav.Link>
          </Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Header;
