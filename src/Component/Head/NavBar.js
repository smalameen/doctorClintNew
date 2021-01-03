import React from "react";

const NavBar = () => {
  return (
    <nav style={{fontWeight:"700"}} class="navbar navbar-expand-lg navbar-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link mr-5" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-5" href="/appointment">Book An appointment</a>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-5" href="/dashboard/appointment">All Appointment</a>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-5" href="/addDoctor">Add Doctor</a>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-5" href="#">Blog</a>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-5" href="#">Contact with us</a>
      </li>
      
        <div/>
      
     
    </ul>
    
  </div>
</nav>
  );
};

export default NavBar;
