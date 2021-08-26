import "./footer.css";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <footer>
      <div className="left box">
        <span className="copy">&copy; Camilo Schaser-Hughes</span>
      </div>
      <div className="right box">
        <SocialIcon
          className="social"
          url="https://www.linkedin.com/in/camilo-schaser-hughes-706861bb/"
        />
        <SocialIcon className="social" url="https://github.com/camilionaire" />
        <SocialIcon
          className="social"
          url="https://www.facebook.com/camilo.schaserhughes"
        />
        <SocialIcon
          className="social"
          url="https://www.instagram.com/geekcore84/"
        />
      </div>
    </footer>
  );
}

export default Footer;
