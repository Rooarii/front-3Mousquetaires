import React from 'react';
import datatuto from "../json/tuto.json";


function Tuto() {
  return(
    <div>
      {datatuto.tutos.map(item => {
        return(
          <div>
            <h1>{item.name}</h1>
          </div>
        )
      })}
    </div>
  )
}

export default Tuto;