import React, {useState, useEffect} from 'react';
import NewsItem from '../components/NewsItem/NewsItem';
import { getNews } from '../firebase';
import { Link, NavLink } from 'react-router-dom';
import { Facebook, LinkedIn, NetworkWifi1Bar, X } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import Loader from '../components/Loader/Loader';
import { Helmet } from 'react-helmet-async';


export default function News() {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage] = useState(8);
  const [category, setCategory] = useState('all');
  let location = useLocation();

  const [isOnline] = useState(() =>{
    return navigator.onLine
  })
  
  useEffect(() =>{
    getNews(currentPage * newsPerPage, category, setNews, setLoading);
  }, [currentPage, category, isOnline, newsPerPage, location]);
  
  useEffect(() => {
    loading && setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [loading]);
  
  const handleReload = () => {
    getNews(currentPage * newsPerPage, category, setNews, setLoading);
  }
  
  useEffect(() => {
    location.search.split("=")[1] && setCategory(location.search.split("=")[1]);
  }, [location.search]);
 
  return (
    <div className='news'>
      <Helmet>
            <meta charSet="utf-8" />
            <title>NEWS | KDAN KENYA - "Empowering Kenya, Erasing Debt"</title>
            <link rel="canonical" href={window.location.hostname} />
            <base href={window.location.hostname}></base>
            <meta name="description" content={"Kenya Debt Abolition Network is dedicated to advocating for the elimination of unsustainable debt burdens in Kenya. Through education, advocacy, and community engagement, we aim to create a debt-free future that fosters economic growth and social equity."}/>
      </Helmet>
      <div className="news-flyer">
        <h1>Explore News</h1>
        <div className="order-categories">
          <NavLink title='all' to='?category=all' className={category === 'all' && "current"}>All</NavLink>
          <NavLink title='finance' to='?category=finance' className={category === 'finance' && "current"}>Finance</NavLink>
          <NavLink title='business' to='?category=business' className={category === 'business' && "current"}>Business</NavLink>
          <NavLink title='statistics' to='?category=statistics' className={category === 'statistics' && "current"}>Statistics</NavLink>
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
            (!isOnline && (news.length === 0) && !loading) && <div className='no-network'>
              <h1>Nothing Yet!</h1>
              <p>This could be a network issue. Check you internet and try again.</p>
              <NetworkWifi1Bar className='wifi'/>
              <NavLink className="btn" onClick={handleReload}>Reload</NavLink>
            </div>
          }
                    
          {
            ((!news.length > 0) && loading) && <Loader />
          }
      </div>
    </div>
  )
}
