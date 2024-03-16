import React, { useState, useEffect } from 'react';

function FavoritePhotos() {
  const [favoritePhotos, setFavoritePhotos] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favoritePhotos')) || {};
    setFavoritePhotos(Object.keys(savedFavorites));
  }, []);

  const [favoritePhotoDetails, setFavoritePhotoDetails] = useState([]);

  useEffect(() => {
    const fetchFavoritePhotoDetails = async () => {
      const photoDetailsPromises = favoritePhotos.map(async (photoId) => {
        const response = await fetch(`https://api.pexels.com/v1/photos/${photoId}`, {
          headers: {
            Authorization: 'iRjeI3Mfqu4xP2BcMZxJQY0DNYiRO32Ri2ptb5GdvhQoOTuYNMJICWnB',
          },
        });
        const data = await response.json();
        return data;
      });

      const photoDetails = await Promise.all(photoDetailsPromises);
      setFavoritePhotoDetails(photoDetails);
    };

    fetchFavoritePhotoDetails();
  }, [favoritePhotos]);

  return (
    <div className="favorite-photos">
      <h1>Favorite Photos</h1>
      <div className="image-grid">
        {favoritePhotoDetails.map((photo) => (
          <div key={photo.id}>
            <img src={photo.src.medium} alt={photo.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavoritePhotos;
