import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Join.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('General');

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <label placeholder="Room" value="General" className="joinInput" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link className="button" onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mid-button'} type="submit">Bla Bla</button>
        </Link>
        {/* <div className="button" >
        <button className="big-button" type="button">
          JOIN US
        </button>
      </div> */}
      </div>
    </div>
  );
}
