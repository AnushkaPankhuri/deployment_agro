import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FrontPage from './pages/FrontPage';
import LoginForm from './components/LoginForm';
import FarmerRegisterForm from './components/FarmerRegisterForm';
import MiddlemanRegisterForm from './components/MiddlemanRegisterForm';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<FrontPage />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<FarmerRegisterForm />} />

            </Routes>
        </Router>
    );
}

export default App;
