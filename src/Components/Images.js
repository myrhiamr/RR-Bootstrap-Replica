import React from 'react';
import { Card } from 'react-bootstrap';

const BackgroundImageForm = () => {
  return (
    <Card className="bg-green text-white">
      <Card.Img src="path_to_instacart_background_image" alt="Background Image" />
      <Card.ImgOverlay>
        <Card.Title>Find Stores Near You</Card.Title>
        <Card.Text>
          Enter your address to start shopping at your favorite local stores.
        </Card.Text>
        <Card.Text>
          <input type="text" placeholder="Enter your address" />
          <button type="submit">Submit</button>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
};

export default BackgroundImageForm;
