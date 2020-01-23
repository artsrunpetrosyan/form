import React from 'react';
import './card.css';



function Card(props) {

    const { id, name, lastName, fullName } = props.form

    return (
        <div className="card">
            <div >
                <b>Name:{name}</b>
            </div>
            <div >
                <b>last name:{lastName}</b>
            </div>
            <div>
                <b>full name: {fullName}</b>
            </div>
            <div className="but">
                <button onClick={() => props.deleteForm(id)}>Delete</button>
                <button onClick={() => props.editForm(id)}>Edit</button>
            </div>
        </div>
    )
}

export default Card
