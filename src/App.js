import React, { useState, useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import Main from './components/Main';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Category from './components/Category';
import Project from './components/Project';
import Loader from './components/Loader';

import Calendar from './components/Calendar';
import Formation from './components/Formation';
import Tuto from './components/Tuto';

import './styles/app.scss';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, []);

  return (
    <Fragment>
      {
        loading ? <Loader />
        : 
      <Router>
        <div className="App">
          <header className="App-header">
            <Navbar />
          </header>
        </div>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route path='/category' component={Category} />
          <Route path='/project' component={Project} />
          <Route path='/calendar' component={Calendar} />
          <Route path='/formation' component={Formation} />
          <Route path='/tuto' component={Tuto} />
      </Switch>
      </Router>
      }
    </Fragment>
  );
}

export default App;
