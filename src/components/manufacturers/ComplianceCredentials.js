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
        qualityAssuranceFunction: '',
        reviewContractsWithCustomers: '',
        documentChangeControlProcedure: '',
        maintainCustomerComplaintFiles: '',
        nonconformingMaterialSystem: '',
        correctiveActionSystem: '',
        qualifyVendors: '',
        documentInspectionProcedures: '',
        calibrationSystem: '',
        documentedTraining: '',
        shippingAndHandlingProcedure: '',

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
                        <p className="input-header">Please answer all the following questions.  Answer "N/A" if it doesn't apply: </p>
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
                                    name="form483"
                                    value="Yes"
                                    checked={values.form483 === "Yes"}
                                    onChange={handleChange}
                                />
                                <label className="radio-label">Yes</label>
                            </div>
                            <div className="radio-group">
                                <input
                                    className="radio"
                                    type="radio"
                                    name="form483"
                                    value="No"
                                    checked={values.form483 === "No"}
                                    onChange={handleChange}
                                />
                                <label className="radio-label">No</label>
                            </div>
                            <div className="radio-group">
                                <input
                                     className="radio"
                                     type="radio"
                                    name="form483"
                                    value="N/A"
                                    checked={values.form483 === "N/A"}
                                    onChange={handleChange}
                                />
                                <label className="radio-label">N/A</label>
                            </div>
                        </div>
                    </div>

                    <div className="input-container">
                        <p className="input-sub">5.  Do you have a documented quality system?</p>                
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
                        <p className="input-detail"><br /></p>
                        <p className="input-detail">If yes, please send copy of Quality Manual.</p>                
                        
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
                        <p className="input-detail">Mark all that apply: </p> 
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
                        <p className="input-detail"><br /></p>
                        <p className="input-detail">Date of last ISO audit </p> 
                        <input 
                            className="form-input-detail"
                            type="text"
                            name="dateLastIsoAudit"
                            onChange={handleChange}
                            value={values.dateLastIsoAudit}
                        />

                        <p className="input-detail"><br /></p>
                        <p className="input-detail">if yes, please send copy of certifications and organization chart. </p> 
                    </div>
                    {values.qualitySystemISOCertified !== 'Yes'
                    ? <>
                        <div className="input-container">
                            <p className="input-sub">9.  Do you have a Quality Assurance function?</p>                
                            <div className="radio-container">
                                <div className="radio-group">
                                    <input
                                        className="radio"
                                        type="radio"
                                        name="qualityAssuranceFunction"
                                        value="Yes"
                                        checked={values.qualityAssuranceFunction === "Yes"}
                                        onChange={handleChange}
                                    />
                                    <label className="radio-label">Yes</label>
                                </div>
                                <div className="radio-group">
                                    <input
                                        className="radio"
                                        type="radio"
                                        name="qualityAssuranceFunction"
                                        value="No"
                                        checked={values.qualityAssuranceFunction === "No"}
                                        onChange={handleChange}
                                    />
                                    <label className="radio-label">No</label>
                                </div>
                                <div className="radio-group">
                                    <input
                                        className="radio"
                                        type="radio"
                                        name="qualityAssuranceFunction"
                                        value="N/A"
                                        checked={values.qualityAssuranceFunction === "N/A"}
                                        onChange={handleChange}
                                    />
                                    <label className="radio-label">N/A</label>
                                </div>
                            </div>
                        </div>

                        <div className="input-container">
                            <p className="input-sub">10.  Do you review all contracts with customers before acceptance?</p>                
                            <div className="radio-container">
                                <div className="radio-group">
                                    <input
                                        className="radio"
                                        type="radio"
                                        name="reviewContractsWithCustomers"
                                        value="Yes"
                                        checked={values.reviewContractsWithCustomers === "Yes"}
                                        onChange={handleChange}
                                    />
                                    <label className="radio-label">Yes</label>
                                </div>
                                <div className="radio-group">
                                    <input
                                        className="radio"
                                        type="radio"
                                        name="reviewContractsWithCustomers"
                                        value="No"
                                        checked={values.reviewContractsWithCustomers === "No"}
                                        onChange={handleChange}
                                    />
                                    <label className="radio-label">No</label>
                                </div>
                                <div className="radio-group">
                                    <input
                                        className="radio"
                                        type="radio"
                                        name="reviewContractsWithCustomers"
                                        value="N/A"
                                        checked={values.reviewContractsWithCustomers === "N/A"}
                                        onChange={handleChange}
                                    />
                                    <label className="radio-label">N/A</label>
                                </div>
                            </div>
                        </div>

                        <div className="input-container">
                            <p className="input-sub">11.  Do you have a document change control procedure?</p>                
                            <div className="radio-container">
                                <div className="radio-group">
                                    <input
                                        className="radio"
                                        type="radio"
                                        name="documentChangeControlProcedure"
                                        value="Yes"
                                        checked={values.documentChangeControlProcedure === "Yes"}
                                        onChange={handleChange}
                                    />
                                    <label className="radio-label">Yes</label>
                                </div>
                                <div className="radio-group">
                                    <input
                                        className="radio"
                                        type="radio"
                                        name="documentChangeControlProcedure"
                                        value="No"
                                        checked={values.documentChangeControlProcedure === "No"}
                                        onChange={handleChange}
                                    />
                                    <label className="radio-label">No</label>
                                </div>
                                <div className="radio-group">
                                    <input
                                        className="radio"
                                        type="radio"
                                        name="documentChangeControlProcedure"
                                        value="N/A"
                                        checked={values.documentChangeControlProcedure === "N/A"}
                                        onChange={handleChange}
                                    />
                                    <label className="radio-label">N/A</label>
                                </div>
                            </div>
                        </div>

                        <div className="input-container">
                            <p className="input-sub">12.  Do you maintain customer complaint files?</p>                
                            <div className="radio-container">
                                <div className="radio-group">
                                    <input
                                        className="radio"
                                        type="radio"
                                        name="maintainCustomerComplaintFiles"
                                        value="Yes"
                                        checked={values.maintainCustomerComplaintFiles === "Yes"}
                                        onChange={handleChange}
                                    />
                                    <label className="radio-label">Yes</label>
                                </div>
                                <div className="radio-group">
                                    <input
                                        className="radio"
                                        type="radio"
                                        name="maintainCustomerComplaintFiles"
                                        value="No"
                                        checked={values.maintainCustomerComplaintFiles === "No"}
                                        onChange={handleChange}
                                    />
                                    <label className="radio-label">No</label>
                                </div>
                                <div className="radio-group">
                                    <input
                                        className="radio"
                                        type="radio"
                                        name="maintainCustomerComplaintFiles"
                                        value="N/A"
                                        checked={values.maintainCustomerComplaintFiles === "N/A"}
                                        onChange={handleChange}
                                    />
                                    <label className="radio-label">N/A</label>
                                </div>
                            </div>
                        </div>

                        <div className="input-container">
                            <p className="input-sub">13.  Do you have a system for handling non-conforming material?</p>                
                            <div className="radio-container">
                                <div className="radio-group">
                                    <input
                                        className="radio"
                                        type="radio"
                                        name="nonconformingMaterialSystem"
                                        value="Yes"
                                        checked={values.nonconformingMaterialSystem === "Yes"}
                                        onChange={handleChange}
                                    />
                                    <label className="radio-label">Yes</label>
                                </div>
                                <div className="radio-group">
                                    <input
                                        className="radio"
                                        type="radio"
                                        name="nonconformingMaterialSystem"
                                        value="No"
                                        checked={values.nonconformingMaterialSystem === "No"}
                                        onChange={handleChange}
                                    />
                                    <label className="radio-label">No</label>
                                </div>
                                <div className="radio-group">
                                    <input
                                        className="radio"
                                        type="radio"
                                        name="nonconformingMaterialSystem"
                                        value="N/A"
                                        checked={values.nonconformingMaterialSystem === "N/A"}
                                        onChange={handleChange}
                                    />
                                    <label className="radio-label">N/A</label>
                                </div>
                            </div>
                        </div>

                        <div className="input-container">
                            <p className="input-sub">14.  Do you have a system for implementing corrective action?</p>                
                            <div className="radio-container">
                                <div className="radio-group">
                                    <input
                                        className="radio"
                                        type="radio"
                                        name="correctiveActionSystem"
                                        value="Yes"
                                        checked={values.correctiveActionSystem === "Yes"}
                                        onChange={handleChange}
                                    />
                                    <label className="radio-label">Yes</label>
                                </div>
                                <div className="radio-group">
                                    <input
                                        className="radio"
                                        type="radio"
                                        name="correctiveActionSystem"
                                        value="No"
                                        checked={values.correctiveActionSystem === "No"}
                                        onChange={handleChange}
                                    />
                                    <label className="radio-label">No</label>
                                </div>
                                <div className="radio-group">
                                    <input
                                        className="radio"
                                        type="radio"
                                        name="correctiveActionSystem"
                                        value="N/A"
                                        checked={values.correctiveActionSystem === "N/A"}
                                        onChange={handleChange}
                                    />
                                    <label className="radio-label">N/A</label>
                                </div>
                            </div>
                        </div>

                        <div className="input-container">
                            <p className="input-sub">15.  Do you qualify your vendors?</p>                
                            <div className="radio-container">
                                <div className="radio-group">
                                    <input
                                        className="radio"
                                        type="radio"
                                        name="qualifyVendors"
                                        value="Yes"
                                        checked={values.qualifyVendors === "Yes"}
                                        onChange={handleChange}
                                    />
                                    <label className="radio-label">Yes</label>
                                </div>
                                <div className="radio-group">
                                    <input
                                        className="radio"
                                        type="radio"
                                        name="qualifyVendors"
                                        value="No"
                                        checked={values.qualifyVendors === "No"}
                                        onChange={handleChange}
                                    />
                                    <label className="radio-label">No</label>
                                </div>
                                <div className="radio-group">
                                    <input
                                        className="radio"
                                        type="radio"
                                        name="qualifyVendors"
                                        value="N/A"
                                        checked={values.qualifyVendors === "N/A"}
                                        onChange={handleChange}
                                    />
                                    <label className="radio-label">N/A</label>
                                </div>
                            </div>
                        </div>

                        <div className="input-container">
                            <p className="input-sub">16.  Do you have documented inspection procedures?</p>                
                            <div className="radio-container">
                                <div className="radio-group">
                                    <input
                                        className="radio"
                                        type="radio"
                                        name="documentInspectionProcedures"
                                        value="Yes"
                                        checked={values.documentInspectionProcedures === "Yes"}
                                        onChange={handleChange}
                                    />
                                    <label className="radio-label">Yes</label>
                                </div>
                                <div className="radio-group">
                                    <input
                                        className="radio"
                                        type="radio"
                                        name="documentInspectionProcedures"
                                        value="No"
                                        checked={values.documentInspectionProcedures === "No"}
                                        onChange={handleChange}
                                    />
                                    <label className="radio-label">No</label>
                                </div>
                                <div className="radio-group">
                                    <input
                                        className="radio"
                                        type="radio"
                                        name="documentInspectionProcedures"
                                        value="N/A"
                                        checked={values.documentInspectionProcedures === "N/A"}
                                        onChange={handleChange}
                                    />
                                    <label className="radio-label">N/A</label>
                                </div>
                            </div>
                        </div>

                        <div className="input-container">
                            <p className="input-sub">17.  Do you have a calibration system?</p>                
                            <div className="radio-container">
                                <div className="radio-group">
                                    <input
                                        className="radio"
                                        type="radio"
                                        name="calibrationSystem"
                                        value="Yes"
                                        checked={values.calibrationSystem === "Yes"}
                                        onChange={handleChange}
                                    />
                                    <label className="radio-label">Yes</label>
                                </div>
                                <div className="radio-group">
                                    <input
                                        className="radio"
                                        type="radio"
                                        name="calibrationSystem"
                                        value="No"
                                        checked={values.calibrationSystem === "No"}
                                        onChange={handleChange}
                                    />
                                    <label className="radio-label">No</label>
                                </div>
                                <div className="radio-group">
                                    <input
                                        className="radio"
                                        type="radio"
                                        name="calibrationSystem"
                                        value="N/A"
                                        checked={values.calibrationSystem === "N/A"}
                                        onChange={handleChange}
                                    />
                                    <label className="radio-label">N/A</label>
                                </div>
                            </div>
                        </div>

                        <div className="input-container">
                            <p className="input-sub">18.  Do you have a documented training program?</p>                
                            <div className="radio-container">
                                <div className="radio-group">
                                    <input
                                        className="radio"
                                        type="radio"
                                        name="documentedTraining"
                                        value="Yes"
                                        checked={values.documentedTraining === "Yes"}
                                        onChange={handleChange}
                                    />
                                    <label className="radio-label">Yes</label>
                                </div>
                                <div className="radio-group">
                                    <input
                                        className="radio"
                                        type="radio"
                                        name="documentedTraining"
                                        value="No"
                                        checked={values.documentedTraining === "No"}
                                        onChange={handleChange}
                                    />
                                    <label className="radio-label">No</label>
                                </div>
                                <div className="radio-group">
                                    <input
                                        className="radio"
                                        type="radio"
                                        name="documentedTraining"
                                        value="N/A"
                                        checked={values.documentedTraining === "N/A"}
                                        onChange={handleChange}
                                    />
                                    <label className="radio-label">N/A</label>
                                </div>
                            </div>
                        </div>

                        <div className="input-container">
                            <p className="input-sub">19.  Do you have procedures for Shipping and Handling?</p>                
                            <div className="radio-container">
                                <div className="radio-group">
                                    <input
                                        className="radio"
                                        type="radio"
                                        name="shippingAndHandlingProcedure"
                                        value="Yes"
                                        checked={values.shippingAndHandlingProcedure === "Yes"}
                                        onChange={handleChange}
                                    />
                                    <label className="radio-label">Yes</label>
                                </div>
                                <div className="radio-group">
                                    <input
                                        className="radio"
                                        type="radio"
                                        name="shippingAndHandlingProcedure"
                                        value="No"
                                        checked={values.shippingAndHandlingProcedure === "No"}
                                        onChange={handleChange}
                                    />
                                    <label className="radio-label">No</label>
                                </div>
                                <div className="radio-group">
                                    <input
                                        className="radio"
                                        type="radio"
                                        name="shippingAndHandlingProcedure"
                                        value="N/A"
                                        checked={values.shippingAndHandlingProcedure === "N/A"}
                                        onChange={handleChange}
                                    />
                                    <label className="radio-label">N/A</label>
                                </div>
                            </div>
                        </div>
                    </>
                    : 
                    <>
                    </>

                    
                    }

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