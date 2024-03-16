// ImageList.js
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = ({ images, onFavorite }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {images.map((image) => (
        <ImageCard key={image.id} image={image} onFavorite={onFavorite} />
      ))}
    </div>
  );
};

export default ImageList;
