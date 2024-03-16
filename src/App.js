import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Changed from Route to Routes
import MainPage from './Pages/MainPage';
import FavoritePhotos from './Pages/FavoritePhotos';

function App() {
  return (
    <Router>
      <Routes> {/* Changed from Route to Routes */}
        <Route exact path="/" element={<MainPage />} /> {/* Updated syntax for Route */}
        <Route path="/favorite-photos" element={<FavoritePhotos />} /> {/* Updated syntax for Route */}
      </Routes> {/* Changed from Route to Routes */}
    </Router>
  );
}

export default App;
