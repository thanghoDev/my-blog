import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';

// components
import SearchPosts from '@/components/SearchPosts';
import { useRouter } from 'next/router';

function Header() {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    if (router.isReady) {
      setSearchValue((router.query.search as string) || '');
    }
  }, [router.isReady, router.query.search]);

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
