import React from 'react';
import { useData } from '../ContextData';
import "../styles/result.css";

function Result() {
    const { personalFormData, eduFormData, workExpFormData } = useData(); // Access shared data
    return (
        <div id='parentContainer'>
            <div className='container'>
                        <h2>Result</h2>
                <div className='subContainer'>
                    <div className='resultCard'>
                        <h3>Personal Details</h3>
                        <p>First Name: {personalFormData.firstName}</p>
                        <p>Last Name: {personalFormData.lastName}</p>
                        <p>Phone Number: {personalFormData.phoneNumber}</p>
                        <p>Date: {personalFormData.date}</p>
                        <p>Gender: {personalFormData.gender}</p>
                        <p>Email: {personalFormData.email}</p>
                        <p>Address: {personalFormData.address}</p>
                    </div>

                    <div className='resultCard'>
                        <h3>Educational Details</h3>
                        <p>Qualification: {eduFormData.qualification}</p>
                        <p>School Name in 10th: {eduFormData.SchoolNameIn10th}</p>
                        <p>Grade in 10th: {eduFormData['10thGrade']}</p>
                        <p>School Name in 12th: {eduFormData.SchoolNameIn12th}</p>
                        <p>Grade in 12th: {eduFormData['12thGrade']}</p>
                        <p>College: {eduFormData.College}</p>
                        <p>College Grade: {eduFormData.collegeGrade}</p>
                    </div>
                </div>

                <div className='subContainer'>
                    <div className='resultCard'>
                        <h3>Work Experience</h3>
                        <p>Company Name: {workExpFormData.companyName}</p>
                        <p>Position: {workExpFormData.position}</p>
                        <p>Years: {workExpFormData.years}</p>
                        <p>Certificate Link: {workExpFormData.certificate}</p>
                        <p>Address: {workExpFormData.address}</p>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default Result;
