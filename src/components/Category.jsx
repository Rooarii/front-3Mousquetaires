import formations from "../json/formations.json";
import projects from "../json/projects.json";
import React from "react";

import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="main">
      <div className="header">
        <h1>ELECTRONIC</h1>
        <img alt="electronic" src={formations.electronique[0].img} />
      </div>

      <div className="category-main">
        <h1>PROJECT</h1>
        <div className="flex-container">
          {projects.projectElectronique.map((e) => {
            return (
              <Link className="link" to="/project">
                <div className="flex-child">
                  <img  width="auto" src={e.img} alt="projet" />
                  <div className="title-container">
                    <h2>{e.name}</h2>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <h1>FORMATIONS</h1>
        <div className="flex-container">
          {formations.electronique.slice(1).map((e) => {
            return (
              <Link className="link" to="/project">
                <div className="flex-child" >
                  <img top width="auto" src={e.img} alt="electronic" />
                  <div className="title-container">
                    <h2>{e.name}</h2>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Category;
