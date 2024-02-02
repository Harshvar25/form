import React from 'react';
import "../styles/sidebar.css";

function Sidebar(props) {
    const { title } = props;

    return (
        <div className='sidebar'>
            <h1>logo</h1>
            <div className='sidebarBtn'>
                <button className={title === "Home" ? "active" : ""}>Home</button>
                <button className={title === "Personal Info." ? "active" : ""}>Personal Info.</button>
                <button className={title === "Education Info." ? "active" : ""}>Education Info.</button>
                <button className={title === "Work Exp." ? "active" : ""}>Work Exp.</button>
                <button className={title === "Result" ? "active" : ""}>Result</button>
            </div>
        </div>
    )
}

export default Sidebar;
