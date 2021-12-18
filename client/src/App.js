/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { getAllContacts } from './routes/api';
import Home from './components/Home';
import Loading from './components/Loading';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import EditForm from './components/EditForm';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getAllContacts().then((results) => {
      setIsLoading(false);
      setContacts(results);
    });
  }, []);

  return (
    <div className='container'>
      <Routes>
        <Route
          path='/'
          element={
            <div>{isLoading ? <Loading /> : <Home contacts={contacts} />}</div>
          }
        ></Route>
        <Route path='/new' element={<ContactForm />}></Route>
        <Route path='/:id' element={<Contact />}></Route>
        <Route path='/edit/:id' element={<EditForm />}></Route>
      </Routes>
    </div>
  );
}

export default App;
