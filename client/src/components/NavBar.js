import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import logo from './../img/contact.png';

const NavBar = () => {
  return (
    <div className='nav-container'>
      <Navbar bg='light' expand='lg' container='sm'>
        <Nav.Item>
          <Nav.Item>
            <img src={logo} className='nav-img' alt='company logo' />
          </Nav.Item>
        </Nav.Item>
        <Nav.Item>
          <Button
            className='add-btn'
            type='button'
            size='sm'
            variant='outline-success'
          >
            Add Contact
          </Button>
        </Nav.Item>
        <Nav.Item>
          <div className='container-fluid'>
            <form className='d-flex'>
              <input
                className='form-control me-2'
                type='search'
                placeholder='Search'
                aria-label='Search'
              />
              <Button
                className='search-btn'
                variant='outline-success'
                type='submit'
              >
                🚀
              </Button>
            </form>
          </div>
        </Nav.Item>
      </Navbar>
    </div>
  );
};

export default NavBar;
