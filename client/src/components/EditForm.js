/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from 'yup';
import { findContact, updateContact } from './../routes/api';
import Loading from './Loading';
import { FormNav } from './NavBar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';

const schema = yup.object().shape({
  name: yup.string().min(2, 'Name is too short').max(20, 'Name is too long'),
  phone: yup
    .string()
    .matches(/^\d+$/, 'Only numbers are allowed')
    .min(11, 'Phone number must have 11 digits')
    .max(11, 'Phone number must have 11 digits'),
  email: yup.string().email('Invalid email'),
});

const EditForm = ({ changes }) => {
  const navigate = useNavigate();
  const id = useParams();
  const [contact, setContact] = useState({});
  const [contactLoaded, setContactLoaded] = useState(false);

  useEffect(() => {
    findContact(id.id).then((result) => {
      setContact(result);
      setContactLoaded(true);
    });
  }, []);

  return !contactLoaded ? (
    <div>
      <Loading />
    </div>
  ) : (
    <Formik
      validationSchema={schema}
      initialValues={{
        name: contact.name,
        phone: contact.phone,
        email: contact.email,
      }}
      onSubmit={(values, actions) => {
        try {
          updateContact(contact.id, values);
          actions.setSubmitting(false);
          changes(true);
          navigate('/', { state: changes });
        } catch (error) {
          console.log(error);
        }
      }}
    >
      {(props) => (
        <div className='contact-form-container'>
          <FormNav />
          <Form className='contact-form' onSubmit={props.handleSubmit}>
            <Form.Group className=' field name-field'>
              <Form.Control
                type='text'
                name='name'
                placeholder={props.initialValues.name}
                onBlur={props.handleBlur}
                onChange={props.handleChange}
                isValid={props.touched.name && !props.errors.name}
                isInvalid={!!props.errors.name}
              />
              <Form.Control.Feedback type='invalid'>
                {props.errors.name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className='field number-field'>
              <Form.Control
                type='text'
                name='phone'
                placeholder={props.initialValues.phone}
                onBlur={props.handleBlur}
                onChange={props.handleChange}
                isValid={props.touched.phone && !props.errors.phone}
                isInvalid={!!props.errors.phone}
              />
              <Form.Control.Feedback type='invalid'>
                {props.errors.phone}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className='field email-field'>
              <Form.Control
                type='email'
                name='email'
                placeholder={props.initialValues.email}
                onBlur={props.handleBlur}
                onChange={props.handleChange}
                isValid={props.touched.email && !props.errors.email}
                isInvalid={!!props.errors.email}
              />
              <Form.Control.Feedback type='invalid'>
                {props.errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Button className='submit-btn' variant='primary' type='submit'>
              update contact
            </Button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default EditForm;
