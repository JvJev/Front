import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const ImageCard = ({ image }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Card
      className={`image-card ${isHovered ? 'hovered dimmed' : ''}`} // Add 'dimmed' class on hover
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Card.Img variant="top" src={image.src.medium} className="card-image" alt={image.alt} />
      <Card.Body
        className={`card-body text-center justify-content-center align-items-center ${
          isHovered ? 'visible' : 'invisible'
        }`} // Toggle visibility on hover
      >
        <Card.Title className="card-title">{image.photographer}</Card.Title>
        <Card.Text className="card-text">{image.photographer_url}</Card.Text>
        <Button variant="primary" className="favorite-button">
          Favorite
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ImageCard;

