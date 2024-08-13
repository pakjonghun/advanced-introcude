import { RiReactjsLine } from 'react-icons/ri';
import { RiNextjsLine } from 'react-icons/ri';
import { SiTailwindcss } from 'react-icons/si';
import { SiMobx } from 'react-icons/si';
import { TbBrandRedux } from 'react-icons/tb';
import { TbBrandGraphql } from 'react-icons/tb';
import avatar from '../../images/avatar.jpg';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiTypescript } from 'react-icons/si';
import styles from './CareerItem.module.css';
import { FC } from 'react';
import { CareerType } from './type';

interface Props {
  career: CareerType;
  index: number;
}

const CareerItem: FC<Props> = ({ career: { title, description }, index }) => {
  const isOdd = index % 2;

  return (
    <div className={styles.container}>
      <div className={styles.work}>
        <div className={styles.workBox}>
          {!isOdd && (
            <div className={styles.border}>
              {title}
              {description}
            </div>
          )}
        </div>
      </div>
      <div className={styles.link}>
        <div className={styles.line}></div>
      </div>
      <div className={styles.timeLine}>
        <div className={styles.verticalLine}></div>
      </div>
      <div className={styles.link}>
        <div className={styles.lineRight}></div>
      </div>
      <div className={styles.work}>
        <div className={styles.workBox}>
          {!!isOdd && (
            <div className={styles.border}>
              {title}
              {description}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CareerItem;
