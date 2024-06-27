import React from 'react';
import Grafite1 from '../../img/grafite1.png';
import Grafite2 from '../../img/grafite2.png';
import Grafite3 from '../../img/grafite3.png';
import './Grafite.css';


function Grafite() {
    return (
        <div className='container'>
            <h2>Grafite</h2>
            <div className='row justify-content-center'>
                <div className='col-md-4 text-center'>
                    <img src={Grafite1} className='img-fluid obra' alt='Grafite 1' />
                </div>
                <div className='col-md-4 text-center'>
                    <img src={Grafite2} className='img-fluid obra' alt='Grafite 2' />
                </div>
                <div className='col-md-4 text-center'>
                    <img src={Grafite3} className='img-fluid obra' alt='Grafite 3' />
                </div>
            </div>
        </div>
    );
}


export default Grafite;
