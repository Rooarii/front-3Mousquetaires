import React, { Fragment } from "react";
// import data from '../json/projects'
import picture from '../images/circuit.jpg'

const FicheProjet = () => {

  return (
    <Fragment>
      <div className="project-container">
        <h1>Circuit Imprimé</h1>
        <img src={picture} alt='userpicture' />
        <div>
          <h2 className="project-h2">Description</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis dictum lorem id imperdiet. Nam dapibus lacus sit amet eleifend faucibus. Nulla facilisi. </p>
        </div>
        <div>
          <h2 className="project-h2">Team</h2>
          <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
        </div>
        <button>Join</button>
      </div>
    </Fragment>
  )
}

export default FicheProjet;