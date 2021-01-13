import './styles/app.scss'
import CategorieList from './components/CategorieList'
//import ChatBot from './components/Chatbot'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ChatBot className="chatbot" /> */}
        <CategorieList />
      </header>
    </div>
  );
}

export default App;
