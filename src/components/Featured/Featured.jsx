import React from 'react';
import './Featured.scss';
import { NavLink } from 'react-router-dom';

import { Build, Group, Money, Policy } from '@mui/icons-material';


const Featured = () => {
    return (
    <section className="featured" id='featured'>
            <h1>How we collaborate</h1>
            <h2>
            The network’s integrated approach and value proposition are inspired by its commitment to comprehensive tax justice solutions for adoption by African countries. As collaborators, Kdan members and partners work together in:
            </h2>
        <div className="wrapper">
            <NavLink to={''} className="item" title='community engagement'>
                <Group className='img' />
                <h3 >Community engagement</h3>
            </NavLink>
            <NavLink to={''} className="item" title='Kdan policy influencing'>
                <Policy className='img'/>
                <h3 >Policy influencing</h3>
            </NavLink>
            <NavLink to={''} className="item" title='Kdan capacity building'>
                <Build className='img'/>
                <h3 >Capacity building</h3>
            </NavLink>
            <NavLink to={''} className="item" title='Kdan awareness raising'>
                <Money className='img'  />
                <h3 >Awareness-raising</h3>
            </NavLink>
        </div>
    </section>
    );
}
export default Featured;