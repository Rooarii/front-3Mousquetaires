import React from 'react';
import datatuto from "../json/tuto.json";

function Tuto() {
  return(
    <div className="tuto-container">
      {datatuto.tutos.map(item => {
        return(
          <div className="name-container">
            <h1 className="name-display"> <i class={item.description}/>{item.name}</h1>
            <br></br>
          </div>
        )
      })}
    </div>
  )
}

export default Tuto;