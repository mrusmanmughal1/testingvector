import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to home after handling the callback
    navigate('/');
  }, [navigate]);

  return <div>Loading...</div>;
};

export default Callback;