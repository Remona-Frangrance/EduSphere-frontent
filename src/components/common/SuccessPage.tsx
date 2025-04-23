import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Success = () => {
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/api/users/me').then(() => {
      setTimeout(() => {
        navigate('/resources');
      }, 2000);
    });
  }, [navigate]);
  

  return (
    <div className="text-center mt-10">
      <h1 className="text-2xl font-bold text-green-600">Payment Successful!</h1>
      <p className="mt-2">Redirecting you to your unlocked resources...</p>
    </div>
  );
};

export default Success;
