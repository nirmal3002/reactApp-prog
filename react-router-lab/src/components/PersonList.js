import React from 'react';
//import personadd from './PersonAdd"
import axios from 'axios';
//import notification from 
import '../styles/PersonList.css'

const API_URL=process.env.REACT_APP_API_URL
const output = axios.get("https://5000-nirmal3002-reactappprog-h48tp35w1ha.ws-us116.gitpod.io/persons");



const PersonList = () => {
  console.log(output);
  console.log(API_URL)

    return(
        <div className='person-list'>
            <h2>to add list of  the person</h2>
        </div>
    )

}
export default PersonList;