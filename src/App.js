import React, { useState, useEffect } from 'react';
import ImageList from './Components/ImageList';
import axios from 'axios';
import './App.css';  // Only import necessary CSS file

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.pexels.com/v1/curated', {
        headers: {
          Authorization: 'iRjeI3Mfqu4xP2BcMZxJQY0DNYiRO32Ri2ptb5GdvhQoOTuYNMJICWnB',
        },
      });
      setImages(response.data.photos.slice(0, 9));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className='mainPage'>
      <ImageList images={images} />
    </div>
  );
}

export default App;
