import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Join = () => {
  const [name, setName] = useState('');
  const [room,  setRoom] = useState('');
  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div><input placeholder="" className="joinInput" type="text" onChange={} /></div>
        <div><input placeholder="" className="joinInput" type="text" onChange={} /></div>
      </div>
    </div>
    
  );
}

export default Join;