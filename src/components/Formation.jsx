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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              convallis dictum lorem id imperdiet. Nam dapibus lacus sit amet
              eleifend faucibus. Nulla facilisi.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="team-container">
        <h2>Team</h2>
        <div className="flex">
          <div className="child-flex">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              convallis dictum lorem id imperdiet. Nam dapibus lacus sit amet
              eleifend faucibus. Nulla facilisi.{" "}
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
