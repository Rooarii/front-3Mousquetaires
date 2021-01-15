import React, { useState, useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './components/Main'
import Navbar from './components/Navbar'
import Category from './components/Category';
import Loader from './components/Loader';
import Formation from './components/Formation';
import Calendar from './components/Calendar';
import Chat from './components/Chat/Chat'
import './styles/app.scss';

export default function App() {
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
            <div className="sticky">
            </div>    
        </div>
        <Switch>
        <Route exact path="/" component={Main}/>
        <Route path='/category' component={Category} />
        <Route path='/project' component={Formation} />
        <Route path='/calendar' component={Calendar} />
        <Route path="/chat" component={Chat} />
    </Switch>
      </Router>
      }
    </Fragment>
  )
}