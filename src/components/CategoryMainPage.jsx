import formations from "../json/formations.json";
import projects from "../json/projects.json";
import React from "react";

import { Link } from "react-router-dom";

const CategoryMainPage = () => {
  return (
    <>
      <div className="header">
        <h1>Electronique</h1>
        <img src={formations.electronique[1].img} />
      </div>

      <div className="category-main">
        <h1>Projects :</h1>
        <div>
          {projects.projectElectronique.map((e) => {
            return (
              <Link  to="/project">
                <div>
                  <img top width="auto" src={e.img} alt="Card image cap" />
                  <div>
                    <h2>{e.name}</h2>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <h1 >Formations :</h1>
        <div >
          {formations.electronique.map((e) => {
            return (
              <Link  to="/project">
                <div >
                  <img top width="auto" src={e.img} alt="Card image cap" />
                  <div>
                    <h2>{e.name}</h2>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CategoryMainPage;
