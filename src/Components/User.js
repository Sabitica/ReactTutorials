import React from 'react';

const user = (props) => {

    return (
    <li>
        <span>name: {props.children}, job: {props.job}</span>
        <input onChange={props.changeEvent} value={props.children}/>
        <button onClick={props.delEvent}>Delete</button>
    </li>
    );

}

export default user;