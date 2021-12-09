import React from 'react';
import NavBar from './NavBar';

const Home = ({ contacts }) => {
  const allContacts = contacts;

  const contactName = allContacts.map((contact) => (
    <li key={contact.id}>{contact.name}</li>
  ));

  return (
    <div className='home-container'>
      <NavBar />
      <ul>{contactName}</ul>
    </div>
  );
};

export default Home;
