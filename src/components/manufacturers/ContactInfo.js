import React, { useState } from 'react';

const ContactInfo = (props) => {
// todo 072820: get handleSubmit or onSubmit from parent as prop, also initialValues

    const initialValues = {
        firstName: '',
        lastName: '',
        jobTitle: '',
        address: '',
        city: '',
        stateAddress: '',
        zipcode: '',
        country: '',
        email: '',
        phone: ''
    };

    const [values, setValues] = useState(initialValues || {});
   
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('handleSubmit values', values);
    }

    const handleChange = (event) => {
        const { target } = event;
        const {name, value } = target;
        event.persist();
        setValues({...values, [name]: value });
    };

    /*
    const {
        values,
        //errors,
        //touched,
        handleChange,
        //handleBlur,
        handleSubmit
    } = useCustomForm({ initialValues, onSubmit });
    */

    return (
        <div className="contact-info">
            <h2 className="form-title">Contact Info</h2>
            <h3 className="header-form">Please provide the following</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-container">
                    <div className="input-container">
                        <p className="input">First Name: </p>
                        <input 
                            className="form-input"
                            type="text"
                            name="firstName"
                            onChange={handleChange}
                            value={values.firstName}
                        />
                    </div>
                    <div className="input-container">
                        <p className="input">Last Name: </p>
                        <input 
                            className="form-input"
                            type="text"
                            name="lastName"
                            onChange={handleChange}
                            value={values.lastName}
                        />
                    </div>
                    <div className="input-container">
                        <p className="input">Job Title: </p>
                        <input 
                            className="form-input"
                            type="text"
                            name="jobTitle"
                            onChange={handleChange}
                            value={values.jobTitle}
                        />
                    </div>
                    <div className="input-container">
                        <p className="input">Address: </p>
                        <input 
                            className="form-input"
                            type="text"
                            name="address"
                            onChange={handleChange}
                            value={values.address}
                        />
                    </div>
                    <div className="input-container">
                        <p className="input">City: </p>
                        <input 
                            className="form-input"
                            type="text"
                            name="city"
                            onChange={handleChange}
                            value={values.city}
                        />
                    </div>
                    <div className="input-container">
                        <p className="input">State: </p>
                        <input 
                            className="form-input"
                            type="text"
                            name="stateAddress"
                            onChange={handleChange}
                            value={values.stateAddress}
                        />
                    </div>
                    <div className="input-container">
                        <p className="input">Zipcode: </p>
                        <input 
                            className="form-input"
                            type="text"
                            name="zipcode"
                            onChange={handleChange}
                            value={values.zipcode}
                        />
                    </div>
                    <div className="input-container">
                        <p className="input">Country: </p>
                        <input 
                            className="form-input"
                            type="text"
                            name="country"
                            onChange={handleChange}
                            value={values.country}
                        />
                    </div>
                    <div className="input-container">
                        <p className="input">Email: </p>
                        <input 
                            className="form-input"
                            type="email"
                            name="email"
                            onChange={handleChange}
                            value={values.email}
                        />
                    </div>
                    <div className="input-container">
                        <p className="input">Phone: </p>
                        <input 
                            className="form-input"
                            type="text"
                            name="phone"
                            onChange={handleChange}
                            value={values.phone}
                        />
                    </div>
                </div>
                <button 
                    className="form-submit"
                    type="submit"
                >
                    Submit
                </button>
            </form>
            
            
        </div>
    );
};

export default ContactInfo;