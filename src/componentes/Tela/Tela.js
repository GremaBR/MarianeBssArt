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
import './Tela.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Tela() {
    return (
        <main>
            <div className='container'>
                <h2>Tela</h2>
                <div className='row'>
                    <img src={Tela1} className='tela vertical' />

                    <img src={Tela7} className='tela vertical' />

                    <img src={Tela6} className='tela vertical' />

                    <img src={Tela2} className='tela vertical' />

                    <img src={Tela3} className='tela vertical' />

                    <img src={Tela4} className='tela horizontal' />

                    <img src={Tela5} className='tela horizontal' />

                    <img src={Tela8} className='tela horizontal' />

                    <img src={Tela9} className='tela horizontal' />
                </div>
            </div>
        </main>
    );
}

export default Tela;
