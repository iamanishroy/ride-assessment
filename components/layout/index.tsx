import { User } from '../../utility/interface';
import Navbar from '../navbar';
import styles from './styles.module.scss';

interface LayoutPropInterface {
  user: User
  main: React.ReactNode
}

const Layout: React.FC<LayoutPropInterface> = ({ user, main }): JSX.Element => {
  return (
    <div className={styles.body}>
      <Navbar user={user} />
      {main}
    </div>
  );
};


export default Layout;