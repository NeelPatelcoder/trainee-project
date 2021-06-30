import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dropzone from './pages/Dropzone';
import Products from './pages/Products';
import Team from './pages/Team';
import Messages from './pages/Messages';
import Support from './pages/Support';
import SignUp from './pages/SignUp';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Dropzone' component={Dropzone} />
          <Route path='/products' component={Products} />
          <Route path='/team' component={Team} />
          <Route path='/messages' component={Messages} />
          <Route path='/support' component={Support} />
          <Route path='/signup' component={SignUp} />
  
        </Switch>
      </Router>
    </>
  );
}

export default App;
