import trip from '../../images/trip.png';
import movie from '../../images/movie.png';
import trip2 from '../../images/trip2.png';
import movie2 from '../../images/movie2.png';
import healthy2 from '../../images/healthy2.png';
import healthy from '../../images/healthy.png';
import dmz from '../../images/dmz.png';
import erp from '../../images/erp.png';
import erp2 from '../../images/erp2.png';
import styles from './PhotoAlbum.module.css';

const PhotoAlbum = () => {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.gridItem}>
        <img src={erp} alt="ERP Dashboard" />
      </div>
      <div className={styles.gridItem}>
        <img src={trip2} alt="ERP Dashboard" />
      </div>
      <div className={styles.gridItem}>
        <img src={movie2} alt="ERP Dashboard" />
      </div>
      {/* <div className={styles.gridItem}>
        <img src={healthy} alt="ERP Dashboard" />
      </div> */}
      <div className={styles.gridItem}>
        <img src={healthy2} alt="ERP Dashboard" />
      </div>
      <div className={styles.gridItem}>
        <img src={trip} alt="Trip Planner" />
      </div>
      <div className={styles.gridItem}>
        <img src={dmz} alt="DMZ Experience" />
      </div>
      <div className={styles.gridItem}>
        <img src={movie} alt="Popular Movies" />
      </div>
      <div className={styles.gridItem}>
        <img src={erp2} alt="ERP2" />
      </div>
    </div>
  );
};

export default PhotoAlbum;
