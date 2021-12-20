import ScrollToTop from '../src/containers/App/ScrollToTop';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './scss/app.scss'
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Documentation from './pages/Documentation'
import { DOCUMENTATION, HOME, SERVICOS, SOBRE, LOGIN, NOT_FOUND } from './routes/routes';
import Sobre from './pages/Sobre';
import Servicos from './pages/Servicos';
import PageLogin from './pages/PageLogin';
import NotFound from './pages/NotFound'


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
    <Router>
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
          <div>
            <Routes>
              <Route path={LOGIN} element={< PageLogin />} />
              <Route path={NOT_FOUND} element={<NotFound />} />
              <Route path={HOME} element={<Home />} />
              <Route path={DOCUMENTATION} element={<Documentation />} />
              <Route path={SOBRE} element={<Sobre />} />
              <Route path={SERVICOS} element={<Servicos />} />
            </Routes>
          </div>
        </ScrollToTop>
      </Provider>
    </Router>
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