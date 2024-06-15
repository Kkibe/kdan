import React from 'react'
import Contact from '../components/Contact/Contact';
import Faq from '../components/Faq/Faq';
import Image from '../assets/kdan-flyer.png';
import { Helmet } from 'react-helmet-async';

export default function About() {
  return (
<div className='about'>
          <Helmet>
            <meta charSet="utf-8" />
            <title>ABOUT KDAN KENYA - "Empowering Kenya, Erasing Debt"</title>
            <link rel="canonical" href={window.location.hostname} />
            <base href={window.location.hostname}></base>
            <meta name="description" content={"Kenya Debt Abolition Network is dedicated to advocating for the elimination of unsustainable debt burdens in Kenya. Through education, advocacy, and community engagement, we aim to create a debt-free future that fosters economic growth and social equity."}/>
          </Helmet>
    <div className="quote">
      <img src={Image} alt="kdan_about_flyer_thumbnail" />
      <div className='content'>
        <p>
        Kenya Debt Abolition Network is dedicated to advocating for the elimination of unsustainable debt burdens in Kenya. Through education, advocacy, and community engagement, we aim to create a debt-free future that fosters economic growth and social equity.
        </p>
      </div>
    </div>
    <div className="quote">
      <div className='content'>
        <p>
        Kenya Debt Abolition Network is a passionate organization committed to addressing and resolving the critical issue of unsustainable debt in Kenya. Our mission is to advocate for the abolition of onerous debt obligations that hinder economic progress and perpetuate inequality. We believe that every Kenyan deserves the opportunity to thrive without the constraints of overwhelming debt.
        <br />
        <br />
        Our approach combines education, advocacy, and community engagement. We work tirelessly to raise awareness about the impacts of debt, lobby for policy changes that promote financial justice, and support grassroots movements that empower communities. By collaborating with stakeholders across various sectors, we strive to create a sustainable economic environment that benefits all Kenyans.
        <br/>
        <br />
        Join us in our mission to build a debt-free Kenya, where financial freedom and economic opportunity are accessible to everyone. Together, we can make a difference and pave the way for a brighter, more equitable future.
        </p>
      </div>
    </div>
    <Faq />
    <Contact />
  </div>
  )
}
