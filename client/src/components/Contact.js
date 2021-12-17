import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { findContact } from '../routes/api';
import { ContactNav } from './NavBar';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Contact = () => {
  const id = useParams();
  const [contact, setContact] = useState([]);

  useEffect(() => {
    findContact(id.id).then((result) => {
      setContact(result);
    });
  }, []);

  return (
    <div className='contact-container'>
      <ContactNav />
      <Card>
        <Card.Header className='contact-name'>{contact.name}</Card.Header>
        <ListGroup variant='flush'>
          <ListGroup.Item className='contact-details number'>
            {contact.phone}
          </ListGroup.Item>
          <ListGroup.Item className='contact-details email'>
            {contact.email}
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};

export default Contact;
