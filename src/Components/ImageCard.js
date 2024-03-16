import React, { useState } from 'react';
import './ImageCard.css';

const ImageCard = ({ image }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`image-card ${isHovered ? 'hovered dimmed' : ''}`} // Add 'dimmed' class on hover
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={image.src.medium} className="card-image" alt={image.alt} />
      <div
        className={`card-body text-center justify-content-center align-items-center ${
          isHovered ? 'visible' : 'invisible'
        }`} // Toggle visibility on hover
      >
        <div className="card-title">{image.photographer}</div>
        <hr className="divider" /> {/* Add a horizontal line here */}

        <div className="card-text">{image.alt}</div>
        <button className="favorite-button">
          Favorite
        </button>
      </div>
    </div>
  );
};

export default ImageCard;
