//import react from "react";
import data from "../json/categories.json";

import { Link } from 'react-router-dom';

import ChatBot from './Chatbot'
import SignIn from './Join/Join';

const Main = () => {
  return (
    <div className="categorie-list-container">

      <h1>Let's <span className='play'>Play</span></h1>
      
      <div className="container-grid">
        <div className="main-container-home">
          {
            data.categories.map((item, index) => (
              <div className="specialty-container" key={index}>
                <div className="parent" >
                  <Link to="/category"><h3 style={{ color: `${item.color}` }}>{item.name.slice(0, 2).toUpperCase()}</h3></Link>
                </div>
                <h2>{item.name.toUpperCase()}</h2>
              </div>
            ))}
        </div>
       
        <div className="chatbot-container">
          {/* <SignIn /> */}
          <ChatBot />
        </div>
        
      </div>
      <div className="scroll-indication">
        <i class="fas fa-angle-double-down" />
      </div>
    </div>
  )
}

          
export default Main;
