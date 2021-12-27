/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Routes, Route, ma } from 'react-router-dom';
import { getAllContacts } from './routes/api';
import Home from './components/Home';
import Loading from './components/Loading';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import EditForm from './components/EditForm';

function App() {
  const [dataChanged, setDataChanged] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getAllContacts().then((results) => {
      setDataChanged(false);
      setIsLoading(false);
      setContacts(results);
    });
  }, [dataChanged]);

  return (
    <div className='container'>
      <Routes>
        <Route
          path='/'
          element={isLoading ? <Loading /> : <Home contacts={contacts} />}
        ></Route>
        <Route
          path='/new'
          element={<ContactForm changes={setDataChanged} />}
        ></Route>
        <Route path='/id/:id' element={<Contact />}></Route>
        <Route
          path='/edit/:id'
          element={<EditForm changes={setDataChanged} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
