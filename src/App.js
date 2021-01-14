import React, { useState, useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';

import CategorieList from './components/CategorieList'
import Navbar from './components/Navbar'
import CategoryMainPage from './components/CategoryMainPage';
import ChatBot from './components/Chatbot';
import FicheProjet from './components/FicheProjet';
import Loader from './components/Loader';

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
            {/* <Link to="/"><h1>Home</h1></Link> */}
          </header>
            <div className="sticky">
              {/* <ChatBot className="chatbot" /> */}
            </div>    
        </div>
        <Switch>
          <Route exact path="/" component={CategorieList}/>
          <Route path='/category' component={CategoryMainPage} />
          <Route path='/project' component={FicheProjet} />
          {/* <Route path='/formation' component={FicheFormation} /> */}
      </Switch>
      </Router>
      }
    </Fragment>
  );
}

export default App;
