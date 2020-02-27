import React from 'react';
import { Route, Switch } from 'react-router-dom';

import DashboardWRedirect from './components/DashboardWRedirect';
import Dashboard from './components/Dashboard';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Navbar from './components/Navbar';
import { Projects } from './components/Projects';
import ProjectDetails from './components/ProjectDetails';



import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Router> */}
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route exact path='/projects' component={Projects}/>
          <Route exact path="/projects/:id" component={ProjectDetails} />
          <Route component={Error} />
        </Switch>
      {/* </Router> */}
    </div>
  );
}

export default App;
