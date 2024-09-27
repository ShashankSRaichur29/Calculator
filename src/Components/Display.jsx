import React from 'react'

function Display(props){
    return(
        <div className='display'>
            <h3 className="inp">{props.inp === ""? 0:props.inp}</h3>
            <h1 className="out">{props.out === ""? 0:props.out}</h1>
        </div>
    )
}

export default Display