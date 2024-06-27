import React from 'react';
import Tela1 from '../../img/tela1.png';
import Tela2 from '../../img/tela2.png';
import Tela3 from '../../img/tela3.png';
import Tela4 from '../../img/tela4.png';
import Tela5 from '../../img/tela5.png';
import Tela6 from '../../img/tela6.png';
import Tela7 from '../../img/tela7.png';
import Tela8 from '../../img/tela8.png';
import Tela9 from '../../img/tela9.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Tela.css';

function Tela() {
    return (
        <div className='container'>
            <h2>Tela</h2>
            <div className='row justify-content-center align-items-center'>
                <img src={Tela1} className='img-fluid vertical' alt='Tela 1' />
                <img src={Tela7} className='img-fluid vertical' alt='Tela 7' />
                <img src={Tela6} className='img-fluid vertical' alt='Tela 6' />
                <img src={Tela2} className='img-fluid vertical' alt='Tela 2' />
                <img src={Tela3} className='img-fluid vertical' alt='Tela 3' />
                <img src={Tela4} className='img-fluid horizontal' alt='Tela 4' />
                <img src={Tela5} className='img-fluid horizontal' alt='Tela 5' />
                <img src={Tela8} className='img-fluid horizontal' alt='Tela 8' />
                <img src={Tela9} className='img-fluid horizontal' alt='Tela 9' />
            </div>
        </div>
    );
}

export default Tela;

