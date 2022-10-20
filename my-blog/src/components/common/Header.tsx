import React from 'react';

import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  Offcanvas,
} from 'react-bootstrap';

function Header() {
  return (
    <Navbar className='mt-3'>
      <Container fluid>
        <Navbar.Brand href='#' className='text-capitalize fs-2'>
          meranda
        </Navbar.Brand>
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
            <Form className='d-flex'>
              <Form.Control
                type='search'
                placeholder='Search...'
                className='me-2 ps-3 rounded-pill'
                aria-label='Search'
              />
              <Button variant='outline-success border border-light rounded-5 bg-dark'>
                <i className='bi bi-search text-light px-2'></i>
              </Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Header;
