import React, { useState } from 'react';

const ContactInfo = (props) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [stateAddress, setStateAddress] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [country, setCountry] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleChange = (event) => {
        setFirstName(event.target.value);
    };

    return (
        <div className="contact-info">
            <h2 className="form-title">Contact Info</h2>
            <h3 className="header-form">Please provide the following</h3>
            <form className="form-container">
                <div className="input-container">
                    <p className="input">First Name: </p>
                    <input 
                        className="form-input"
                        type="text"
                        name="firstName"
                        onChange={handleChange}
                    />
                </div>
                <div className="input-container">
                    <p className="input">Last Name: </p>
                    <input 
                        className="form-input"
                        type="text"
                        name="lastName"
                        onChange={handleChange}
                    />
                </div>
                <div className="input-container">
                    <p className="input">Job Title: </p>
                    <input 
                        className="form-input"
                        type="text"
                        name="jobTitle"
                        onChange={handleChange}
                    />
                </div>
                <div className="input-container">
                    <p className="input">Address: </p>
                    <input 
                        className="form-input"
                        type="text"
                        name="address"
                        onChange={handleChange}
                    />
                </div>
                <div className="input-container">
                    <p className="input">City: </p>
                    <input 
                        className="form-input"
                        type="text"
                        name="city"
                        onChange={handleChange}
                    />
                </div>
                <div className="input-container">
                    <p className="input">State: </p>
                    <input 
                        className="form-input"
                        type="text"
                        name="stateAddress"
                        onChange={handleChange}
                    />
                </div>
                <div className="input-container">
                    <p className="input">Zipcode: </p>
                    <input 
                        className="form-input"
                        type="text"
                        name="zipcode"
                        onChange={handleChange}
                    />
                </div>
                <div className="input-container">
                    <p className="input">Country: </p>
                    <input 
                        className="form-input"
                        type="text"
                        name="country"
                        onChange={handleChange}
                    />
                </div>
                <div className="input-container">
                    <p className="input">Email: </p>
                    <input 
                        className="form-input"
                        type="email"
                        name="email"
                        onChange={handleChange}
                    />
                </div>
                <div className="input-container">
                    <p className="input">Phone: </p>
                    <input 
                        className="form-input"
                        type="text"
                        name="phone"
                        onChange={handleChange}
                    />
                </div>
            </form>
            
            
        </div>
    );
};

export default ContactInfo;