import React, {useState} from 'react';
import { Message } from "./Message"
import {v1} from "uuid";

import './App.css';

function App() {


  // Ishodnye dannye v useState

  let [messages, setMessages] = useState([
    { id: v1(), text: "Hello" },
    { id: v1(), text: "How are you?" },
    { id: v1(), text: "I am fine" },
    { id: v1(), text: "Schiki-Miki" },
  ])

  function addMessage(value:string) {
    let newMessage = {id:v1(), text: value};
    let newMessages = [newMessage,...messages];
    setMessages(newMessages)
  }


  return (
  <div className="App">
    <Message messages ={messages}
             addMessage={addMessage}
    />
    <h2>Change1 in dev</h2>
    <h2>Change2 in dev</h2>
    <h2>Change3 in dev</h2>
  </div>
  )
}

export default App