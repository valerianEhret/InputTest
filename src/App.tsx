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


  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>


  </div>
  )
}

export default App