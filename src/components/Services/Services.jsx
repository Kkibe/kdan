import React from 'react';
import Taxa1 from '../../assets/taxa-s1.png';
import Taxa2 from '../../assets/taxa-s2.png'
import Taxa3 from '../../assets/taxa-s3.png';
import Taxa4 from '../../assets/taxa-s4.png';

import './Services.scss'
import { NavLink } from 'react-router-dom';

const Data = [
  {
    id:1,
    name: "Learn more",
    title: "Research and Data Analysis",
    img: Taxa1,
    desc: "Carry out research on the state of debt in Kenya, analyzing trends, impacts, and potential solutions. Publish reports and studies to inform policy decisions and raise public awareness.",
    link: "#"
},

{
    id:2,
    name: "Learn more",
    title: "Support for Small Businesses and Entrepreneurs",
    img: Taxa2,
    desc: "Offer support services for small businesses and entrepreneurs, including financial planning advice, access to microloans, and training programs to help them grow and succeed without falling into debt traps.",
    link: "#"
},

{
    id:3,
    name: "Learn More",
    title: "Advocacy and Policy Engagement",
    img: Taxa3,
    desc: "Engage in advocacy efforts to influence policy changes that promote debt relief and financial justice. Work with government agencies, international organizations, and policymakers to push for systemic changes that benefit Kenyan citizens.",
    link: "#"
},

{
    id:4,
    name: "Learn more",
    title: "Educational Workshops and Seminars",
    img: Taxa4,
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
