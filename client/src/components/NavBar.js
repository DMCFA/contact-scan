import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import logo from './../img/contact.png';

export const NavBar = ({ setSearchWord }) => {
  const navigate = useNavigate();
  let searchInput = setSearchWord;

  const handleClick = () => {
    navigate('/new');
  };

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
            onClick={handleClick}
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
                onChange={(e) => searchInput(e.target.value)}
              />
            </form>
          </div>
        </Nav.Item>
      </Navbar>
    </div>
  );
};

export const FormNav = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };
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
            className='home-btn'
            type='button'
            variant='outline-success'
            onClick={handleClick}
          >
            Home
          </Button>
        </Nav.Item>
        <Nav.Item>
          <div className='container-fluid'>
            <h2 className='nav-title'>Contact Scan</h2>
          </div>
        </Nav.Item>
      </Navbar>
    </div>
  );
};
