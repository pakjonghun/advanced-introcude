import { RiReactjsLine } from 'react-icons/ri';
import { RiNextjsLine } from 'react-icons/ri';
import { SiTailwindcss } from 'react-icons/si';
import { SiMobx } from 'react-icons/si';
import { TbBrandRedux } from 'react-icons/tb';
import { TbBrandGraphql } from 'react-icons/tb';
import avatar from '../../images/avatar.jpg';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiTypescript } from 'react-icons/si';
import styles from './Header.module.css';

const Header = () => {
  const iconSize = 24;
  const iconColor = '#333333';

  return (
    <>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles.cardContainer}>
              <h5 className="title">{'프론트 개발(2년차)'}</h5>
              <div className={styles.card}>
                <div>
                  <h6 className={styles.company}>
                    서버키트 코리아(파모즈에서 분리){' '}
                    <span className={styles.date}>2024.04 ~ 현재</span>
                  </h6>
                  <p></p>
                  <p>자사 서비스 사용성 개선 및 최적화</p>
                </div>
              </div>

              <div className={styles.card}>
                <div>
                  <h6 className={styles.company}>
                    (주)파모즈<span className={styles.date}>2022.09 ~ 2024.03 / 1년 7개월</span>
                  </h6>
                  <p>(주)성현 근태관리 어드민 웹 개발</p>
                  <p>현대 러닝 센터 어드민 웹 개발</p>
                  <p>DMZ 전망대 스카트 체험존 웹앱 개발</p>
                  <p>자사 서비스 리뉴얼</p>
                </div>
              </div>
              <div className={styles.card}>
                <h6 className={styles.company}>
                  부트캠프 수료<span className={styles.date}>2021.09 ~ 2021.12 / 4개월</span>
                </h6>
              </div>
              <div className={`horizontal ${styles.skills}`}>
                <IoLogoJavascript color={iconColor} size={iconSize} />
                <SiTypescript color={iconColor} size={iconSize} />
                <TbBrandGraphql color={iconColor} size={iconSize} />
                <RiReactjsLine color={iconColor} size={iconSize} />
                <RiNextjsLine color={iconColor} size={iconSize} />
                <TbBrandRedux color={iconColor} size={iconSize} />
                <SiMobx color={iconColor} size={iconSize} />
                <SiTailwindcss color={iconColor} size={iconSize} />
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.rightContainer}>
              <div className={styles.avatarContainer}>
                <img className={styles.avatar} alt="avatar" src={avatar} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
