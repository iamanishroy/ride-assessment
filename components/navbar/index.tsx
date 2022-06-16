import styles from './styles.module.scss';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.brand}>Edvora</h1>
      <div className={styles.user}>
        <p>Dhruv Singh</p>
        <img src="https://picsum.photos/200" />
      </div>
    </nav>
  );
};


export default Navbar;