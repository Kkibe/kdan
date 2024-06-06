import React, { useEffect, useState } from 'react'
import Featured from '../components/Featured/Featured';
import Slider from '../components/Slider/Slider';
import JobsFlyer from '../components/JobsFlyer/JobsFlyer';
import NewsItem from '../components/NewsItem/NewsItem';
import Services from '../components/Services/Services';
import { getNews } from '../firebase';

export default function Home() {
  const [news, setNews] = useState([]);
  const [isOnline] = useState(() =>{
    return navigator.onLine
  })
  
  useEffect(() =>{
    getNews(4, "all", setNews);
  }, [isOnline]);
  
  return (
    <div className='Home'>
      <Slider />
      <h1 id='services'>What we offer:</h1>
      <Services />
      <Featured />
      <h1>News Feed</h1>
      <h2>Read Our Trending Articles</h2>
      <div className='post-container'>
        {
          news.length > 0 && news.map((item) => {
            return <NewsItem key={item.id} data={item}/>
          })
        }
      </div>
      <JobsFlyer />
    </div>
  )
}
