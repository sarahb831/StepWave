import React, { useState } from 'react';

const ComplianceCredentials = (props) => {
    // todo 072820: get handleSubmit or onSubmit from parent as prop, also initialValues
    // todo 072820: get unlocked from parent as prop

    const [unlocked, setUnlocked] = useState(props.unlocked || true);

    const initialValues = {
        certificationISO11135: '',
        certificationISO17025: '',
        fdaRegistered: '',
        fdaRegistrationNumber: '',
        dateLastFdaInspection: '',
        form483: '',
        documentedQualitySystem: '',
        iso13485Based: '',
        qualityFunctionReportsTo: '',
        qualitySystemISOCertified: '',
        iso13485Certified: '',
        iso9002Certified: '',
        otherISOCertified: '',
        dateLastIsoAudit: '',
    };

    const [values, setValues] = useState(initialValues || {});
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('handleSubmit values', values);
    }

    const handleChange = (event) => {
        const { target } = event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        //const {name, value } = target;
        event.persist();
        setValues({...values, [name]: value });
    };

    return (
        <div className="compliance-credentials">
            <h2 className="form-title">{`Compliance & Credentials`}</h2>
            <h3 className="header-form">Please provide the following</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-container">
                    
                    <div className="input-container">
                        <p className="input-header">For Contract Sterilizers only: </p>
                        <p className="input-sub">1.  Do you have certification that you meet EN550 and ISO 11135 requirements? </p>                
                        <div className="radio-container">
                            <div className="radio-group">
                                <input
                                    className="radio"
                                    type="radio"
                                    name="certificationISO11135"
                                    value="Yes"
                                    checked={values.certificationISO11135 === "Yes"}
                                    onChange={handleChange}
                                />
                                <label className="radio-label">Yes</label>
                            </div>
                            <div className="radio-group">
                                <input
                                    className="radio"
                                    type="radio"
                                    name="certificationISO11135"
                                    value="No"
                                    checked={values.certificationISO11135 === "No"}
                                    onChange={handleChange}
                                />
                                <label className="radio-label">No</label>
                            </div>
                            <div className="radio-group">
                                <input
                                     className="radio"
                                     type="radio"
                                    name="certificationISO11135"
                                    value="N/A"
                                    checked={values.certificationISO11135 === "N/A"}
                                    onChange={handleChange}
                                />
                                <label className="radio-label">N/A</label>
                            </div>
                        </div>
                    </div>

                    <div className="input-container">
                        <p className="input-header">For outside testing laboratories only: </p>
                        <p className="input-sub">2.  Do you have certification that you meet GLP and/or ISO 17025 requirements? </p>                
                        <div className="radio-container">
                            <div className="radio-group">
                                <input
                                    className="radio"
                                    type="radio"
                                    name="certificationISO17025"
                                    value="Yes"
                                    checked={values.certificationISO17025 === "Yes"}
                                    onChange={handleChange}
                                />
                                <label className="radio-label">Yes</label>
                            </div>
                            <div className="radio-group">
                                <input
                                    className="radio"
                                    type="radio"
                                    name="certificationISO17025"
                                    value="No"
                                    checked={values.certificationISO17025 === "No"}
                                    onChange={handleChange}
                                />
                                <label className="radio-label">No</label>
                            </div>
                            <div className="radio-group">
                                <input
                                     className="radio"
                                     type="radio"
                                    name="certificationISO17025"
                                    value="N/A"
                                    checked={values.certificationISO17025 === "N/A"}
                                    onChange={handleChange}
                                />
                                <label className="radio-label">N/A</label>
                            </div>
                        </div>
                    </div>

                    <div className="input-container">
                        <p className="input-header">Please answer all questions below.  Answer "N/A" if it doesn't apply: </p>
                        <p className="input-sub">3.  FDA registered? </p>                
                        <div className="radio-container">
                            <div className="radio-group">
                                <input
                                    className="radio"
                                    type="radio"
                                    name="fdaRegistered"
                                    value="Yes"
                                    checked={values.fdaRegistered === "Yes"}
                                    onChange={handleChange}
                                />
                                <label className="radio-label">Yes</label>
                            </div>
                            <div className="radio-group">
                                <input
                                    className="radio"
                                    type="radio"
                                    name="fdaRegistered"
                                    value="No"
                                    checked={values.fdaRegistered === "No"}
                                    onChange={handleChange}
                                />
                                <label className="radio-label">No</label>
                            </div>
                            <div className="radio-group">
                                <input
                                     className="radio"
                                     type="radio"
                                    name="fdaRegistered"
                                    value="N/A"
                                    checked={values.fdaRegistered === "N/A"}
                                    onChange={handleChange}
                                />
                                <label className="radio-label">N/A</label>
                            </div>
                        </div>
                        <p className="input-detail">FDA Registration Number: </p>
                        <input 
                            className="form-input-detail"
                            type="text"
                            name="fdaRegistrationNumber"
                            onChange={handleChange}
                            value={values.fdaRegistrationNumber}
                        />
                    </div>

                    <div className="input-container">
                        <p className="input-sub">4.  Date of last facility FDA inspection? </p>                
                        <input 
                            className="form-input-detail"
                            type="text"
                            name="dateLastFdaInspection"
                            onChange={handleChange}
                            value={values.dateLastFdaInspection}
                        />
                        <p className="input-detail">Form 483? </p>
                        <div className="radio-container">
                            <div className="radio-group">
                                <input
                                    className="radio"
                                    type="radio"
                                    name="certificationISO11135"
                                    value="Yes"
                                    checked={values.certificationISO11135 === "Yes"}
                                    onChange={handleChange}
                                />
                                <label className="radio-label">Yes</label>
                            </div>
                            <div className="radio-group">
                                <input
                                    className="radio"
                                    type="radio"
                                    name="certificationISO11135"
                                    value="No"
                                    checked={values.certificationISO11135 === "No"}
                                    onChange={handleChange}
                                />
                                <label className="radio-label">No</label>
                            </div>
                            <div className="radio-group">
                                <input
                                     className="radio"
                                     type="radio"
                                    name="certificationISO11135"
                                    value="N/A"
                                    checked={values.certificationISO11135 === "N/A"}
                                    onChange={handleChange}
                                />
                                <label className="radio-label">N/A</label>
                            </div>
                        </div>
                    </div>

                    <div className="input-container">
                        <p className="input-sub">5.  Documented quality system?</p>                
                        <div className="radio-container">
                            <div className="radio-group">
                                <input
                                    className="radio"
                                    type="radio"
                                    name="documentedQualitySystem"
                                    value="Yes"
                                    checked={values.documentedQualitySystem === "Yes"}
                                    onChange={handleChange}
                                />
                                <label className="radio-label">Yes</label>
                            </div>
                            <div className="radio-group">
                                <input
                                    className="radio"
                                    type="radio"
                                    name="documentedQualitySystem"
                                    value="No"
                                    checked={values.documentedQualitySystem === "No"}
                                    onChange={handleChange}
                                />
                                <label className="radio-label">No</label>
                            </div>
                            <div className="radio-group">
                                <input
                                     className="radio"
                                     type="radio"
                                    name="documentedQualitySystem"
                                    value="N/A"
                                    checked={values.documentedQualitySystem === "N/A"}
                                    onChange={handleChange}
                                />
                                <label className="radio-label">N/A</label>
                            </div>
                        </div>
                    </div>


                    <div className="input-container">
                        <p className="input-sub">6.  Is it based on ISO-13485 and/or FDA Quality System Regulation?</p>                
                        <div className="radio-container">
                            <div className="radio-group">
                                <input
                                    className="radio"
                                    type="radio"
                                    name="iso13485Based"
                                    value="Yes"
                                    checked={values.iso13485Based === "Yes"}
                                    onChange={handleChange}
                                />
                                <label className="radio-label">Yes</label>
                            </div>
                            <div className="radio-group">
                                <input
                                    className="radio"
                                    type="radio"
                                    name="iso13485Based"
                                    value="No"
                                    checked={values.iso13485Based === "No"}
                                    onChange={handleChange}
                                />
                                <label className="radio-label">No</label>
                            </div>
                            <div className="radio-group">
                                <input
                                     className="radio"
                                     type="radio"
                                    name="iso13485Based"
                                    value="N/A"
                                    checked={values.iso13485Based === "N/A"}
                                    onChange={handleChange}
                                />
                                <label className="radio-label">N/A</label>
                            </div>
                        </div>
                        <p className="input-sub">If yes, please send copy of Quality Manual.</p>                
                        
                    </div>

                    <div className="input-container">
                        <p className="input">7.  To whom (title) does Quality function report? </p>
                        <input 
                            className="form-input"
                            type="text"
                            name="qualityFunctionReportsTo"
                            onChange={handleChange}
                            value={values.qualityFunctionReportsTo}
                        />
                    </div>

                    <div className="input-container">
                        <p className="input">8.  Is Quality System certified to ISO Standards? </p>
                        <div className="radio-container">
                            <div className="radio-group">
                                <input
                                    className="radio"
                                    type="radio"
                                    name="qualitySystemISOCertified"
                                    value="Yes"
                                    checked={values.qualitySystemISOCertified === "Yes"}
                                    onChange={handleChange}
                                />
                                <label className="radio-label">Yes</label>
                            </div>
                            <div className="radio-group">
                                <input
                                    className="radio"
                                    type="radio"
                                    name="qualitySystemISOCertified"
                                    value="No"
                                    checked={values.qualitySystemISOCertified === "No"}
                                    onChange={handleChange}
                                />
                                <label className="radio-label">No</label>
                            </div>
                            <div className="radio-group">
                                <input
                                     className="radio"
                                     type="radio"
                                    name="qualitySystemISOCertified"
                                    value="N/A"
                                    checked={values.qualitySystemISOCertified === "N/A"}
                                    onChange={handleChange}
                                />
                                <label className="radio-label">N/A</label>
                            </div>
                        </div>
                        <p className="input-sub">Mark all that apply: </p> 
                        <div className="checkbox-container">              
                            <div className="radio-group">
                                <input
                                    className="radio"
                                    type="checkbox"
                                    name="iso13485Certified"
                                    value="N/A"
                                    checked={values.iso13485Certified}
                                    onChange={handleChange}
                                />
                                <label className="checkbox-label">ISO 13485</label>
                                <input
                                    className="radio"
                                    type="checkbox"
                                    name="iso9002Certified"
                                    value="N/A"
                                    checked={values.iso9002Certified}
                                    onChange={handleChange}
                                />
                                <label className="checkbox-label">ISO 9002</label>
                            </div>
                        </div> 
                        <p className="input-detail">Other: </p>
                        <input 
                            className="form-input-detail"
                            type="text"
                            name="otherISOCertified"
                            onChange={handleChange}
                            value={values.otherISOCertified}
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

export default ComplianceCredentials;