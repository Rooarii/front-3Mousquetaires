import React from "react";
import data from "../json/projects.json";


const Project = () => {
  return (



<div className="main-container">
      <div className="flex-container">
        <div>
          <h1>{data.projectElectronique[1].name}</h1>
        </div>
        <img alt="electronic" src={data.projectElectronique[1].img} />
      </div>
      <div className="description-container">
        <h2>Description</h2>
        <div className="flex">
          <div>
            <p>
              Faire le ménage ? Non ! À manger ? Non Plus !
              Avoir un robot qui fait ce que vous n'avez pas envie de faire c'est la vie ! T'es pas prêt ! 
            </p>
          </div>
        </div>
      </div>
      <div className="team-container">
        <h2>Team</h2>
        <div className="flex">
          <div className="child-flex">
            <p>
             Nous c'est les flemmards ! T'aimes pas faire ci, par faire ça ! Nous non plus ! Mais on est pas bête. On construit des robots qui nous assiste. Ils parlent pas beaucoup mais on les aimes bien !   
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

export default Project;