import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from 'yup';
import { createContact } from '../routes/api';
import { FormNav } from './NavBar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';

const schema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Name is too short')
    .max(20, 'Name is too long')
    .required('A name is required'),
  phone: yup
    .string()
    .min(11, 'Phone number must have 11 digits')
    .max(11, 'Phone number must have 11 digits')
    .required('Phone Number is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
});

const ContactForm = () => {
  const navigate = useNavigate();

  return (
    <Formik
      validationSchema={schema}
      initialValues={{
        name: '',
        phone: '',
        email: '',
      }}
      onSubmit={(values, actions) => {
        try {
          createContact(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
          actions.resetForm({
            values: {
              name: '',
              phone: '',
              email: '',
            },
          });
          navigate('/');
        } catch (error) {
          console.log(error);
        }
      }}
    >
      {(props) => (
        <div className='contact-form-container'>
          <FormNav />
          <Form
            noValidate
            className='contact-form'
            onSubmit={props.handleSubmit}
          >
            <Form.Group className=' field name-field'>
              <Form.Control
                type='text'
                name='name'
                placeholder='Name'
                onBlur={props.handleBlur}
                onChange={props.handleChange}
                value={props.values.name}
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
                placeholder='Phone Number'
                onBlur={props.handleBlur}
                onChange={props.handleChange}
                value={props.values.phone}
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
                placeholder='Email'
                onBlur={props.handleBlur}
                onChange={props.handleChange}
                value={props.values.email}
                isValid={props.touched.email && !props.errors.email}
                isInvalid={!!props.errors.email}
              />
              <Form.Control.Feedback type='invalid'>
                {props.errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Button className='submit-btn' variant='primary' type='submit'>
              add contact
            </Button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default ContactForm;
