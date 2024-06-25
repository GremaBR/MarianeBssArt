import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './About.css';
import AboutImg from '../../img/about.png';
import iconFone from "../../img/icons/fone.png";
import iconEmail from "../../img/icons/email.png";
import iconInstagram from "../../img/icons/instagram.png";
import tituloAbout from "../../img/Mariane Basseggio.png"

function About() {
    return (
        <main className='mainAbout'>
            <div className="container mt-5 tudo">
                <div className="row g-0">
                    <div className="col-md-4 d-flex align-items-center justify-content-center alinhar">
                        <img src={AboutImg} className="img-fluid rounded-circle imagem" alt="Mariane Basseggio" />
                        <div className="contact-info text-center">
                            <a className="footer-link" href="#">
                                <img src={iconFone} alt="Fone Icon" />
                                +55 (47) 988719165
                            </a>

                            <a className="footer-link" href="#">
                                <img src={iconEmail} alt="Email Icon" />
                                marianebasseggio@gmail.com
                            </a>
                            <a className="footer-link" href="https://www.instagram.com/mariane_bss_art/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" target="_blank">
                                <img src={iconInstagram} alt="Instagram Icon" />
                                @mariane_bss_art
                            </a>
                        </div>
                    </div>

                    <div className="col-md-8">
                        <div className="card-body">
                            <img src={tituloAbout} className="img-fluid" alt="Mariane Basseggio" />
                            <p className="card-text text-center">
                                <hr className='Hr '></hr>
                        
                                Mariane Basseggio traz reflexões sobre momentos
                                de nossa vida de maneira cativante construindo pinceladas de encher os olhos com suas cores e movimentos.
                            </p>
                            <p className="card-text text-center">
                                Sua arte consiste em pinturas personalizadas em aquarela sobre papel, enquanto desenvolve seu estilo em óleo e acrílica sobre tela que relacionam a natureza com as ações humanas e o próprio ser humano com suas emoções, sempre em busca de uma arte cada vez mais autêntica e contemporânea.
                            </p>
                            <p className="card-text text-center">
                                Aos 13 anos sua avó faleceu e de certa forma foi isso que a impulsionou a praticar a pintura como hobbie, fazendo diversos cursos e exposições. Seu amor por arte só foi aumentando e transbordou para outras pessoas já tem um tempo, iniciando assim, sua carreira como artista. Venha conhecer mais da Mariane.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default About;