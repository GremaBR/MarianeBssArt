import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import HrHome from '../../img/Rectangle 37.png';
import HomeImg from '../../img/Group 25.png';

function Home() {
    return (
        <main className="container">
            <div className="row align-items-center">
                <div className="col-12">
                    <img src={HomeImg} className="img-fluid" alt="Home" />
                </div>
            </div>
        </main>
    );
}
export default Home;