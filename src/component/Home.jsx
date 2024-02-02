import React from 'react'
import "../styles/home.css"
import Sidebar from './Sidebar'
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    function handleClick(){
        return navigate("/personaldetails");
    }
    return (
        <div className='home'>
        <Sidebar />
            <div className='homeContainer'>
                <h1>Title</h1>
                <p>This is a Normal Step Form Website.After the submission of the form the details will be transfered to the owner of the website.</p>
                <p><span className='instructions'>Instructions : </span>
                    <ul>
                        <li>You can only move to the next step if and only if you have submitted the current form.</li>
                        <li>Once you click on submit the details can not be edited again.</li>
                        <li>At the last form when you click on Finish button the details will be sent to the owner of the website via mail.</li>
                    </ul>
                 </p>
                 <button onClick={handleClick}>Get Started</button>
            </div>

        </div>
    );
}

export default Home