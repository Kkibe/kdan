import { Send } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import './Newsletter.scss';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const handleSubmit = (event) => {
        event.preventDefault();
    
    };

    useEffect(() => {
        error && setTimeout(() => {
          setError(null);
        }, 1000);
      }, [error]);
    
    return (
        <div className='newsletter theme'>
            <h3>
                Join The Network
            </h3>
            <p>
                Subscribe to our news feeds, kindly fill the form below.
            </p>
            <form onSubmit={handleSubmit}>
                <input type='email' placeholder='Email Address' required value={email} onChange={(e) => setEmail(e.target.value)}/>
                <button type='submit' name='subscribe-btn' title='subscribe'>
                    <Send />
                </button>
            </form>
            {
              error && <h4 className='error'>An error occurred!</h4>
            }
        </div>
    );
}

export default Newsletter;
