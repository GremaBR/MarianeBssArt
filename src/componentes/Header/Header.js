import Assinatura from '../../img/assinaturaMarromEscuro 3.png';
import IconCasa from '../../img/icons/casa.png';
import IconMulher from '../../img/icons/mulher.png';
import IconAquarela from '../../img/icons/aquarela.png';
import IconTelaDePintura from '../../img/icons/tela-de-pintura.png';
import IconLapis from '../../img/icons/lapis.png';
import IconCompra from '../../img/icons/comprar.png';
import './Header.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function Header() {
    return (
        <header>
            <nav class="navbar bg-body-tertiary top">
                <div class="container-fluid">
                    <div class="header">
                        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                            aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <Link to="/"><img src={Assinatura} class="img-header" /></Link>

                        <form class="d-flex" role="search">
                            <button class="btn btn-outline-success" type="submit">Entre em contato pelo WhatsApp</button>
                        </form>
                    </div>
                    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <img src={Assinatura} class="logo-sidebar" />
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>

                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page">Principais</a>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link item" to="/">
                                        <img src={IconCasa} />
                                        Home
                                    </Link>
                                    <Link class="nav-link item" to="/about">
                                        <img src={IconMulher} />
                                        Sobre mim
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page">Artes</a>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link item" to="/aquarela">
                                        <img src={IconAquarela} />
                                        Aquarela
                                    </Link>
                                    <Link class="nav-link item" to="/tela">
                                        <img src={IconTelaDePintura} />
                                        Telas
                                    </Link>
                                    <Link class="nav-link item" to="/grafite">
                                        <img src={IconLapis} />
                                        Grafite
                                    </Link>
                                    <Link class="nav-link item" to="/disponiveis">
                                        <img src={IconCompra} />
                                        Artes Disponíveis
                                    </Link>
                                </li>

                            </ul>
                            <form class="d-flex" role="search">
                                <button class="btn btn-outline-success" type="submit">Encomende sua arte</button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
export default Header;