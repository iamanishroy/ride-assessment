import { Ride } from "../../utility/interface";
import Card from "./card";
import FilterIcon from "./static/filterIcon";
import TriangleIcon from "./static/triangleIcon";
import styles from './styles.module.scss';


const Homepage: React.FC<{ userStation: number, rides: Ride[] }> = ({ rides, userStation }) => {
  return (
    <main className={styles.main}>
      <div className={styles.interactions}>
        {/* left */}
        <div className={styles.left}>
          <button data-active="true">Nearest rides</button>
          <button>Upcoming rides (4)</button>
          <button>Past rides (2)</button>
        </div>

        {/* right */}
        <div className={styles.right}>
          <FilterIcon />
          Filter
        </div>

        <div className={styles.filterBox} data-sho>
          Filters
          <hr />
          <button>State <TriangleIcon /></button>
          <button>City <TriangleIcon /></button>
        </div>
      </div>

      {/* card container */}
      <div className={styles.cardContainer}>
        {rides.map(ride => <Card ride={ride} userStation={userStation} key={ride.id} />)}
      </div>
    </main>
  );
};


export default Homepage;