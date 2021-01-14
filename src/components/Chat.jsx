import React, { useState, useEffect, Fragment } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client'

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room,  setRoom] = useState('');
  const [message,  setMessage] = useState('');
  const [messages,  setMessages] = useState([]);
  const ENDPOINT = 'localhost:5000'

  useEffect(()=>{
    const { name, room} = queryString.parse(location.search)
    // console.log(location);
    // console.log(name, room)
    socket = io(ENDPOINT, {transports: ['websocket']}
    )

    setName(name);
    setRoom(room);
    // console.log(socket)

    // join method
    socket.emit('join', {name, room});

    return () =>{
      // call disconnect event
      socket.emit('disconnect');

      // close user connection
      socket.off();
    }

  },[ENDPOINT, location.search]);

  useEffect(()=>{
    socket.on('message', (message) =>{
      setMessages([...messages, message]);
    })
  }, [messages]);

  //function for sending messages

  const sendMessage = (event)=>{
    if (message){
      socket.emit('sendMessage', message, ()=> setMessage(''));
    }
  }

  console.log(message, messages)

  return (
    <Fragment>
      <div className="outerContainer">
        <div className="container">
          <input 
            value={message}
            onChange={(event)=> setMessage(event.target.value)}
            onKeyPress={event => event.key ==='Enter' ? sendMessage(event): null}
          />
        </div>
      </div>
       <h1>Chat</h1>
      <p>{`Hello ${name}, welcome to the ${room} room`}</p>
    </Fragment>
   
  )
};

export default Chat;