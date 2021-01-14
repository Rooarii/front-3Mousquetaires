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
        <h2>Description</h2>
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
        <h2>Team</h2>
        <div className="flex">
          <div className="child-flex">
            <p>
             Dans la team, que des écolos ! 
             Bien sur, c'est le futur ! 
             Elon Musk n'est pas arrivé là où il est par hasard. 
             Et ouais ! 
             Alors si tu aussi tu veux devenir riche (de connaissances), alors rejoint nous 😏
            </p>
          </div>
        </div>
      </div>
      <div className="button" >
        <button className="big-button" type="button">
          JOIN US
        </button>
      </div>
    </div>
  );
};

export default Formation;
