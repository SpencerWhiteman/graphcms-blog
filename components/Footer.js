import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from "../styles/Footer.module.css";



function Footer() {
  return (
    <footer className={styles.footer}>

      <a className={styles.github} href='https://github.com/SpencerWhiteman' rel='noreferrer' target='_blank'>
        <FontAwesomeIcon icon={faGithub} size='lg' />
      </a>

      <a href='https://www.instagram.com/spencerwhitemanvisuals/?hl=en' rel='noreferrer' target='_blank'>
        <FontAwesomeIcon className={styles.instagram} icon={faInstagram} size='lg' />
      </a>

      <a href='https://www.linkedin.com/in/spencer-whiteman-8a3b7390/' rel='noreferrer' target='_blank'>
        <FontAwesomeIcon className={styles.linkedin} icon={faLinkedin} size='lg' />
      </a>

      
    </footer>
  );
}

export default Footer;