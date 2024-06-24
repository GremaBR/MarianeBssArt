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
      <div class="footer-items">
        <div class="esquerda">
          <p class="mariane-footer">
            Mariane BSS Art
          </p>
          <p>
            “Criatividade é conectar o que parece desconectado.”<br />
            - Willian Plomer
          </p>
        </div>

        <div class="direita">
          <p class="contatos"> CONTATOS </p>
          <hr />

          <a class="footer-link" href="#">
            <img src={iconFone} />
            +55 (47) 988719165
          </a>

          <a class="footer-link" href="#">
            <img src={iconEmail} />
            marianebasseggio@gmail.com
          </a>

          <a class="footer-link" href="#">
            <img src={iconEndereco} />
            Balneário Camboriú, SC, Brasil
          </a>

          <a class="footer-link" href="#">
            <img src={iconInstagram} />
            @mariane_bss_art
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;