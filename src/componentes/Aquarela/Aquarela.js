import React from 'react';
import Aquarela1 from '../../img/aquarela1.png';
import Aquarela2 from '../../img/aquarela2.png';
import Aquarela3 from '../../img/aquarela3.png';
import Aquarela4 from '../../img/aquarela4.png';
import Aquarela5 from '../../img/aquarela5.png';
import Aquarela6 from '../../img/aquarela6.png';
import Aquarela7 from '../../img/aquarela7.png';
import Aquarela8 from '../../img/aquarela8.png';
import './Aquarela.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Aquarela() {
    return (
        <main>
            <div className='container'>
                <h2>Aquarela</h2>
                <div className='row justify-content-center'>
                    <img src={Aquarela3} className='aquarela vertical' />

                    <img src={Aquarela4} className='aquarela vertical' />

                    <img src={Aquarela5} className='aquarela vertical' />

                    <img src={Aquarela6} className='aquarela vertical' />

                    <img src={Aquarela7} className='aquarela vertical' />

                    <img src={Aquarela8} className='aquarela vertical' />

                    <img src={Aquarela2} className='aquarela horizontal'/>

                    <img src={Aquarela1} className='aquarela horizontal' />

                </div>
            </div>
        </main>
    );
}

export default Aquarela;
