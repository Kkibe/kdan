import React, {useState, useEffect} from 'react';
import NewsItem from '../components/NewsItem/NewsItem';
import { getNews } from '../firebase';


export default function News() {
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState([]);
  
  useEffect(() =>{
    getNews(12, setNews);
  }, []);
  
  useEffect(() => {
    loading && setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [loading]);
  
  return (
    <div className='news'>
      <h1>Explore Juiciest News</h1>
      <div className='post-container'>
          {
            news.length > 0 && news.map((blog) => {
              return <NewsItem key={blog.id} data={blog}/>
            })
          }
        <a className="btn" onClick={() => setLoading(!loading)}>
          {
            loading ? "Loading..." : "Load More"
          }
        </a>
      </div>
    </div>
  )
}
