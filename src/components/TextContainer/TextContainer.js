import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>Chat en Temps réel<span role="img" aria-label="emoji">💬</span></h1>
      <h2>
        <div>Créer avec</div>
        <img  className="love" src="https://media.giphy.com/media/TFiwrCyNQDFmID0QUA/giphy.gif" alt="this slowpoke moves"  width="250" /> 
        <div className="end"> 
          pour Artilect <img src="https://artilect.fr/wp-content/uploads/2018/09/cropped-square-only.png" width="50px" />
        </div>
        <span role="img" aria-label="emoji"></span>
      </h2>
      <h2>
        Try it out right now! <span role="img" aria-label="emoji">⬅️</span></h2>
    </div>
    {
      users
        ? (
          <div>
            <h1>Connectés:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;