import React, { Fragment } from "react";
import data from "../json/categories.json";
import { Link } from 'react-router-dom';

import ChatbotContainer from './ChatbotContainer'

const Main2 = () => {
  return (
    <Fragment>
      <div className="title-container">
        <h1>Let's <span className='play'>Play</span></h1>
      </div>
      <div className='grid-container'>
          <div className="topics-container">
            {
              data.categories.map((item, index) => (
                <div className="topic" key={index}>
                  <Link to="/category">
                    <h3 style={{ color: `${item.color}` }}>{item.name.slice(0, 2).toUpperCase()}</h3>
                  </Link>
                  <div className="topic-title">
                    <h2>{item.name.toUpperCase()}</h2>
                  </div>
                </div>
              ))}
          </div>
              <ChatbotContainer />
        </div>
    </Fragment>
  )
}

export default Main2;
