import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Layout from '../Layout/index';
import MainWrapper from './MainWrapper';
import ExamplePageOne from '../Example/index';
import ExamplePageTwo from '../ExampleTwo/index';

import {
  HOME,
  LOGIN
} from '../../routes/routes'
import Home from '../../pages/Home';
import PageLogin from '../../pages/PageLogin';

const Pages = () => (
  <Routes>

    <Route path="/pages/one" component={ExamplePageOne} />
    <Route path="/pages/two" component={ExamplePageTwo} />
  </Routes>
);

const wrappedRoutes = () => (
  <div>
    <Layout />
    <div className="container__wrap">
      <Route path="/pages" component={Pages} />
    </div>
  </div>
);

const Router = () => (
  <MainWrapper>
    <main>
      <Routes>
        <Route exact path={HOME} component={Home} />
        <Route path={HOME} component={wrappedRoutes} />
      </Routes>
    </main>
  </MainWrapper>
);

export default Router;

