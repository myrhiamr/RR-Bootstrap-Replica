import React from 'react';
import { Container } from 'react-bootstrap';
import CustomNavbar from './Components/Navbar';
import BackgroundImageForm from './Components/Images';
import StoreListings from './Components/StoreListing';

function App() {
  return (
    <div>
      <CustomNavbar />
      <Container>
        <BackgroundImageForm />
        <StoreListings />
      </Container>
    </div>
  );
}

export default App;
