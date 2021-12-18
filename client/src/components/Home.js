import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavBar } from './NavBar';
import { deleteContact } from '../routes/api';

const Home = ({ contacts }) => {
  const navigate = useNavigate();
  const [searchWord, setSearchWord] = useState('');

  const handleEdit = (e, id) => {
    e.preventDefault();
    navigate(`/edit/${id}`);
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    deleteContact(id);
    navigate('/');
  };

  const filteredNames = contacts.filter((person) =>
    person.name.toLowerCase().includes(searchWord.toLowerCase())
  );

  const contactName = filteredNames.map((contact) => (
    <li className='contacts-line' key={contact.id}>
      <a href={'/' + contact.id}>
        {contact.name}
        <span className='icons'>
          <i
            className='icon far fa-edit'
            onClick={(e) => handleEdit(e, contact.id)}
          ></i>
          <i
            className='icon far fa-trash-alt'
            onClick={(e) => handleDelete(e, contact.id)}
          ></i>
        </span>
      </a>
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
