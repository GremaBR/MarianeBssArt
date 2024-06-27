import './Home.css'
import HomeImg from '../../img/Group 25.png';

function Home() {
    return (
        <div className='corpo'>
            <div className="row align-items-center">
                    <img src={HomeImg} className="img-fluid" alt="Home" />
            </div>
        </div>
    );
}
export default Home;