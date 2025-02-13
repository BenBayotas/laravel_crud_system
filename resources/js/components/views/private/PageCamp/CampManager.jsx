import { useState, useEffect } from 'react';
import axios from 'axios';

export const GetCamp = () => {
    const [camp, setCamp] = useState([]);
    const [error, setError] = useState(null); 
  
    useEffect(() => {
      const fetchCamp = async () => {
          const response = await axios.get('/api/camp');
          setCamp(response.data.camp || []);
        };

        fetchCamp().catch((error) => {
          setError(error.message);
        });

    }, []);
    
    return { camp, error };
};

export const AddCamp = async (campData) => {
    try {
      const response = await axios.post('/api/camp', {
        name: campData.name,
        location: campData.location,
        ratings: campData.ratings,
      });
  
      console.log('New Entry Added: ', response.data);
    } catch (error) {
      console.error('Error Adding New Campsite:', error.response?.data || error.message);
    }
};

export const PutCamp = async (campId, campData) => {
    try {
      const response = await axios.put(`/api/camp/${campId}`, campData, {
        headers: { 'Content-Type': 'application/json' }
      });
      return response.data;
    } catch (error) {
      console.error('Error updating selected entry:', error);
      throw error;
    }
  };


export const DeleteCamp = async (campId) => {
    try {
      await axios.delete(`/api/camp/${campId}`);
      window.location.reload();
    } catch (error) {
      console.error('Error Deleting Entry: ', error);
      throw error;
    }
};

export const restoreUser = async() => {
  

} 

