import React from 'react'
import './Sidebar.css'


const SideBar = ({show}) => {
    return (
       <div className={"sidebar "+ (show ? "show":"")}>
            <ul className="sidebar__links">
               <li><h3>Home</h3></li>
               <li><h3>About</h3></li>
               <li><h3>Portfolio</h3></li>
               <li><h3>Contact</h3></li>
            </ul>
        </div>
    )
}

export default SideBar
