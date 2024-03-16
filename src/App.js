import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './Components/Header.js';
import ImageList from './Components/ImageList.js';
import Footer from './Components/Footer.js';
import axios from 'axios';

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
      setImages(response.data.photos);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
<h1>it works</h1>


      <Header />
      <ImageList images={images} />
      <Footer />
    </div>
  );
}

export default App;
