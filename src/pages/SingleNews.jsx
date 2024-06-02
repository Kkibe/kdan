import React, { useEffect, useState } from 'react';
import Image from '../assets/taxa1.png';
import { addNewsViews, getNewsItem } from '../firebase';

export default function SingleNews() {
  const [news, setNews] = useState(null);
  const readingTime = (articleText) => {
      const wordsArray = articleText.split(' ');
      // Count the number of words in the array
      const wordCount = wordsArray.length;
      // Calculate the estimated reading time
      const wordsPerMinute = 200;
      return Math.ceil(wordCount / wordsPerMinute);
  }

  function truncateTitle(input, value) {
    if (input.length > value) {
       return input.substring(0, value) + '...';
    }
    return input;
 };
  
  useEffect(() => {
    getNewsItem(window.location.pathname.split('/news/')[1], setNews);
    addNewsViews(window.location.pathname.split('/news/')[1]);
  }, []);
  
  return (
    <div className='single-news'>
        <span>
        <img src={news && (news.imageUrl ? news.imageUrl : Image)} alt={news && truncateTitle(news.title, 5)} />
        <div className="content">
          <h4>
            <span className="category">{news && news.category}</span>
            <span className="article-pre__aut date">{news && new Date(news.timestamp).toDateString()}</span> 
            <span className="read">{news && readingTime(news.description)} min read</span>
          </h4>
          <h2>{news && news.title}</h2>
        </div>
        </span>
        <p style={{ whiteSpace: 'pre-wrap' }}>{news && news.description}</p>
    </div>
  )
}
