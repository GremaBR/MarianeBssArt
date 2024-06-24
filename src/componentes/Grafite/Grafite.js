import React from 'react';
import Grafite1 from '../../img/grafite1.png';
import Grafite2 from '../../img/grafite2.png';
import Grafite3 from '../../img/grafite3.png';
import './Grafite.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Grafite() {
    return (
        <main>
            <div className='container'>
                <h2>Grafite</h2>
                <div className='row'>
                    <img src={Grafite1} className='grafite vertical' />

                    <img src={Grafite2} className='grafite vertical' />

                    <img src={Grafite3} className='grafite vertical' />
                </div>
            </div>
        </main>
    );
}

export default Grafite;
