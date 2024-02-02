import React, { createContext, useState, useContext } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [personalFormData, setPersonalFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        date: '',
        gender: '',
        email: '',
        address: ''
    });

    const [eduFormData, setEduFormData] = useState({
        qualification: '',
        SchoolNameIn10th: '',
        '10thGrade': '',
        SchoolNameIn12th: '',
        '12thGrade': '',
        College: '',
        collegeGrade: ''
    });

    const [workExpFormData, setWorkExpFormData] = useState({
        companyName: '',
        position: '',
        years: '',
        certificate: '',
        address: ''
    });


    return (
        <DataContext.Provider value={{ 
            personalFormData, setPersonalFormData, 
            eduFormData, setEduFormData, 
            workExpFormData, setWorkExpFormData
        }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext);
