import React, {useState, useEffect} from 'react';
import NewsItem from '../components/NewsItem/NewsItem';
import { getNews } from '../firebase';
import { Link, NavLink } from 'react-router-dom';
import { Facebook, LinkedIn, NetworkWifi1Bar, X } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';


export default function News() {
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage] = useState(6);
  const [category, setCategory] = useState('all');
  let location = useLocation();
  const [isOnline] = useState(() =>{
    return navigator.onLine
  })
  
  useEffect(() =>{
    getNews(currentPage * newsPerPage, category, setNews);
  }, [currentPage, category, isOnline, newsPerPage]);
  
  useEffect(() => {
    loading && setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [loading]);
  
  const handleReload = () => {
    getNews(currentPage * newsPerPage, category, setNews);
  };
  
  /*
  useEffect(() => {
    setCategory(location.search.split("=")[1]);
  }, [location.search]);
  */
 
  return (
    <div className='news'>
      <div className="news-flyer">
        <h1>Explore News</h1>
        <div className="order-categories">
          <NavLink title='all' to='/news?category=all'>All</NavLink>
          <NavLink title='finance' to='/news?category=finance'>Finance</NavLink>
          <NavLink title='business' to='/news?category=business'>Business</NavLink>
          <NavLink title='statistics' to='/news?category=statistics'>Statistics</NavLink>
        </div>
        <div className="social">
          <Link to='https://twitter.com/ancientpupy' title='twitter/@kdan_kenya' target='_blank'><X /></Link>
          <Link to='https://www.linkedin.com/in/kibetkorir' title='linkedin/in/kdan-kenya' target='_blank'><LinkedIn /></Link>
          <Link to='https://www.facebook.com/kibetkorirc' title='facebook/kdan-kenya' target='_blank'><Facebook /></Link>
        </div>
      </div>
      <div className='post-container'>
          {
            news.length > 0 && news.map((blog) => {
              return <NewsItem key={blog.id} data={blog}/>
            })
          }
          {
            news.length > 0 && <NavLink className="btn" onClick={() => setCurrentPage(currentPage + 1)}>{loading ? "Loading..." : "Load More"}</NavLink>
          }
          {
            news.length === 0 && <div className='no-network'>
              <h1>Nothing Yet!</h1>
              <p>This could be a network issue. Check you internet and try again.</p>
              <NetworkWifi1Bar className='wifi'/>
              <NavLink className="btn" onClick={handleReload}>Reload</NavLink>
            </div>
          }
      </div>
    </div>
  )
}
