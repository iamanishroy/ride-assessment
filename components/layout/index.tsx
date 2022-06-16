import Navbar from '../navbar';
import styles from './styles.module.scss';

interface LayoutPropInterface {
  main: React.ReactNode
}

const Layout: React.FC<LayoutPropInterface> = ({ main }): JSX.Element => {
  return (
    <body className={styles.body}>
      <Navbar />
      {main}
    </body>
  );
};


export default Layout;