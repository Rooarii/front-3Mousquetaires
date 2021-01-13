import './styles/app.scss'
import CategorieList from './components/CategorieList'
//import ChatBot from './components/Chatbot'
import FicheProjet from './components/FicheProjet'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ChatBot className="chatbot" /> */}
        <CategorieList />
      </header>
      <FicheProjet />
    </div>
  );
}

export default App;
