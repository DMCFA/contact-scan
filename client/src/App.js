/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { getAllContacts } from './routes/api';
import Home from './components/Home';
import Loading from './components/Loading';
import './App.css';

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
      <div>{isLoading ? <Loading /> : <Home contacts={contacts} />}</div>
    </div>
  );
}

export default App;
