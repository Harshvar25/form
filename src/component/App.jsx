import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'
import "../styles/body.css";
import PersonalForm from './PersonalForm';
import Card from './Card';
import EduDetail from './EduDetail';
import WorkExp from './WorkExp';
import Result from './Result';
import { DataProvider } from '../ContextData';

function App() {
    return (
        <div className='app'>
            <DataProvider> {/* Wrap your entire application with DataProvider */}
                <Router>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/personaldetails' element={<Card form={<PersonalForm />} title='Personal Info.' />} />
                        <Route path='/educationaldetail' element={<Card form={<EduDetail />} title='Education Info.' />} />
                        <Route path='/workexp' element={<Card form={<WorkExp />} title='Work Exp.' />} />
                        <Route path='/result' element={<Result />} />
                    </Routes>
                </Router>
            </DataProvider>
        </div>
    )
}

export default App;
