import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavBar } from './NavBar';
import { deleteContact } from '../routes/api';

const Home = ({ contacts }) => {
  const navigate = useNavigate();
  const [searchWord, setSearchWord] = useState('');

  const handleID = (e, id) => {
    navigate(`/id/${id}`);
  };

  const handleEdit = (e, id, name) => {
    navigate(`/edit/${id}`, { state: name });
  };

  const handleDelete = async (e, id) => {
    await deleteContact(id);
    window.location.reload(false);
  };

  const filteredNames = contacts.filter((person) =>
    person.name.toLowerCase().includes(searchWord.toLowerCase())
  );

  const contactName = filteredNames.map((contact) => (
    <li className='contacts-line' key={contact.id}>
      <a href='#' onClick={(e) => handleID(e, contact.id)}>
        {contact.name}
      </a>
      <span className='icons'>
        <i
          className='icon far fa-edit'
          onClick={(e) => handleEdit(e, contact.id, contact.name)}
        ></i>
        <i
          className='icon far fa-trash-alt'
          onClick={(e) => handleDelete(e, contact.id)}
        ></i>
      </span>
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
