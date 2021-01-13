import './styles/app.scss';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import CategorieList from './components/CategorieList'
import Navbar from './components/Navbar'
import CategoryMainPage from './components/CategoryMainPage';
//import ChatBot from './components/Chatbot'


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
          {/* <ChatBot className="chatbot" /> */}
          <Link to="/"><h1>Home</h1></Link>
        </header>
      </div>
      <Switch>
        <Route exact path="/" component={CategorieList}/>
        <Route path='/category' component={CategoryMainPage}/>
    </Switch>
    </Router>
  );
}

export default App;
