import { RiReactjsLine } from 'react-icons/ri';
import { RiNextjsLine } from 'react-icons/ri';
import { SiTailwindcss } from 'react-icons/si';
import { SiMobx } from 'react-icons/si';
import { TbBrandRedux } from 'react-icons/tb';
import { TbBrandGraphql } from 'react-icons/tb';
import avatar from '../../images/avatar.jpg';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiTypescript } from 'react-icons/si';
import styles from './IntroduceMe.module.css';

const IntroduceMe = () => {
  const iconSize = 24;
  const iconColor = '#333333';

  return (
    <>
      <div className={styles.container}>
        <div className={styles.cardContainer}>
          <h5 className="title">
            안녕하세요
            <br />
            박정훈 입니다.
          </h5>
          <h6>
            함께 문제를 고민, 해결하며,
            <br /> 계속 성장하는 프론트앤드 개발자 입니다.
          </h6>

          <div className={`horizontal ${styles.skills}`}>
            <IoLogoJavascript color={iconColor} size={iconSize + 2} />
            <SiTypescript color={iconColor} size={iconSize} />
            <TbBrandGraphql color={iconColor} size={iconSize} />
            <RiReactjsLine color={iconColor} size={iconSize} />
            <RiNextjsLine color={iconColor} size={iconSize} />
            <TbBrandRedux color={iconColor} size={iconSize} />
            <SiMobx color={iconColor} size={iconSize} />
            <SiTailwindcss color={iconColor} size={iconSize} />
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
    </>
  );
};

export default IntroduceMe;
