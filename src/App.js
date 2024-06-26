import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './componentes/Footer/Footer';
import './componentes/Footer/Footer.css'
import Header from './componentes/Header/Header';
import Home from './componentes/Home/Home';
import About from './componentes/About/About';
import Aquarela from './componentes/Aquarela/Aquarela';
import Grafite from './componentes/Grafite/Grafite';
import Tela from './componentes/Tela/Tela';
import Disponivel from './componentes/Disponiveis/Disponivel';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/aquarela" element={<Aquarela />} />
                <Route path="/grafite" element={<Grafite />} />
                <Route path="/tela" element={<Tela />} />
                <Route path="/disponiveis" element={<Disponivel />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;