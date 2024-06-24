import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './componentes/Footer/Footer';
import Header from './componentes/Header/Header';
import Home from './componentes/Home/Home';
import About from './componentes/About/About';
import Aquarela from './componentes/Aquarela/Aquarela';
import Grafite from './componentes/Grafite/Grafite';
import Tela from './componentes/Tela/Tela';

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
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
