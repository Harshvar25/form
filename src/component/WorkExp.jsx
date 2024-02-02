import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useData } from '../ContextData';
import "../styles/workExp.css";

function WorkExp() {
    const navigate = useNavigate();
    const { setWorkExpFormData } = useData();


    const [formData, setFormData] = useState({
        companyName: '',
        position: '',
        years: '',
        certificate: '',
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
        setWorkExpFormData(formData);
        navigate("/result");
    };

    const handleNoExpClick = () => {
        navigate("/result");
    };

    return (
        <div className='workExp'>
            <form onSubmit={handleSubmit}>
                <input type="text" name="companyName" placeholder="Enter the name of the Organization" value={formData.companyName} onChange={handleInputChange} />
                <input type="text" name="position" placeholder="Position" value={formData.position} onChange={handleInputChange} />
                <input type="number" name="years" placeholder="Years" value={formData.years} onChange={handleInputChange} />
                <input type='text' name='certificate' placeholder='Certificate Link' value={formData.certificate} onChange={handleInputChange} />
                <input type='text' name='address' placeholder='Address' value={formData.address} onChange={handleInputChange} />
                <input id='submit' type='submit' value='Next'/>
            </form>
        </div>
    );
}

export default WorkExp;
