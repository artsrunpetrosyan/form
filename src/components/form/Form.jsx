import React, { useState, useEffect } from 'react';
import { example } from '../../example/example'
import 'bootstrap/dist/css/bootstrap.css';

function Form(props) {
    const [formValues, setFormValues] = useState(example);
    useEffect(() => {
        setFormValues(props.edit) 
    }, [props.edit]);

    const handleOnChange = event => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const onFormSubmit = () => {
        if (formValues.name && formValues.lastName && formValues.fullName) {
            props.cretaeForms(formValues);
            setFormValues(example)
        } else {
            { window.alert("Please enter a valid value in all the required fields !") }
        }
    }

    const { id, name, lastName, fullName } = formValues;

    return (
        <div>
            <div className="form-group col-md-4 mb-3">
                <label >Name</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    value={name}
                    name="name"
                    onChange={handleOnChange}
                />
            </div>
            <div className="form-group col-md-4 mb-3">
                <label>lastName</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="lastname"
                    value={lastName}
                    name="lastName"
                    onChange={handleOnChange}
                />
            </div>
            <div className="form-group col-md-4 mb-3">
                <label>fullName</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="fullname"
                    value={fullName}
                    name="fullName"
                    onChange={handleOnChange}
                />
            </div>
            <button class="btn btn-primary mx-sm-4 my-sm-1" type="submit"onClick={onFormSubmit}>
                {id ? 'Edit' : 'Create'}
            </button>
        </div>
    )
}

export default Form
