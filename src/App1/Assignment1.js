import React from 'react';
import Assignment1char from './Assignment1char';

const assignment1 = (props) => {

    const charlist = props.userInput.split('').map((ch, index) => {
        return < Assignment1char
            character={ch}
            key={index}
            clicked={() => props.clicked(index)}
        />
    })

    return (
        < div >
            <input onChange={props.changed} value={props.userInput} placeholder="Enter Something...." />
            <h1>{props.userInput}</h1>
            {charlist}
        </div >
    );
}

export default assignment1;