import { useEffect, useState } from "react";
import { Ride } from "../../utility/interface";
import Card from "./card";
import FilterIcon from "./static/filterIcon";
import styles from './styles.module.scss';

interface RidesData {
  rides: Ride[]
  filterOptions: { [key: string]: string[] }
  pastCount: number
}

const Homepage: React.FC<{ userStation: number, ridesData: RidesData }> = ({ userStation, ridesData: { rides: _rides, filterOptions = {}, pastCount } }) => {
  const [rides, setRides] = useState<Ride[]>(_rides);
  const [tab, setTab] = useState<number>(0);
  const [filterState, setFilterState] = useState<string>('state');
  const [filterCity, setFilterCity] = useState<string>('city');

  useEffect(() => {
    if (tab === 1) {
      return setRides(_rides.filter((ride: Ride) => !ride.past))
    } else if (tab === 2) {
      return setRides(_rides.filter((ride: Ride) => ride.past))
    }
    return setRides(_rides);
  }, [tab]);

  useEffect(() => {
    setRides(_rides);
    if (filterState !== 'state') {
      setRides(_rides.filter((ride: Ride) => ride.state === filterState));
    }
    if (filterCity !== 'city') {
      setRides(_rides.filter((ride: Ride) => ride.city === filterCity));
    }
  }, [filterCity, filterState]);

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
              <select onChange={(e) => {
                setFilterState(e.target.value)
                setFilterCity('city')
              }} defaultValue='state'>
                <option value='state' key='state'>no state</option>
                {Object.keys(filterOptions || {}).map(state =>
                  <option value={state} key={state}>{state}</option>
                )}
              </select>
            </div>
            {filterState !== 'state' &&
              <div className={styles.filterOption}>
                <select onChange={(e) => setFilterCity(e.target.value)} defaultValue='city'>
                  <option value='city' key='city'>no city</option>
                  {filterOptions[filterState || ""]?.map((city: string) =>
                    <option value={city} key={city}>{city}</option>
                  )}
                </select>
              </div>
            }
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