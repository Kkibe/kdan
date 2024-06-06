import { ArrowUpward, Facebook, LinkedIn, X } from '@mui/icons-material';
import React from 'react';
import './Footer.scss';
import { Link, NavLink } from 'react-router-dom';
const Footer = () => {
    const handleScroll = (e) => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
      })}
    
    return (
        <div className='footer theme'>
            <div className='social'>
                <h2>Follow us</h2>
                <div className='wrapper'>
                    <Link to='https://twitter.com/ancientpupy' title='twitter/@kdan_kenya' target='_blank'><X /></Link>
                    <Link to='https://www.linkedin.com/in/kibetkorir' title='linkedin/in/kdan-kenya' target='_blank'><LinkedIn /></Link>
                    <Link to='https://www.facebook.com/kibetkorirc' title='facebook/kdan-kenya' target='_blank'><Facebook /></Link>
                </div >
                
            </div>
            <hr />
            <div className='footer-bottom theme'>
                <p>&copy; KDAN {new Date().getFullYear()}</p>
                <NavLink to={'/about#faq'} title='what people ask'>FAQ</NavLink>
                <button className="btn-top" onClick={() => handleScroll()}><ArrowUpward/></button>
            </div>
        
        </div>
    );
}

export default Footer;
