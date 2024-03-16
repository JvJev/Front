// ImageCard.js
import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const ImageCard = ({ image, onFavorite }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Card
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ width: '18rem', margin: '10px' }}
    >
      <Card.Img variant="top" src={image.src.medium} />
      {isHovered && (
        <Card.Body>
          <Card.Title>{image.photographer}</Card.Title>
          <Card.Text>{image.photographer_url}</Card.Text>
          <Button variant="primary" onClick={() => onFavorite(image)}>
            Favorite
          </Button>
        </Card.Body>
      )}
    </Card>
  );
};

export default ImageCard;
