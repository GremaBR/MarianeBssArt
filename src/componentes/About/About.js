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
        <main>
            <div className='container'>
                <div className='alinhar-img-links'>
                    <img src={AboutImg} className='imagem-redonda'/>
                    <div className='social'>
                        <div className='links'> <img src={iconFone} className='icones' /> <a href='#'> +55 (47) 988719165 </a> </div>
                        <div className='links'><img src={iconInstagram} className='icones' /> <a href=' https://www.instagram.com/mariane_bss_art?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw== ' target='_blank'> @mariane_bss_art </a> </div>
                        <div className='links'> <img src={iconEmail} className='icones' /> <a href='#'> marianebasseggio@gmail.com </a></div>
                    </div>
                </div>

                <div className='sobre-mim'>
                    <div className='titulo-sobre'>
                        <img src={tituloAbout} />
                    </div>

                    <div className='texto-sobre'>
                        <hr className='linha'></hr>

                        <p className='sobre'>
                            Mariane Basseggio traz reflexões sobre momentos de nossa vida de maneira cativante construindo pinceladas de encher os olhos com suas cores e movimentos.
                        </p>
                        <p className='sobre'>
                            Sua arte consiste em pinturas personalizadas em aquarela sobre papel, enquanto desenvolve seu estilo em óleo e acrílica sobre tela que relacionam a
                            natureza com as ações humanas e o próprio ser humano com suas emoções, sempre em busca de uma arte cada vez mais autêntica e contemporânea.
                        </p>
                        <p className='sobre'>
                            Aos 13 anos sua avó faleceu e de certa forma foi isso que a impulsionou a praticar a pintura como hobbie, fazendo diversos cursos e exposições.
                            Seu amor por arte só foi aumentando e transbordou para outras pessoas já tem um tempo, iniciando assim, sua carreira como artista. Venha conhecer mais da Mariane.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default About;