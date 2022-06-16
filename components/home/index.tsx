import Card from "./card";
import FilterIcon from "./static/filterIcon";
import TriangleIcon from "./static/triangleIcon";
import styles from './styles.module.scss';

const Homepage: React.FC = () => {
  return (
    <main className={styles.main}>
      <div className={styles.interactions}>
        {/* left */}
        <div className={styles.left}>
          <button>Nearest rides</button>
          <button data-active="true">Upcoming rides (4)</button>
          <button>Past rides (2)</button>
        </div>

        {/* right */}
        <div className={styles.right}>
          <FilterIcon />
          Filter
        </div>

        <div className={styles.filterBox} data-show>
          Filters
          <hr />
          <button>State <TriangleIcon /></button>
          <button>City <TriangleIcon /></button>
        </div>
      </div>

      {/* card container */}
      <div>
        <Card />
      </div>
    </main>
  );
};


export default Homepage;