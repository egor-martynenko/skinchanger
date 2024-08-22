import Link from 'next/link';
import styles from './logo.module.css';

export const Logo = () => {
  return (
    <Link className={styles.logo} href="/">
      skinchanger<span>.io</span>
    </Link>
  );
};
