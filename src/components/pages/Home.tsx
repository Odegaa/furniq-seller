import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate('/products');
  }, [navigate]);
  return <> </>;
};

export { Home };
