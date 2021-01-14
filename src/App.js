import './styles/app.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CategorieList from './components/CategorieList'
import Navbar from './components/Navbar'
import CategoryMainPage from './components/CategoryMainPage';
import ChatBot from './components/Chatbot'
import Formation from './components/Formation'


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
          <div className="sticky">
             {/* <ChatBot className="chatbot" />  */}
          </div>    
      </div>
      <Switch>
        <Route exact path="/" component={CategorieList}/>
        <Route path='/category' component={CategoryMainPage} />
        <Route path='/project' component={Formation} />
        {/* <Route path='/formation' component={FicheFormation} /> */}
    </Switch>
    </Router>
  );
}

export default App;
