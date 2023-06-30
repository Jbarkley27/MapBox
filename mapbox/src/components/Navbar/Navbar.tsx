import styles from './Navbar.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul className={styles.navbar}>
        <li>
          <Link
            href="/"
            className={`${styles.navbar_logo_container} ${styles.remove_link_styles}`}
          >
            <Image
              src="/images/logo.png"
              alt="mapbox-logo-icon"
              width={35}
              height={35}
            />
            <h1>MAPBOX</h1>
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={`${styles.navbar_about} ${styles.remove_link_styles}`}
          >
            ABOUT
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
