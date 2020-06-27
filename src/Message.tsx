import React, {useState} from 'react';

type MessagesType = {
    id: string
    text: string
}

type PropsType = {
    messages: Array<MessagesType>
    addMessage: (value:string) => void
}


export const Message = (props: PropsType) => {

    let [textState, setTextState] = useState("")

    return (
        <div>
            <div>
                <textarea value={textState} onChange={ (e) => setTextState(e.currentTarget.value)  }/>
                <button onClick={ () => props.addMessage(textState)}>add</button>
            </div>
            <ul>
                {
                    props.messages.map(m => <li key={m.id}> {m.text}</li>)


                }
            </ul>
        </div>
    )
}