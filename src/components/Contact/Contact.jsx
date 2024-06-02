import React, { useEffect, useState } from 'react';
import './Contact.scss';
import Logo from '../../assets/logo.png';
import { Email, Phone } from '@mui/icons-material';
import { Link, NavLink } from 'react-router-dom';
import Bg from '../../assets/bg.mp4';

const Contact = () => {
  const [error, setError] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  
  };
  
  useEffect(() => {
    error && setTimeout(() => {
      setError(null);
    }, 1000);
  }, [error]);
    return (
        <div className="contact">
          <video className='video' autoPlay loop muted>
            <source src={Bg} type='video/mp4' />
          </video>
          <h1>Get Connected</h1>
          <div className="wrapper">
              <div className="contacts">
                <NavLink to="#" title='Taxa Kenya'>
                  <img src={Logo} alt='taxa_logo'/>
                  <h1>KDAN<span>.org</span></h1>
                </NavLink>
                <p>
                  431 University Way, 1st Floor<br/>
                  Nairobi NI 10013<br/>
                  Kenya
                </p>
                <p><Phone />  phone <Link to="tel:+1234567890">+1 234 567 890</Link></p>
                <p><Email />  mail to. <Link to="mailto:admin@taxa.org">admin@kdan.org</Link></p>
              </div>
            
            <form onSubmit={handleSubmit}>
              <div>
                <input type="text"  placeholder="NAME"  required value={name} onChange={(e) => setName(e.target.value)}/>
                <input type="email"  placeholder="EMAIL"  required value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <textarea placeholder="MESSAGE" required value={message} onChange={(e) => setMessage(e.target.value)}/>
              <NavLink className='btn' type="submit" title='send'>SEND</NavLink>
              {
                error && <h4 className='error'>Invalid Phone Number</h4>
              }
          </form> 
          </div>

     </div>
    );
}
export default Contact;