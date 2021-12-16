import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import {HOME, LOGIN, SOBRE} from '../../routes/routes'
import PageLogin from '../../pages/PageLogin';
import RoutesPages from '../../pages/RoutesPages';
import Sobre from '../../pages/Sobre'
import Home from '../../pages/Home'
import Layout from '../Layout';

// const Pages = () => (
//   <Routes>
//     <Route path="/pages/one" element={<Sobre/>} />
//     <Route path="/pages/two" element={<Home/>} />
//   </Routes>
// );

// const wrappedRoutes = () => (
//   <div>
//     <Layout />
//     <div className="container__wrap">
//       <Route path="/" element={Pages} />
//     </div>
//   </div>
// );


const Routers = () => (
  <div>
    <Router>
      <Routes>
        <Route path={LOGIN} element={< PageLogin />}/>
        <Route exact path='/' element={<RoutesPages/>} />
      </Routes>
    </Router>
    </div>

);

export default Routers;

