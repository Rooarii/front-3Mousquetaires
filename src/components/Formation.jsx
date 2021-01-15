import React from "react";
import formations from "../json/formations.json";
// import data from '../json/projects'

const Formation = () => {
  return (
    <div className="main-container">
      <div className="flex-container">
        <div>
          <h1>{formations.electronique[4].name}</h1>
        </div>
        <img alt="electronic" src={formations.electronique[4].img} />
      </div>
      <div className="description-container">
        <h2>DESCRIPTION</h2>
        <div className="flex">
          <div>
            <p>
              Ras-le-bol de polluer à base d'énergies fossiles ! Ouaaaaai ! 
              Alors la solution est toute trouvée, la question vite répondu ! 
              rejoint la formation création de batterie pour t'alimenter toi-même en énergie en transpirant sur ton vélo !
            </p>
          </div>
        </div>
      </div>
      <div className="team-container">
        <h2>PRÉREQUIS</h2>
        <div className="flex">
          <div className="child-flex">
            <p>
            <ul>
              <li>Connaître les types de courants.</li>
              <li>Ne pas travailler chez EDF!</li>
              <li>Avoir les C.A.C.E.S lithium.</li>
              <li>Être prêt à recevoir des conseils et d'en donner</li>
            </ul>
            </p>
          </div>
        </div>
      </div>
      <div className="button" >
        <button className="big-button" type="button">
          ACHETER
        </button>
      </div>
    </div>
  );
};

export default Formation;