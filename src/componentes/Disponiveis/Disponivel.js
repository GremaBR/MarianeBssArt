import './Disponivel.css';
import Img3 from '../../img/Imagem3.jpg';
import Img4 from '../../img/Imagem4.jpg';
import Img5 from '../../img/Imagem5.jpg';
import Img7 from '../../img/Imagem7.jpg';
import Img8 from '../../img/Imagem8.jpg';
import Img9 from '../../img/Imagem9.jpg';
import Img10 from '../../img/Imagem10.jpg';
import Img11 from '../../img/Imagem11.jpg';
import Img12 from '../../img/Imagem12.jpg';
import Img13 from '../../img/Imagem13.jpg';
import Img14 from '../../img/Imagem14.jpg';
import Img15 from '../../img/Imagem15.jpg';
import Img16 from '../../img/Imagem16.jpg';
import Img17 from '../../img/Imagem17.jpg';
import Img18 from '../../img/Imagem18.jpg';
import Img19 from '../../img/Imagem19.jpg';
import Img20 from '../../img/Imagem20.jpg';
import Img21 from '../../img/Imagem21.jpg';
import Img22 from '../../img/Imagem22.jpg';
import Img23 from '../../img/Imagem23.jpg';
import Img24 from '../../img/Imagem24.jpg';
import Img25 from '../../img/Imagem25.jpg';
import Img26 from '../../img/Imagem26.jpg';
import Img27 from '../../img/Imagem27.jpg';
import Img28 from '../../img/Imagem28.jpg';
import Img29 from '../../img/Imagem29.jpg';
import Img30 from '../../img/Imagem30.jpg';
import Img31 from '../../img/Imagem31.jpg';
import WhatsAppButton from '../Pedido/Pedido.js';
import '../Pedido/Pedido.css'
import React, { useState } from 'react';

const artes = [
    {
        src: Img3,
        titulo: 'Movimento',
        descricao: "Fez parte da exposição “águas profundas” (Coletiva. Dez 2019. Bravamall Shopping. Itajaí SC-BR)",
        tecnica: 'Técnica: Óleo sobre chapa de madeira ',
        ano: 'Ano e local de criação: 2019, Balneário Camboriú – SC.',
        dimensoes: 'Dimensões: 50x50cm',
    },
    {
        src: Img4,
        titulo: 'O universo',
        descricao: "Andando pelo universo Conhecendo seus desejos  Na imensidão das galáxias \n Relutando seus defeitos. \nDa alma pura ternura \n Pelo asfalto serpenteia No doce código de dilúvio Cultuando o subúrbio Dos deleitos que a rodeia As estrelas irradiam luz E a elas me conduz \n A eterna paz ao saber Que mesmo ao amanhecer Continuarei ainda bela. -Mariane B.",
        tecnica: 'Técnica: Óleo sobre chapa de madeira ',
        ano: 'Ano e local de criação: 2019, Balneário Camboriú – SC.',
        dimensoes: 'Dimensões: 40x50cm',
    },
    {
        src: Img5,
        titulo: 'Aromata',
        descricao: 'Fez parte da exposição Cheiros afetivos (Coletiva Online. Dez 2020. Fabrícia Gonçalvez)  Um bálsamo para a alma    Acalma    Relembra o viver de uma tarde ensolarada     família e uma aventura por cima das águas.',
        tecnica: 'Técnica: Óleo tela painel',
        ano: 'Ano e local de criação: 2020, Balneário Camboriú – SC.',
        dimensoes: 'Dimensões: 50x60x4cm ',
    },
    {
        src: Img7,
        titulo: '',
        descricao: 'Fez parte da exposição Caminhos (Coletiva. Jul 2021. Arthousebc. Balneário Camboriú SC-BR)',
        tecnica: 'Técnica: Óleo tela',
        ano: 'Ano e local de criação: 2021, Balneário Camboriú – SC. ',
        dimensoes: 'Dimensões: 50x60cm',
    },
    {
        src: Img8,
        titulo: 'Mãos de artista',
        descricao: 'Ano e local de criação: 2022, Balneário Camboriú – SC.',
        tecnica: 'Técnica: Óleo tela',
        dimensoes: 'Dimensões: 25x25cm ',
    },
    {
        src: Img9,
        titulo: 'Jesus Cristo',
        descricao: 'Ano e local de criação: 2022, Balneário Camboriú – SC',
        tecnica: 'Técnica: Óleo tela',
        dimensoes: 'Dimensões: 30x40cm ',
    },
    {
        src: Img10,
        titulo: 'Cheiro de campo',
        descricao: 'Ano e local de criação: 2022, Balneário Camboriú – SC',
        tecnica: 'Técnica: Óleo tela',
        dimensoes: 'Dimensões: 35x27cm ',
    },
    {
        src: Img11,
        titulo: '',
        descricao: 'Ano e local de criação: 2023, Balneário Camboriú – SC',
        tecnica: 'Técnica: Óleo tela',
        dimensoes: 'Dimensões: 20x20cm  ',
    },
    {
        src: Img12,
        titulo: 'Cristo Luz sob o céu de Van Gogh',
        descricao: 'Ano e local de criação: 2023, Balneário Camboriú – SC',
        tecnica: 'Técnica: Óleo tela',
        dimensoes: 'Dimensões: 30x40cm ',
    },
    {
        src: Img13,
        titulo: 'Sabores',
        descricao: 'Ano e local de criação: 2023, Balneário Camboriú SC',
        tecnica: 'Técnica: Óleo sobre tela',
        dimensoes: 'Dimensões: 30x40cm',
    },
    {
        src: Img14,
        titulo: 'Inspiração',
        descricao: 'Ano e local de criação: 2023, Balneário Camboriú – SC',
        tecnica: 'Técnica: Óleo tela',
        dimensoes: 'Dimensões: 50x60cm ',
    },
    {
        src: Img15,
        titulo: 'Aquele que crê em mim nunca estará sozinho',
        descricao: 'Ano e local de criação: 2023, Balneário Camboriú – SC',
        tecnica: 'Técnica: Óleo tela',
        dimensoes: 'Dimensões: 30x40cm ',
    },

    {
        src: Img16,
        titulo: '',
        descricao: 'Ano e local de criação: 2023, Balneário Camboriú SC',
        tecnica: 'Técnica: Óleo sobre tela ',
        dimensoes: 'Dimensões: 30x40,5cm',
    },
    {
        src: Img17,
        titulo: 'Um olhar para a natureza #1',
        descricao: 'A obra representa uma arara que veio parar aqui na rua de casa que me inspirou tanto na beleza como ao olhar com mais atenção para a causa animal e a exploração das espécies em perigo de extinção. Obra da série “um olhar para a natureza”.',
        tecnica: 'Técnica: Óleo sobre tela ',
        ano: 'Ano e local de criação: 2023, Balneário Camboriú SC',
        dimensoes: 'Dimensões: 30x50cm',
    },
    {
        src: Img18,
        titulo: 'Frágil #1',
        descricao: 'O que é o robusto em contraste com o frágil? Se um morre o outro morre... inspire expire. Inspirado na música “Inhale, exhale” da Aurora. ',
        tecnica: 'Técnica: Óleo sobre tela ',
        ano: 'Ano e local de criação: 2023, Balneário Camboriú – SC',
        dimensoes: 'Dimensões: 20x20cm',
    },
    {
        src: Img19,
        titulo: 'Frágil #2',
        descricao: 'O que é o robusto em contraste com o frágil? Se um morre o outro morre... inspire expire. Inspirado na música “Inhale, exhale” da Aurora.',
        tecnica: ' Ano e local de criação: 2023, Balneário Camboriú – SC',
        ano: 'Ano e local de criação: 2023, Balneário Camboriú – SC',
        dimensoes: 'Dimensões: 20x20cm',
    },
    {
        src: Img20,
        titulo: 'Frágil #3',
        descricao: 'O que é o robusto em contraste com o frágil? Se um morre o outro morre... inspire expire. Inspirado na música “Inhale, exhale” da Aurora.',
        tecnica: 'Técnica: Óleo sobre tela ',
        ano: 'Ano e local de criação: 2023, Balneário Camboriú – SC',
        dimensoes: 'Dimensões: 3cm',
    },
    {
        src: Img21,
        titulo: 'Um olhar para a natureza #002',
        descricao: 'Minhas inspirações para essa obra foi um print que tirei do clip de uma música para o fundo, asa de borboleta no microscópio (na faixa), mariposas, borboletas e uma frase da música “Maravilha” – Tuyo. Ano e local de criação: 2024, Balneário Camboriú – SC.',
        tecnica: 'Técnica: Spray e acríçica sobre tela ',
        dimensoes: 'Dimensões: 50x42cm',
    },
    {
        src: Img22,
        titulo: 'Um olhar para a natureza #003',
        descricao: 'Ano e local de criação: 2023, Balneário Camboriú – SC',
        tecnica: 'Técnica: Óleo e bordado sobre tela ',
        dimensoes: 'Dimensões: 30x40,5cm ',
    },
    {
        src: Img23,
        titulo: 'Um olhar para a Natureza #004',
        descricao: 'Minha inspiração para essa obra foi justamente a quantidade de lixo que temos nos oceanos e como isso prejudica a vida marinha...Na obra vemos uma tartaruga com diversas flores ao seu redor, que representam alguns dos poluentes como a esponja, a sacola e o canudo mas também a rede de pesca que muitas vezes é descartada no mar.',
        tecnica: 'Técnica: Óleo sobre tela ',
        ano: 'Ano e local de criação: 2024, Balneário Camboriú SC.',
        dimensoes: 'Dimensões: 41x48,5xm (aproximadamente)',
    },
    {
        src: Img24,
        titulo: 'Um olhar para a natureza #005',
        descricao: 'Data e local de criação: 2024, Balneário Camboriú SC.',
        tecnica: 'Técnica: Acrílica e spray sobre tela ',
        dimensoes: 'Dimensões: 44,5x56cm',
    },
    {
        src: Img25,
        titulo: 'Um olhar para a natureza #006',
        descricao: 'Data e local de criação: 2024, Balneário Camboriú SC.',
        tecnica: 'Técnica: Óleo e bordado sobre tela ',
        dimensoes: 'Dimensões: 30x40cm',
    },
    {
        src: Img26,
        titulo: 'Nossa Senhora com menino Jesus',
        descricao: 'Data e local de criação: 2024, Balneário Camboriú SC.',
        tecnica: 'Técnica: Acrílica e óleo sobre tela',
        dimensoes: 'Dimensões: 50x56cm',
    },
    {
        src: Img27,
        titulo: '',
        descricao: 'Data e local de criação: 2024, Balneário Camboriú SC.',
        tecnica: 'Técnica: Spray e acrílica sobre tela',
        dimensoes: 'Dimensões: 57x46cm',
    },
    {
        src: Img28,
        titulo: '',
        descricao: 'Ano e local de criação: 2024, Balneário Camboriú – SC.',
        tecnica: 'Técnica: Acrílica sobre tela ',
        dimensoes: 'Dimensões: 30x37,5cm ',
    },
    {
        src: Img29,
        titulo: 'Fradinho',
        descricao: 'Ano e local de criação: 2024, Balneário Camboriú – SC.',
        tecnica: 'Técnica: Óleo sobre tela ',
        dimensoes: 'Dimensões: 37,5x44,5cm ',
    },
    {
        src: Img30,
        titulo: '',
        descricao: 'Ano e local de criação: 2024, Balneário Camboriú – SC.',
        tecnica: 'Técnica: Spray e acrílica sobre tela ',
        dimensoes: 'Dimensões: 42x82cm ',
    },
    {
        src: Img31,
        titulo: 'Raízes do coração',
        descricao: 'Ano e local de criação: 2024, Balneário Camboriú – SC.',
        tecnica: 'Técnica: Acrílica sobre tela ',
        dimensoes: 'Dimensões: 37x38,5cm ',
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
        <div className='alinhar-footer text-center'>
            <div className='container'>
                <h2>Artes Disponíveis</h2>
                <div className='row justify-content-center'>
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
                        <img src={arteSelecionada.src} alt={arteSelecionada.titulo} className='imagem-content' />
                        <div className='ajustar '>
                            <h1>{arteSelecionada.titulo}</h1>
                            <p className='p'>{arteSelecionada.descricao}</p>
                            <p className='p'>{arteSelecionada.tecnica}</p>
                            <p className='p'>{arteSelecionada.dimensoes}</p>
                            <p className='p'>{arteSelecionada.ano}</p>
                            <WhatsAppButton
                                titulo={arteSelecionada.titulo}
                                tecnica={arteSelecionada.tecnica}
                                dimensoes={arteSelecionada.dimensoes}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Disponivel;