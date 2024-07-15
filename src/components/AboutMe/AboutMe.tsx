import { FaPeopleCarry } from 'react-icons/fa';
import { FaPersonRunning } from 'react-icons/fa6';
import { MdOutlineAutoFixHigh } from 'react-icons/md';
import styles from './AboutMe.module.css';

const AboutMe = () => {
  const iconSize = 30;
  const iconColor = '#666666';

  return (
    <div className={styles.content}>
      <div className={`${styles.card} ${styles.left}`}>
        <div className={styles.cardContainer}>
          <div className={styles.headerTitle}>
            <h5 className="title">{'꾸준함'}</h5>
            <FaPersonRunning color={iconColor} size={iconSize} />
          </div>

          <div className={styles.contentContainer}>
            <h6 className={styles.desc}>{'꾸준한 개발진행'}</h6>
            <a
              className={styles.link}
              rel="noreferrer"
              target="_blank"
              href="https://github.com/pakjonghun"
            >
              저장소
            </a>
          </div>
          <div className={styles.contentContainer}>
            <h6 className={styles.desc}>{'꾸준한 회고'}</h6>
            <a
              rel="noreferrer"
              target="_blank"
              className={styles.link}
              href="https://github.com/pakjonghun/til"
            >
              TIL
            </a>
          </div>
        </div>
      </div>
      <div className={`${styles.card} ${styles.center}`}>
        <div className={styles.cardContainer}>
          <div className={styles.headerTitle}>
            <h5 className="title">{'소통'}</h5>
            <FaPeopleCarry color={iconColor} size={iconSize} />
          </div>
          <div className={styles.contentContainer}>
            <h6 className={styles.desc}>{'클라이언트와 소통'}</h6>
            <a
              className={styles.link}
              rel="noreferrer"
              target="_blank"
              href="https://loving-robin-3c0.notion.site/1326cc27e5514a4992ea118b374c71b3?pvs=4"
            >
              사용설명서
            </a>
          </div>
          <div className={styles.contentContainer}>
            <h6 className={styles.desc}>{'백앤드와 소통'}</h6>
            <a
              rel="noreferrer"
              target="_blank"
              className={styles.link}
              href="https://stitch-saw-c14.notion.site/43ab8c9cecb64cf981bd10609024a071?pvs=4"
            >
              팀프로젝트
            </a>
          </div>
        </div>
      </div>
      <div className={`${styles.card} ${styles.right}`}>
        <div className={styles.cardContainer}>
          <div className={styles.headerTitle}>
            <h5 className="title">{'문제해결'}</h5>
            <MdOutlineAutoFixHigh color={iconColor} size={iconSize} />
          </div>
          <div className={styles.contentContainer}>
            <h6 className={styles.desc}>{'성능개선'}</h6>
            <a
              className={styles.link}
              rel="noreferrer"
              target="_blank"
              href="https://loving-robin-3c0.notion.site/fabric-canvas-d1a7ecf3c56241beb6cb21d59c2f98f9"
            >
              보드 성능개선
            </a>
          </div>
          <div className={styles.contentContainer}>
            <h6 className={styles.desc}>{'통신 최적화'}</h6>
            <a
              rel="noreferrer"
              target="_blank"
              className={styles.link}
              href="https://github.com/pakjonghun/pet-erp-fe/blob/main/http/graphql/client.ts"
            >
              Graphql적용
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
