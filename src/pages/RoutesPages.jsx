import Layout from '../containers/Layout';
import MainWrapper from '../containers/App/MainWrapper';
import Documentation from './Documentation'
import { DOCUMENTATION, HOME, SERVICOS, SOBRE } from '../routes/routes';
import Sobre from './Sobre';
import Servicos from './Servicos';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';


export default function RoutesPages() {

  return (
    <MainWrapper>
      <main >
        <div>
          <Layout />
          <div className="container__wrap" >
            <Routes>
              <Route exact path={HOME} element={<Home />} />
              <Route path={DOCUMENTATION} element={<Documentation />} />
              <Route path={SOBRE} element={<Sobre />} />
              <Route path={SERVICOS} element={<Servicos />} />
            </Routes>
          </div>
        </div>
      </main>
    </MainWrapper>

  )
}
