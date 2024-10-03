import React from 'react';
import axios from 'axios';

const notification = () => {
  const output = axios.get("https://5000-nirmal3002-reactappprog-vyjlelb5oj6.ws-us116.gitpod.io/persons");
  console.log(output);
  
  const API_URL=process.env.REACT_APP_API_URL
  console.log(API_URL);

 return (
        <div>
        <h2>this is the notification page</h2>
        </div>
      );
    };
    
    export default notification;