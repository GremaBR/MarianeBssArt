import Disponivel1 from '../../img/arte-disponivel1.png';
import Disponivel2 from '../../img/arte-disponivel2.png';
import Disponivel3 from '../../img/arte-disponivel3.png';
import Disponivel4 from '../../img/arte-disponivel4.png';
import Disponivel5 from '../../img/arte-disponivel5.png';
import Disponivel6 from '../../img/arte-disponivel6.png';
import Disponivel7 from '../../img/arte-disponivel7.png';
import Disponivel8 from '../../img/arte-disponivel8.png';
import Disponivel9 from '../../img/arte-disponivel9.png';
import Disponivel10 from '../../img/arte-disponivel10.png';
import './Disponivel.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useState } from 'react';

const artes = [
    {
        src: Disponivel1,
        titulo: 'Nature',
        descricao: 'Mariane Basseggio traz reflexões sobre momentos de vida de maneira cativante construindo pinceladas de encher os olhos com suas cores e movimentos.',
        largura: 'Largura: 40cm',
        altura: 'Altura: 38cm',
        dimensao: 'Dimensão: 3cm',
    },
    {
        src: Disponivel2,
        titulo: 'Título',
        descricao: 'Descrição',
        largura: 'Largura: 40cm',
        altura: 'Altura: 38cm',
        dimensao: 'Dimensão: 3cm',
    },
    {
        src: Disponivel3,
        titulo: 'Título',
        descricao: 'Descrição',
        largura: 'Largura: 40cm',
        altura: 'Altura: 38cm',
        dimensao: 'Dimensão: 3cm',
    },
    {
        src: Disponivel4,
        titulo: 'Título',
        descricao: 'Descrição',
        largura: 'Largura: 40cm',
        altura: 'Altura: 38cm',
        dimensao: 'Dimensão: 3cm',
    },
    {
        src: Disponivel5,
        titulo: 'Título',
        descricao: 'Descrição',
        largura: 'Largura: 40cm',
        altura: 'Altura: 38cm',
        dimensao: 'Dimensão: 3cm',
    },
    {
        src: Disponivel6,
        titulo: 'Título',
        descricao: 'Descrição',
        largura: 'Largura: 40cm',
        altura: 'Altura: 38cm',
        dimensao: 'Dimensão: 3cm',
    },
    {
        src: Disponivel7,
        titulo: 'Título',
        descricao: 'Descrição',
        largura: 'Largura: 40cm',
        altura: 'Altura: 38cm',
        dimensao: 'Dimensão: 3cm',
    },
    {
        src: Disponivel8,
        titulo: 'Título',
        descricao: 'Descrição',
        largura: 'Largura: 40cm',
        altura: 'Altura: 38cm',
        dimensao: 'Dimensão: 3cm',
    },
    {
        src: Disponivel9,
        titulo: 'Título',
        descricao: 'Descrição',
        largura: 'Largura: 40cm',
        altura: 'Altura: 38cm',
        dimensao: 'Dimensão: 3cm',
    },
    {
        src: Disponivel10,
        titulo: 'Título',
        descricao: 'Description of Art 10',
        largura: 'Largura: 40cm',
        altura: 'Altura: 38cm',
        dimensao: 'Dimensão: 3cm',
    },
];

function Disponivel() {
    const [arteSelecionada, selecionarArte] = useState(null);

    const handleClick = (arte) => {
        selecionarArte(arte);
    };

    const handleClose = () => {
        selecionarArte(null);
    };

    // aqui serve pra gente fechar o formzinho clicando fora dele 
    // (por causa od nome da classe que ta chamando é a mesma da qe ta o html)
    const handleOverlayClick = (event) => {
        if (event.target.className === 'overlay-container') {
            handleClose();
        }
    };

    return (
        <main>
            <div className='container'>
                <h2>Artes Disponíveis</h2>
                <div className='row'>
                    {artes.map((art, index) => (
                        <img
                            key={index}
                            src={art.src}
                            className='disponivel overlay'
                            onClick={() => handleClick(art)}
                            alt={art.titulo}
                        />
                    ))}
                </div>
            </div>

            {arteSelecionada && (
                <div className='overlay-container' onClick={handleOverlayClick}>
                    <div className='overlay-content'>
                        <img src={arteSelecionada.src} alt={arteSelecionada.titulo} />
                        <div className='ajustar'>
                            <h1>{arteSelecionada.titulo}</h1>
                            <p className='p'>{arteSelecionada.descricao}</p>
                            <p className='p'>{arteSelecionada.altura}</p>
                            <p className='p'>{arteSelecionada.largura}</p>
                            <p className='p'>{arteSelecionada.dimensao}</p>
                            <div className='botao'>
                                <button className='encomendar'>Encomendar</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}

export default Disponivel;