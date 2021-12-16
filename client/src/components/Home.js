/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { NavBar } from './NavBar';

const Home = ({ contacts }) => {
  const [searchWord, setSearchWord] = useState('');

  const filteredNames = contacts.filter((person) =>
    person.name.toLowerCase().includes(searchWord.toLowerCase())
  );

  const contactName = filteredNames.map((contact) => (
    <li className='contacts-line' key={contact.id}>
      <a href={'/' + contact.id}>{contact.name}</a>
    </li>
  ));

  return (
    <div className='home-container'>
      <NavBar setSearchWord={setSearchWord} />
      <ul className='contacts-container'>{contactName}</ul>
    </div>
  );
};

export default Home;
