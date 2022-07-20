import React from 'react'
import './Sidebar.css';


const Sidebar =() => {
    return (
      <div className='bg-sidebar'>
        <div className='logo-sidebar'></div>
        <div >
        <ul className='navigate-sidebar'>
          <button  className='sidebar-button'><li>Realtime</li></button>
          <button className='sidebar-button'><li>Results</li></button>
          <button className='sidebar-button'><li>Settings</li></button>
          <button className='sidebar-button'><li>Credit</li></button>
         
        </ul>
        </div>
        <div className='year-sidebar'>
          2022
        </div>
      </div>
    );
  }
  
  export default Sidebar;