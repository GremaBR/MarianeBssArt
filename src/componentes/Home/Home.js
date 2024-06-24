import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import HrHome from '../../img/Rectangle 37.png';
import HomeImg from '../../img/home.png';
function Home() {
    return (
        <main>
            <div class="corpo">
                <img src={HomeImg} class="float-left"/>
                    <div class="frase">
                        <img src={HrHome} class="hr-frase" />
                        <p class="p-frase"> "Somos telas em branco e podemos ser arte."</p>
                        <p class="autor"> - Femingos</p>
                    </div>
            </div>
        </main>
    );
}

export default Home;