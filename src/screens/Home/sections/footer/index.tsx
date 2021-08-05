import './footer.css';

const Footer: React.FC = () => {
  return (
    <footer id="FooterUnified">
      <div className="Footer_row">
        {/* <a className="style__Title-sc-1bpch4d-1 jBaHMf">Graduação</a> */}
        Graduação
        <div className="Footer_container-graduacao">
          <div className="Footer_container-column-type-1">
            {/* <a className="style__Title-sc-1bpch4d-1 jBaHMf">
              Áreas do conhecimento
            </a> */}
            Áreas do conhecimento
            <a
              target="_blank"
              className="Footer_items-link-type-1"
              href="https://descomplica.com.br/faculdade/educacao/"
              rel="noreferrer"
            >
              Educação
            </a>
            <a
              target="_blank"
              className="Footer_items-link-type-1"
              rel="noreferrer"
              href="https://descomplica.com.br/faculdade/engenharia/"
            >
              Engenharia
            </a>
            <a
              target="_blank"
              className="Footer_items-link-type-1"
              rel="noreferrer"
              href="https://descomplica.com.br/faculdade/gestao/"
            >
              Gestão
            </a>
            <a
              target="_blank"
              className="style__ListItems-sc-1bpch4d-3 kQlgzZ"
              rel="noreferrer"
              href="https://descomplica.com.br/faculdade/tecnologia/"
            >
              Tecnologia
            </a>
          </div>
          <div className="Footer_container-column-type-1">
            Sobre a Faculdade
            {/* <a className="style__Title-sc-1bpch4d-1 jBaHMf">
              Sobre a Faculdade
            </a> */}
            <a
              target="_blank"
              className="Footer_items-link-type-1"
              rel="noreferrer"
              href="https://descomplica.com.br/faculdade/diferenciais/"
            >
              Diferenciais
            </a>
            <a
              target="_blank"
              className="Footer_items-link-type-1"
              rel="noreferrer"
              href="https://descomplica.com.br/faculdade/inscricoes/"
            >
              Inscrições
            </a>
            <a
              target="_blank"
              className="Footer_items-link-type-1"
              rel="noreferrer"
              href="https://descomplica.com.br/faculdade/transferencia/"
            >
              Transferência
            </a>
            <a
              target="_blank"
              className="Footer_items-link-type-1"
              rel="noreferrer"
              href="https://descomplica.com.br/faculdade/segunda-graduacao/"
            >
              Segunda graduação
            </a>
          </div>
          <div className="Footer_container-column-type-1">
            Portal do Aluno
            {/* <a className="style__Title-sc-1bpch4d-1 jBaHMf">Portal do Aluno</a> */}
            <a
              target="_blank"
              className="Footer_items-link-type-1"
              rel="noreferrer"
              href="https://accounts.descomplica.com.br/?returnUrl=https://aulas.descomplica.com.br/"
            >
              Já sou aluno
            </a>
            <a
              target="_blank"
              className="Footer_items-link-type-1"
              rel="noreferrer"
              href="https://descomplica.com.br/faculdade/manual-do-aluno/"
            >
              Manual do Aluno
            </a>
            <a
              target="_blank"
              className="Footer_items-link-type-1"
              rel="noreferrer"
              href="https://descomplica.com.br/faculdade/edital/"
            >
              Edital Vestibular 2021
            </a>
            <a
              target="_blank"
              className="Footer_items-link-type-1"
              rel="noreferrer"
              href="https://descomplica.com.br/faculdade/regimento-geral"
            >
              Regimento Geral
            </a>
          </div>
          <div className="Footer_container-column-type-1">
            Fale com a gente
            {/* <a className="style__Title-sc-1bpch4d-1 jBaHMf">Fale com a gente</a> */}
            <a
              target="_blank"
              className="Footer_items-link-type-1"
              rel="noreferrer"
              href="https://api.whatsapp.com/send/?phone=5511980196658&text=Ola,+Preciso+tirar+uma+d%C3%BAvida+sobre+a+Faculdade+Descomplica&app_absent=0"
            >
              Whatsapp
            </a>
            Chat online
            {/* <a className="Footer_items-link-type-1">Chat online</a> */}
          </div>
        </div>
      </div>
      <div className="Footer_row">
        {/* <a className="style__Title-sc-1bpch4d-1 jBaHMf" /> */}
        <div className="Footer_container-social">
          <div className="Footer_container-column-type-2">
            Siga nossa Faculdade
            {/* <a className="style__Title-sc-1bpch4d-1 jBaHMf">
              Siga nossa Faculdade
            </a> */}
            <div className="style__ListRowContainer-sc-1bpch4d-4 gzygZ">
              <a
                href="https://www.facebook.com/faculdadedescomplica"
                target="_self"
                rel="noreferrer"
              >
                <img
                  src="https://flowpress-staging.s3.sa-east-1.amazonaws.com/wp-content/uploads/2021/03/15165913/icone-facebook-branco.svg"
                  className="Footer_img-social-media"
                  alt="Facebook"
                />
              </a>
              <a
                href="https://twitter.com/faculdesco"
                target="_self"
                rel="noreferrer"
              >
                <img
                  src="https://flowpress-staging.s3.sa-east-1.amazonaws.com/wp-content/uploads/2021/03/15165916/icone-twitter-branco.svg"
                  className="Footer_img-social-media"
                  alt="Twitter"
                />
              </a>
              <a
                href="https://www.instagram.com/faculdadedescomplica/"
                target="_self"
                rel="noreferrer"
              >
                <img
                  src="https://flowpress-staging.s3.sa-east-1.amazonaws.com/wp-content/uploads/2021/03/15165914/icone-instagram-branco.svg"
                  className="Footer_img-social-media"
                  alt="Instagram"
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UC911DweZpoXAm3y4GaqUyLA"
                target="_self"
                rel="noreferrer"
              >
                <img
                  src="https://flowpress-staging.s3.sa-east-1.amazonaws.com/wp-content/uploads/2021/03/15165917/icone-youtube-branco.svg"
                  className="Footer_img-social-media"
                  alt="Youtube"
                />
              </a>
            </div>
          </div>
          <div className="Footer_container-column-type-1">
            Baixe nosso App
            {/* <a className="style__Title-sc-1bpch4d-1 jBaHMf">Baixe nosso App</a> */}
            <div className="style__ListRowContainer-sc-1bpch4d-4 gzygZ">
              <a
                href="https://play.google.com/store/apps/details?id=br.com.descomplica.vod&amp;hl=pt_BR"
                target="_self"
                rel="noreferrer"
              >
                <img
                  src="https://flowpress-production.s3.sa-east-1.amazonaws.com/wp-content/uploads/2021/06/28194051/google-play-store.svg"
                  className="style__Image-sc-1bpch4d-9 cqCebT storeLogo"
                  alt="Google Play Store"
                />
              </a>
              <a
                href="https://apps.apple.com/br/app/descomplica-foco-no-enem-2016/id1068977518"
                target="_self"
                rel="noreferrer"
              >
                <img
                  src="https://flowpress-production.s3.sa-east-1.amazonaws.com/wp-content/uploads/2021/06/28194052/app-store.svg"
                  className="style__Image-sc-1bpch4d-9 cqCebT storeLogo"
                  alt="App Store"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="Footer_row">
        Mais da Faculdade Descomplica
        {/* <a className="style__Title-sc-1bpch4d-1 jBaHMf">
          Mais da Faculdade Descomplica
        </a> */}
        <div className="Footer_container-mais-faculdade">
          <div className="Footer_container-column-type-1">
            Pós-Graduação
            {/* <a className="style__Title-sc-1bpch4d-1 jBaHMf">Pós-Graduação</a> */}
            <a
              target="_blank"
              className="style__ListItems-sc-1bpch4d-3 kQlgzZ"
              rel="noreferrer"
              href="https://descomplica.com.br/pos-graduacao/"
            >
              Ver nossos cursos de Pós-Graduação
            </a>
          </div>
          <div className="Footer_container-column-type-1">
            Cursos Livres
            {/* <a className="style__Title-sc-1bpch4d-1 jBaHMf">Cursos Livres</a> */}
            <a
              target="_blank"
              className="style__ListItems-sc-1bpch4d-3 kQlgzZ"
              rel="noreferrer"
              href="https://cursos-livres.descomplica.com.br/"
            >
              Ver nossos cursos livres
            </a>
          </div>
          <div className="Footer_container-column-type-1">
            Soluções para Empresas
            {/* <a className="style__Title-sc-1bpch4d-1 jBaHMf">
              Soluções para Empresas
            </a> */}
            <a
              target="_blank"
              className="style__ListItems-sc-1bpch4d-3 kQlgzZ"
              rel="noreferrer"
              href="https://descomplica.com.br/para-empresas/"
            >
              Descomplica para Empresas
            </a>
          </div>
          <div className="Footer_container-column-type-1">
            Siga nossa Pós
            {/* <a className="style__Title-sc-1bpch4d-1 jBaHMf">Siga nossa Pós</a> */}
            <div className="style__ListRowContainer-sc-1bpch4d-4 gzygZ">
              <a
                href="https://www.facebook.com/descomplica.pos/"
                target="_self"
                rel="noreferrer"
              >
                <img
                  src="https://flowpress-staging.s3.sa-east-1.amazonaws.com/wp-content/uploads/2021/03/15165913/icone-facebook-branco.svg"
                  className="Footer_img-social-media"
                  alt="Facebook"
                />
              </a>
              <a
                href="https://twitter.com/descomplicapos/"
                target="_self"
                rel="noreferrer"
              >
                <img
                  src="https://flowpress-staging.s3.sa-east-1.amazonaws.com/wp-content/uploads/2021/03/15165916/icone-twitter-branco.svg"
                  className="Footer_img-social-media"
                  alt="Twitter"
                />
              </a>
              <a
                href="https://www.instagram.com/descomplica.pos/"
                target="_self"
                rel="noreferrer"
              >
                <img
                  src="https://flowpress-staging.s3.sa-east-1.amazonaws.com/wp-content/uploads/2021/03/15165914/icone-instagram-branco.svg"
                  className="Footer_img-social-media"
                  alt="Instagram"
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UC911DweZpoXAm3y4GaqUyLA"
                target="_self"
                rel="noreferrer"
              >
                <img
                  src="https://flowpress-staging.s3.sa-east-1.amazonaws.com/wp-content/uploads/2021/03/15165917/icone-youtube-branco.svg"
                  className="Footer_img-social-media"
                  alt="Youtube"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="style__BottomContainer-sc-1bpch4d-5 firlKe">
        <img
          src="https://flowpress-production.s3.sa-east-1.amazonaws.com/wp-content/uploads/2021/03/25182018/logo-faculdade-descomplica.svg"
          alt="logo faculdade descomplica"
          className="style__Logo-sc-1bpch4d-6 ciRon"
        />
        <div className="style__ListRowContainer-sc-1bpch4d-4 style__ListColumnContainer-sc-1bpch4d-8 eAssRJ">
          Fale com a gente
          {/* <a target="_blank" className="style__BottomItems-sc-1bpch4d-7 bMPcOE">
            Fale com a gente
          </a> */}
          <a
            target="_blank"
            className="style__BottomItems-sc-1bpch4d-7 bMPcOE"
            rel="noreferrer"
            href="https://descomplica.com.br/sobre/quem-somos/"
          >
            Quem somos
          </a>
          <a
            target="_blank"
            className="style__BottomItems-sc-1bpch4d-7 bMPcOE"
            rel="noreferrer"
            href="https://descomplica.com.br/sobre/politica-de-privacidade/"
          >
            Política de Privacidade
          </a>
          <a
            target="_blank"
            className="style__BottomItems-sc-1bpch4d-7 bMPcOE"
            rel="noreferrer"
            href="https://descomplica.com.br/sobre/termos-de-uso/"
          >
            Termos de Uso
          </a>
          <a
            target="_blank"
            className="style__BottomItems-sc-1bpch4d-7 bMPcOE"
            rel="noreferrer"
            href="https://boards.greenhouse.io/descomplica"
          >
            Trabalhe conosco
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
