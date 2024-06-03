import React from 'react'
import './Faq.scss';

export default function Faq() {
  const faqs = [
    {
      id: 1,
      question: "What is the Kenya Debt Abolition Network?",
      answer: 'The Kenya Debt Abolition Network is an organization dedicated to advocating for the elimination of unsustainable debt burdens in Kenya. Our mission is to create a debt-free future that fosters economic growth and social equity through education, advocacy, and community engagement.'
    },
    {
      id: 2,
      question: "Why is debt abolition important for Kenya?",
      answer: 'Debt abolition is crucial because unsustainable debt burdens hinder economic progress and perpetuate poverty. By eliminating these debts, we can create opportunities for financial freedom, stimulate economic growth, and promote social equity in Kenya.'
    },
    {
      id: 3,
      question: "How does the Kenya Debt Abolition Network aim to achieve its goals?",
      answer: 'We aim to achieve our goals through a combination of education, advocacy, and community engagement. We raise awareness about the impacts of debt, lobby for policy changes that promote financial justice, and support grassroots movements to empower communities.'
    },
    {
      id: 4,
      question: "Who can join or support the Kenya Debt Abolition Network?",
      answer: 'Anyone who is passionate about economic justice and financial freedom for Kenya can join or support our network. This includes individuals, community organizations, businesses, and policymakers.'
    },
    {
      id: 5,
      question: "What specific actions can individuals take to support this cause?",
      answer: 'Individuals can support the cause by donating to the network, participating in advocacy campaigns, attending educational events, spreading awareness through social media, and volunteering with our community initiatives.'
    },
    {
      id: 6,
      question: "How can I donate to the Kenya Debt Abolition Network?",
      answer: 'You can donate through our website, where we offer mpesa payment option. Donations can be one-time or recurring, and all contributions are used to further our mission of debt abolition and economic justice in Kenya.'
    },
    {
      id: 7,
      question: "What impact has the Kenya Debt Abolition Network had so far?",
      answer: 'Our network has successfully raised awareness about the debt crisis, influenced policy discussions, and supported community projects that promote financial literacy and economic empowerment. We continuously strive to expand our impact through ongoing initiatives and collaborations.'
    },
    {
      id: 8,
      question: "How does debt abolition benefit the average Kenyan citizen?",
      answer: 'Debt abolition benefits the average Kenyan by removing financial burdens that limit opportunities for education, healthcare, and economic activities. It allows individuals and families to invest in their futures, leading to improved living standards and a stronger national economy.'
    },
    {
      id: 9,
      question: "What challenges does the Kenya Debt Abolition Network face?",
      answer: 'Some challenges we face include political resistance, limited funding, and the complexity of international debt agreements. Despite these challenges, we remain committed to our mission and work tirelessly to overcome obstacles.'
    },
    {
      id: 10,
      question: "How can I stay updated on the activities and progress of the Kenya Debt Abolition Network?",
      answer: 'You can stay updated by subscribing to our newsletter, following us on social media, and regularly visiting our website. We provide updates on our activities, upcoming events, and progress towards our goals.'
    },
  ]
  
  function toggleAccordion(e) {
    const itemToggle = e.target.getAttribute("aria-expanded");
    if (itemToggle === "false") {
      e.target.setAttribute("aria-expanded", "true");
    } else{
      e.target.setAttribute("aria-expanded", "false");
    }
  }
  return (
<div className="faq">
  <h1>FAQ's</h1>
  <h2>People ask for:</h2>
  <div className="accordion">
    {
      faqs.map(faq => {
        return (
          <div className="accordion-item" key={faq.id}   onClick={(e) => toggleAccordion(e)}  aria-expanded="false">
            <button id="accordion-button-1" name='accordion-button'><span className="accordion-title">{faq.question}</span><span className="icon" aria-hidden="true"></span></button>
            <div className="accordion-content">
              <p>{faq.answer}</p>
            </div>
          </div>
        )
      })
    }
  </div>
</div>
  )
}
