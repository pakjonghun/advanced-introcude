import { RiNextjsLine } from 'react-icons/ri';
import { SiTailwindcss } from 'react-icons/si';
import { SiMobx } from 'react-icons/si';
import { TbBrandRedux } from 'react-icons/tb';
import { FaReact } from 'react-icons/fa';
import BaseDescription from '../ui/BaseDescription/BaseDescription';
import { TbBrandGraphql } from 'react-icons/tb';
import avatar from '../../images/avatar.jpg';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiTypescript } from 'react-icons/si';
// import { RiNextjsFill } from 'react-icons/ri';
import styles from './Header.module.css';

const Header = () => {
  const iconSize = 34;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.left}>
            <BaseDescription
              title="경력요약(2년차)"
              description={
                <>
                  2024.04 ~ 현재 : 서버키트 코리아 서버키트 프론트 개발업무
                  <br />
                  2022.09 ~ 2024.03 / 1년 7개월: (주)파모즈 서버키트 프론트 개발 업무
                  <br />
                  2021.12 / 1개월 : ABC Studio 개발팀 인턴쉽
                  <br />
                  2021.09 ~ 2021.12 / 4개월 : 부트캠프 수료
                  <br />
                </>
              }
            />
          </div>
          <div className={styles.right}>
            <div className={styles.rightContainer}>
              <div className={styles.avatarContainer}>
                <img className={styles.avatar} alt="avatar" src={avatar} />
              </div>
              <BaseDescription
                title="사용해본 기술정리"
                description={
                  <>
                    <div className={`horizontal ${styles.skills}`}>
                      <IoLogoJavascript size={iconSize} />
                      <SiTypescript size={iconSize} />
                      <TbBrandGraphql size={iconSize} />
                      <FaReact size={iconSize} />
                      <RiNextjsLine size={iconSize} />
                      <TbBrandRedux size={iconSize} />
                      <SiMobx size={iconSize} />
                      <SiTailwindcss size={iconSize} />
                    </div>
                  </>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
