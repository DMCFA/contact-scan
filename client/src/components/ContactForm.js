import React from 'react';
import { FormNav } from './NavBar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ContactForm = () => {
  return (
    <div className='contact-form-container'>
      <FormNav />
      <Form className='contact-form'>
        <Form.Group className=' field name-field'>
          <Row>
            <Col>
              <Form.Control type='text' placeholder='First Name' />
            </Col>
            <Col>
              <Form.Control type='text' placeholder='Last Name' />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className='field number-field'>
          <Form.Control type='text' placeholder='Phone Number' />
        </Form.Group>
        <Form.Group className='field email-field'>
          <Form.Control type='email' placeholder='Email' />
        </Form.Group>
        <Button className='submit-btn' variant='primary' type='submit'>
          add contact
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
