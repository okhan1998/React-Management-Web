import React from 'react'

export const Customer = (props) => {
    return (
        <div>
            <img src={props.image} alt='profile'/>
            <h2>{props.name}({props.id})</h2>
            <p>{props.birthday}</p>
            <p>{props.gender}</p>
            <p>{props.job}</p>
        </div>
    )
}
