// App.js
import React, { useState, useEffect, useRef } from 'react';
import ImageList from './Components/ImageList';
import './App.css';

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1); // Track current page
  const [loading, setLoading] = useState(false);
  const observer = useRef();

  useEffect(() => {
    fetchData();

    // Cleanup the observer on unmount
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.pexels.com/v1/curated?page=${page}`, {
        headers: {
          Authorization: 'iRjeI3Mfqu4xP2BcMZxJQY0DNYiRO32Ri2ptb5GdvhQoOTuYNMJICWnB',
        },
      });
      const data = await response.json();
      // Filter out images with empty "alt" attribute
      const filteredImages = data.photos.filter(photo => photo.alt.trim() !== '');
      setImages((prevImages) => [...prevImages, ...filteredImages]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const lastImageRef = useRef();

  const handleObserver = (entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      fetchData();
    }
  };

  useEffect(() => {
    if (loading) return;

    observer.current = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    });

    if (lastImageRef.current) {
      observer.current.observe(lastImageRef.current);
    }
  }, [loading]);

  return (
    <div className='mainPage'>
      <ImageList images={images} />
      <div ref={lastImageRef}></div> {/* Observer target */}
    </div>
  );
}

export default App;
