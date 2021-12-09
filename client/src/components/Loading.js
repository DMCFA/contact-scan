import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {
  return (
    <div className='loading-screen'>
      <Spinner
        className='spinner'
        animation='border'
        variant='primary'
        role='status'
      >
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loading;
