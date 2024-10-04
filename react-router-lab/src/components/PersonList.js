import React from 'react';
//import personadd from './PersonAdd"
import axios from 'axios';
//import notification from 
const API_URL=process.env.REACT_APP_API_URL
const output = axios.get("https://5000-nirmal3002-reactappprog-7weh1j1hhhz.ws-us116.gitpod.io/persons");


const PersonList = () => {
  console.log(output);
  console.log(API_URL)

    return(
        <div>
            <h2>to add list of  the person</h2>
        </div>
    )

}
export default PersonList;