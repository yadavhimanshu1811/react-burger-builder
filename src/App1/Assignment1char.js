import React from 'react';
// import Radium from 'radium';

const Assignment1char=(props)=>{
    const style={
        display:'inline-block',
        border:'1px solid black',
        padding:'1rem',
        margin:'0.2rem',
        textTransform:'uppercase'
    }
    return(
        <div style={style} onClick={props.clicked}>
            <p>{props.character}</p>
        </div>
    )
}

export default Assignment1char;