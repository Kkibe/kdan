import React from 'react';
import Kdan1 from '../../assets/f3.png';
import Kdan2 from '../../assets/f4.png'
import Kdan3 from '../../assets/f1.png';
import Kdan4 from '../../assets/f2.png';

import './Services.scss'
import { NavLink } from 'react-router-dom';

const Data = [
  {
    id:1,
    name: "Learn more",
    title: "Research and Data Analysis",
    img: Kdan1,
    desc: "Carry out research on the state of debt in Kenya, analyzing trends, impacts, and potential solutions. Publish reports and studies to inform policy decisions and raise public awareness.",
    link: "#"
},

{
    id:2,
    name: "Learn more",
    title: "Support for Small Businesses and Entrepreneurs",
    img: Kdan2,
    desc: "Offer support services for small businesses and entrepreneurs, including financial planning advice, access to microloans, and training programs to help them grow and succeed without falling into debt traps.",
    link: "#"
},

{
    id:3,
    name: "Learn More",
    title: "Advocacy and Policy Engagement",
    img: Kdan3,
    desc: "Engage in advocacy efforts to influence policy changes that promote debt relief and financial justice. Work with government agencies, international organizations, and policymakers to push for systemic changes that benefit Kenyan citizens.",
    link: "#"
},

{
    id:4,
    name: "Learn more",
    title: "Educational Workshops and Seminars",
    img: Kdan4,
    desc: "Offer workshops and seminars focused on financial literacy, debt management, and economic empowerment. These sessions aim to equip participants with the knowledge and skills to manage their finances effectively.",
    link: "#"
}
        ]
export default function Services() {
  
  function Service({item}) {
  return (
    <div className='service'>
    <img src={item.img} alt={item.title.split(" ").join("_")} />
    <h3>{item.title}</h3>
    <p>
      {item.desc}
    </p>
    <NavLink to="#" title={item.title}>{item.name}<i className="fas fa-chevron-right"></i></NavLink>
  </div>)};
  
  
  return (
    <div className='services'>
      <div className="post-container">
        {
          Data.map(item => {
            return <Service item={item} key={item.id}/>
          })
        }
      </div>
    </div>
  )
}
