import { Routes, Route} from "react-router-dom";
import { HelmetProvider, HelmetData  } from "react-helmet-async";
import { useEffect, useState, useContext} from 'react';
import { renderToString } from 'react-dom/server';
import { AuthContext } from './AuthContext'

import Navbar from './components/Navbar/Navbar';
import Newsletter from './components/Newsletter/Newsletter';
import Loader from './components/Loader/Loader';
import Donate from './components/Donate/Donate';
import Footer from './components/Footer/Footer';

import Home from './pages/Home';
import News from './pages/News';
import SingleNews from './pages/SingleNews';
import Admin from './pages/Admin';
import AdminAuth from './pages/AdminAuth';
import About from './pages/About';
import Error from './pages/Error';

const helmetData = new HelmetData({});

function App() {
  const [loading, setLoading] = useState(false);
  const { currentUser } = useContext(AuthContext);
  
  useEffect(() => {
    if(loading){
      if (window.document.readyState === "complete"){
        setLoading(!loading)
      } else {
        setLoading(false);
      }
    }
  }, [loading]);

  return (
    <HelmetProvider>
    <div className="App">
      {
        loading&& <Loader />
      }
      {
      !loading && <>
      <Navbar />
      <Donate />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='news' element={<News />} />
          <Route path='news/:id' element={<SingleNews />} />
          <Route path='admin' element={currentUser ? <Admin /> : <AdminAuth />}  />
          <Route path='about' element={<About />} />
          <Route path='*' element={<Error />} />
      </Routes>
      <Newsletter />
      <Footer />
      </>
      }
    </div>
    </HelmetProvider>
  );
}
export default App;

const { helmet } = helmetData.context;

