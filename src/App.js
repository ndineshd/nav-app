import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Signup from './components/Signup'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';



function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' component={Home} exact> <Home /> </Route>
        <Route path='/about' component={About} exact> <About /> </Route>
        <Route path='/skills' component={Skills} exact> <Skills /> </Route>
        <Route path='/contact' component={Contact} exact> <Contact /> </Route>
        <Route path='/signup' component={Signup} exact> <Signup /> </Route>
      </Switch>
    </Router>
  );
}

export default App;
