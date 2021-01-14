import './styles/app.scss';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';

// import components
import CategorieList from './components/CategorieList'
import Navbar from './components/Navbar'
import CategoryMainPage from './components/CategoryMainPage';
import ChatBot from './components/Chatbot'
import FicheProjet from './components/FicheProjet';

// import chat
import Join from './components/Join';
import Chat from './components/Chat';

function App() {
  return (
    <Router>
      <div className="App">
        <header value="Access-Control-Allow-Origin" className="App-header">
          <Navbar />
          <Link to="/"><h1>Home</h1></Link>
        </header>
          <div className="sticky">
            <ChatBot className="chatbot" />
          </div>    
      </div>
      <Switch>
        <Route exact path="/" component={CategorieList}/>
        <Route path='/category' component={CategoryMainPage} />
        <Route path='/project' component={FicheProjet} />
        <Route path='/join' component={Join} />
        <Route path='/chat' component={Chat} />
        {/* <Route path='/formation' component={FicheFormation} /> */}
    </Switch>
    </Router>
  );
}

export default App;
