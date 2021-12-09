import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import {
  LOGIN,
  HOME,
} from './routes/routes'
import PageLogin from './pages/PageLogin';
import Home from './pages/Home';
import ScrollToTop from '../src/containers/App/ScrollToTop';
import React, { useEffect, useState } from 'react';
// import Routers from './containers/App/Routers';
import 'bootstrap/dist/css/bootstrap.css';
import './scss/app.scss';



function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.addEventListener('load', () => {
      setIsLoading(false);
      setTimeout(() => setIsLoaded(true), 500);
    });
  }, []);


  return (
    <div>
      {/* <Router>
        <ScrollToTop>
          {!isLoaded && (
            <div className={`load${isLoading ? '' : ' loaded'}`}>
              <div className="load__icon-wrap">
                <svg className="load__icon">
                  <path fill="#4ce1b6" d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" />
                </svg>
              </div>
            </div>
          )}
          <div>
            <Routers />
          </div>
        </ScrollToTop>
      </Router> */}






      <Router>
        <ScrollToTop>
          {!isLoaded && (
            <div className={`load${isLoading ? '' : ' loaded'}`}>
              <div className="load__icon-wrap">
                <svg className="load__icon">
                  <path fill="rgb(247, 222, 80)" d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" />
                </svg>
              </div>
            </div>
          )}
        </ScrollToTop>
        <Routes>
          <Route path={LOGIN} element={< PageLogin />} />
          <Route path={HOME} element={< Home />} />
        </Routes>
      </Router >








    </div >
  )
}

export default App;



// (
//   <Router>
//     <Routes>
//       <Route path={LOGIN} element={< PageLogin />} />
//     </Routes>

//     <ScrollToTop>
//       {!isLoaded && (
//         <div className={`load${isLoading ? '' : ' loaded'}`}>
//           <div className="load__icon-wrap">
//             <svg className="load__icon">
//               <path fill="#4ce1b6" d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" />
//             </svg>
//           </div>
//         </div>
//       )}
//       <div>
//         <Routers />
//       </div>
//     </ScrollToTop>
//   </Router>

// );