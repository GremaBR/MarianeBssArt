import iconFone from "../../img/icons/fone.png";
import iconEmail from "../../img/icons/email.png";
import iconEndereco from "../../img/icons/endereco.png";
import iconInstagram from "../../img/icons/instagram.png";
import "./Footer.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Footer() {
  return (
    <footer>
      <div class="container">
      <div class="row">
          <div class="col-md-6">
            <p class="mariane-footer display-flex">
              Mariane BSS Art
            </p>
            <p className="display-flex">
              “Criatividade é conectar o que parece desconectado.”<br />
              -  Willian Plomer
            </p>
          </div>

          <div class="col-md-6 ">
            <p class="contatos"> CONTATOS </p>
            <hr className="hrFooter"/>

            <a class="footer-link" href="#">
              <img src={iconFone} alt="Fone Icon" />
              +55 (47) 988719165
            </a>

            <a class="footer-link" href="#">
              <img src={iconEmail} alt="Email Icon" />
              marianebasseggio@gmail.com
            </a>

            <a class="footer-link" href="#">
              <img src={iconEndereco} alt="Endereco Icon" />
              Balneário Camboriú, SC, Brasil
            </a>

            <a class="footer-link" href="https://www.instagram.com/mariane_bss_art/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" target="_blank">
              <img src={iconInstagram} alt="Instagram Icon" />
              @mariane_bss_art
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;