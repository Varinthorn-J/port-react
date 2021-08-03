 import React, { Component } from 'react'
 import Widecard from '../components/Widecard';

 class Education extends Component {
     render() {
         return(
             <div className="condiv">
                 <h1 className="subtopic">My Education</h1>
                 <Widecard title="Computer Engineering" where="Sonkla University" from="2021" to="Present" />
                 <Widecard title="MilerDev" where="Miler High School" from="2019" to="2022" />
             </div>
         );
     }
 }
 
 export default Education;