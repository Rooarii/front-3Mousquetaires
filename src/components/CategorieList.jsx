//import react from "react";
import data from "../json/categories.json";

import { Link } from 'react-router-dom';


const CategorieList = () => {
  return (
    <div className="categorie-list-container">

      <h1>Let's <span className='play'>Play</span></h1>
      <div className="container-grid">

      <div className="main-container">
          {
            data.categories.map((item, index) => (
              <div className="container" key={index}>
                <div className="parent" >
                  <Link to="/category"><h3 style={{color : `${item.color}` }}>{item.name.slice(0, 2).toUpperCase()}</h3></Link>
                </div>
                <h2>{item.name.toUpperCase()}</h2>
              </div>
        ))}
      </div>
        </div>
      <div className="scroll-indication">
        <i class="fas fa-angle-double-down" />
      </div>
    </div>
  )

}

           

export default CategorieList;
