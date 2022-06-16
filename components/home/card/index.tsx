import styles from './styles.module.scss';

const Card: React.FC = () => {
    return (
        <div className={styles.card}>
            <img src="https://picsum.photos/200" />
            {/* details */}
            <div className={styles.details}>
                <p>Ride Id: <span>002</span></p>
                <p>Origin Station: <span>20</span></p>
                <p>station_path Id: <span>[002]</span></p>
                <p>Date: <span>002</span></p>
                <p>Distance: <span>0</span></p>
            </div>
            <div className={styles.filters}>
                <p>City Name</p>
                <p>State Name</p>
            </div>
        </div>
    );
};


export default Card;