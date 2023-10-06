import Navbar from './Navbar';
import HomePage from './pages/HomePage'; 
import ContentPage from './pages/ContentPage'; 
import AboutPage from './pages/AboutPage'; 
import Pokemon from './pages/pokemon';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/content" element={<ContentPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pokemon" element={<Pokemon />} />

        
      </Routes>
    <Footer /> {}
    </Router>
    
  );
}

export default App;