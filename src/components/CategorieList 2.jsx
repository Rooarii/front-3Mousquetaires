//import react from "react";
import data from "../json/categories.json";


const CategorieList = () => {
  return(
    <div className="categorie-list-container">
    <h1>Let's Play</h1>
    <div>
      {data.categories.map((item, index )=> (
        <div className="container" key={index}>
        <div className="parent" >
          <h3>{item.name.slice(0, 2).toUpperCase()}</h3>
        </div>
        <div>{item.name}</div>
        </div>
      ))}
    </div>
    </div>
  )

}


export default CategorieList;
