import React, { useState, useEffect, Fragment } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client'

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room,  setRoom] = useState('');
  const ENDPOINT = 'localhost:5000'

  useEffect(()=>{
    const { name, room} = queryString.parse(location.search)
    // console.log(location);
    // console.log(name, room)
    socket = io(ENDPOINT, {transports: ['websocket']}
    )

    setName(name);
    setRoom(room);
    console.log(socket)

    socket.emit('join', {name, room})
  },[ENDPOINT, location.search])
  return (
    <Fragment>
       <h1>Chat</h1>
      <p>{`Hello ${name}, welcome to the ${room} room`}</p>
    </Fragment>
   
  )
};

export default Chat;