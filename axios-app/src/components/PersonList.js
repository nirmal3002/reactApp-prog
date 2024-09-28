import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PersonList.css';

const PersonList = () => {
    const [persons, setPersons] = useState([]);
    const [newPerson, setNewPerson] = useState({ name: '', age: '' });
    const [editingPerson, setEditingPerson] = useState(null);
    const [loading, setLoading] = useState(true);
  
    const fetchPersons = async () => {
        try {
          const response = await axios.get(API_URL);
          setPersons(response.data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching persons:', error);
          alert('Failed to fetch persons. Please try again.');
          setLoading(false);
        }
      };
    
    

const PersonList = () => {
    return (
        <div className="person-list">
            <h2>Person List</h2>
        </div>
    )
}
}
export default PersonList;