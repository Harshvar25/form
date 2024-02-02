import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useData } from '../ContextData';

import "../styles/personalForm.css";

function PersonalForm() {
    const navigate = useNavigate();
    const { setPersonalFormData } = useData();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        date: '',
        gender: '',
        email: '',
        address: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData); 
        setPersonalFormData(formData); 
        navigate("/educationaldetail");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div id='name-form'>
                    <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleInputChange} required />
                    <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleInputChange} required />
                </div>
                <input type="tel" name="phoneNumber" placeholder="Phone" value={formData.phoneNumber} onChange={handleInputChange} required />
                <input type="date" name="date" placeholder="Date" value={formData.date} onChange={handleInputChange} required />
                <div className='gender-radio'>
                    <label>Gender: </label>
                    <input type="radio" id="male" name="gender" value="male" onChange={handleInputChange} required />
                    <label htmlFor="male">Male</label>

                    <input type="radio" id="female" name="gender" value="female" onChange={handleInputChange} required />
                    <label htmlFor="female">Female</label>

                    <input type="radio" id="others" name="gender" value="others" onChange={handleInputChange} required />
                    <label htmlFor="others">Others</label>
                </div>
                <input type='email' name='email' placeholder='Personal Email' value={formData.email} onChange={handleInputChange} required />
                <input type='text' name='address' placeholder='Address' value={formData.address} onChange={handleInputChange} required />
                <input id='submit' type='submit' value='Next' />
            </form>
        </div>
    );
}

export default PersonalForm;
