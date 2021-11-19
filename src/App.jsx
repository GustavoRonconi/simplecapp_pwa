import './App.css';
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




function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <Routes>
            <Route path={LOGIN} element = { < PageLogin/> }/>
            <Route path={HOME} element = { < Home/> }/>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
