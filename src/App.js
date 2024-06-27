import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './componentes/Footer/Footer';
import Header from './componentes/Header/Header';
import Home from './componentes/Home/Home';
import About from './componentes/About/About';
import Aquarela from './componentes/Aquarela/Aquarela';
import Grafite from './componentes/Grafite/Grafite';
import Tela from './componentes/Tela/Tela';
import Disponivel from './componentes/Disponiveis/Disponivel';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

function App() {
    return (
        <div id="app">
            <BrowserRouter>
                <Header />
                <div id='main'>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/aquarela" element={<Aquarela />} />
                        <Route path="/grafite" element={<Grafite />} />
                        <Route path="/tela" element={<Tela />} /> 
                        <Route path="/disponiveis" element={<Disponivel />} /> 
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;