import "./Footer.css";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <footer>
      <div className="left box">
        <span className="copy">&copy; Camilo Schaser-Hughes</span>
      </div>
      <div className="right box">
        <SocialIcon
          style={{ height: 40, width: 40 }}
          className="social"
          url="https://www.linkedin.com/in/camilo-schaser-hughes-706861bb/"
        />
        <SocialIcon
          style={{ height: 40, width: 40 }}
          className="social"
          bgColor="#ff5a01"
          url="https://github.com/camilionaire"
        />
        <SocialIcon
          style={{ height: 40, width: 40 }}
          className="social"
          url="https://www.facebook.com/camilo.schaserhughes"
        />
        <SocialIcon
          style={{ height: 40, width: 40 }}
          className="social"
          url="https://www.instagram.com/geekcore84/"
        />
      </div>
    </footer>
  );
}

export default Footer;
