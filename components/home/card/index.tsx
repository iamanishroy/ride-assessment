import { Ride } from '../../../utility/interface';
import styles from './styles.module.scss';
import date from 'date-and-time';
import ordinal from 'date-and-time/plugin/ordinal';

date.plugin(ordinal);

/**
 * getNearestStation
 * distance
 */

const Card: React.FC<{ ride: Ride, userStation: number }> = ({ ride, userStation }) => {
    return (
        <div className={styles.card} key={ride.id}>
            <img src="https://picsum.photos/200" />
            {/* details */}
            <div className={styles.details}>
                <p>Ride Id: <span>{ride.id}</span></p>
                <p>Origin Station: <span>{ride.origin_station_code}</span></p>
                <p>station_path Id: <span>{JSON.stringify(ride.station_path)}</span></p>
                <p>Date: <span>{date.format(date.parse(ride.date, 'MM/DD/YYYY hh:mm A'), 'DDD MMM YYYY HH:mm')}</span></p>
                <p>Distance: <span>{Math.abs(ride.closest_station - userStation)}</span></p>
            </div>
            <div className={styles.filters}>
                <p>{ride.city}</p>
                <p>{ride.state}</p>
            </div>
        </div>
    );
};


export default Card;