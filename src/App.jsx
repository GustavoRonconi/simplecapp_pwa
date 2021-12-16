import ScrollToTop from '../src/containers/App/ScrollToTop';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './scss/app.scss'
import Routers from './containers/App/Routers';
import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

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
  
      <Provider store={store}>

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
              <Routers /> 

        </ScrollToTop>

      </Provider>

    
  )
}

export default App;

{/* <Route path={LOGIN} element={< PageLogin />} /> */ }


{/* COLOCAR ROTAS PRIVADAS

      <Routes>
        <Route exact path={HOME} element={<PrivateRoute/>}>
            <Route exact path={HOME} element={<Home/>}/>
          </Route>
          
          <Route path={LOGIN} element={< PageLogin />} />

        </Routes> */}