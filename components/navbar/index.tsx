import { User } from '../../utility/interface';
import styles from './styles.module.scss';

const Navbar: React.FC<{ user: User }> = ({ user }) => {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.brand}>Edvora</h1>
      <div className={styles.user}>
        <p>{user.name}</p>
        <img src={user.url} />
      </div>
    </nav>
  );
};


export default Navbar;