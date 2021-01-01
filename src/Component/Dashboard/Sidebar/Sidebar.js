import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faSignOutAlt, faCalendar, faHome, faGripHorizontal, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';import "./sidebar.css"
import { Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
 
const Sidebar = () => {
//     const addDoctor = useHistory();
// const handleAddDoctor =()=>{
//   addDoctor.push('/addDoctor')
// }
    return (
        <div>
         <FontAwesomeIcon icon={faHome} />  <Link className="text-black" to="/addDoctor">Add Doctor</Link> <br/><br/>
        <FontAwesomeIcon icon={faCalendar} /> <Link className="text-black" to="/">Dashboard</Link> <br/><br/>
        <FontAwesomeIcon icon={faCog} /> <Link className="text-black" to="/">Appointments</Link> 
        </div>
    );
};

export default Sidebar;