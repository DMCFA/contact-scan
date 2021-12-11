/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { getAllContacts } from './routes/api';
import Home from './components/Home';
import Loading from './components/Loading';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';

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
    <Router>
      <Routes>
        <Route
          exact
          path='/'
          element={
            <div className='container'>
              <div>
                {isLoading ? <Loading /> : <Home contacts={contacts} />}
              </div>
            </div>
          }
        ></Route>
        <Route path='/new' component={ContactForm}></Route>
      </Routes>
    </Router>
  );
}

export default App;
