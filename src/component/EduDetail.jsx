import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useData } from '../ContextData';

import "../styles/eduDetail.css";
function EduDetail() {
  const navigate = useNavigate();
  const { setEduFormData } = useData();

  const [formData, setFormData] = useState({
    qualification: '',
    SchoolNameIn10th: '',
    '10thGrade': '',
    SchoolNameIn12th: '',
    '12thGrade': '',
    College: '',
    collegeGrade: ''
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
    setEduFormData(formData); 
    navigate("/workExp");
  };

  return (
    <div className='eduForm'>
      <form onSubmit={handleSubmit}>
        <input type='text' name='qualification' placeholder='Highest Qualification' value={formData.qualification} onChange={handleInputChange} />
        <div className='edu'>
          <input type='text' name='SchoolNameIn10th' placeholder='Enter School Name' value={formData.SchoolNameIn10th} onChange={handleInputChange} />
          <input type='text' name='10thGrade' placeholder='Grade in 10th standard' value={formData['10thGrade']} onChange={handleInputChange} />
        </div>
        <div className='edu'>
          <input type='text' name='SchoolNameIn12th' placeholder='Enter School Name' value={formData.SchoolNameIn12th} onChange={handleInputChange} />
          <input type='text' name='12thGrade' placeholder='Grade in 12th standard' value={formData['12thGrade']} onChange={handleInputChange} />
        </div>
        <div className='edu'>
          <input type='text' name='College' placeholder='Enter Institution Name' value={formData.College} onChange={handleInputChange} />
          <input type='text' name='collegeGrade' placeholder='Enter CGPA' value={formData.collegeGrade} onChange={handleInputChange} />
        </div>
        <input id='submit' type='submit' value='Next'/>
      </form>
    </div>
  );
}

export default EduDetail;
