import { Facebook, Instagram, LinkedIn, Twitter, YouTube } from '@mui/icons-material';
import React from 'react';
import './Footer.scss';
import { Link, NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='footer theme'>
            <div className='social'>
                <h2>Follow us</h2>
                <div className='wrapper'>
                    <Link to='https://www.facebook.com/kibetkorirc' title='facebook/kdan-kenya' target='_blank'><Facebook /></Link>
                    <Link to='https://www.instagram.com/ancientpupy' title='instagram/@kdan_ke' target='_blank'><Instagram /></Link>
                    <Link to='https://twitter.com/ancientpupy' title='twitter/@kdan_kenya' target='_blank'><Twitter /></Link>
                    <Link to='https://www.youtube.com/@codespear' title='youtube/@kdan_kenya' target='_blank'><YouTube /></Link>
                    <Link to='https://www.linkedin.com/in/kibetkorir' title='linkedin/in/kdan-kenya' target='_blank'><LinkedIn /></Link>
                </div >
                
            </div>
            <hr />
            <div className='footer-bottom theme'>
                <p>&copy; KDAN {new Date().getFullYear()}</p>
                <NavLink to={'/about#faq'} title='what people ask'>FAQ</NavLink>
            </div>
        
        </div>
    );
}

export default Footer;
