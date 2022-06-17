import { useEffect, useMemo, useState } from "react";
import { Ride } from "../../utility/interface";
import Card from "./card";
import FilterIcon from "./static/filterIcon";
import TriangleIcon from "./static/triangleIcon";
import styles from './styles.module.scss';

interface RidesData {
  rides: Ride[]
  filterOptions: { [key: string]: string[] }
  pastCount: number
}

const Homepage: React.FC<{ userStation: number, ridesData: RidesData }> = ({ userStation, ridesData: { rides: _rides, filterOptions = {}, pastCount } }) => {
  const [rides, setRides] = useState<Ride[]>(_rides);
  const [tab, setTab] = useState<number>(0);
  const [filterState, setFilterState] = useState<string | null>(null);
  const [filterCity, setFilterCity] = useState<string | null>(null);

  useEffect(() => {
    if (tab === 1) {
      return setRides(_rides.filter((ride: Ride) => !ride.past))
    } else if (tab === 2) {
      return setRides(_rides.filter((ride: Ride) => ride.past))
    }
    return setRides(_rides);
  }, [tab]);

  useEffect(() => {
    if (filterCity) {
      return setRides(_rides.filter((ride: Ride) => ride.city === filterCity))
    }
    return setRides(_rides);
  }, [filterCity]);

  return (
    <main className={styles.main}>
      <div className={styles.interactions}>
        {/* left */}
        <div className={styles.left}>
          <button data-active={tab === 0} onClick={() => setTab(0)}>Nearest rides</button>
          <button data-active={tab === 1} onClick={() => setTab(1)}>Upcoming rides ({_rides.length - pastCount})</button>
          <button data-active={tab === 2} onClick={() => setTab(2)}>Past rides ({pastCount})</button>
        </div>

        {/* right */}
        <div className={styles.right}>
          <button>
            <FilterIcon />
            Filter
          </button>
          {/* {showFilterBox && */}
          <div className={styles.filterBox}>
            Filters
            <hr />
            <div className={styles.filterOption}>
              <button>State <TriangleIcon /></button>
              <ul>
                {Object.keys(filterOptions || {}).map(state =>
                  <li data-selected={state === filterState} key={state} onClick={() => setFilterState(state)}>{state}</li>
                )}
              </ul>
            </div>
            <div className={styles.filterOption}>
              <button>City <TriangleIcon /></button>
              <ul>
                {filterOptions !== null && filterState &&
                  filterOptions[filterState || ""]?.map((city: string) =>
                    <li data-selected={city === filterCity} key={city} onClick={() => setFilterCity(city)}>{city}</li>
                  )
                }
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* card container */}
      <div className={styles.cardContainer}>
        {rides.map((ride, i) => <Card ride={ride} userStation={userStation} key={ride.id + '' + i} />)}
      </div>
    </main>
  );
};


export default Homepage;