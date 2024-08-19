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
  const isEven = index % 2 == 0;

  return (
    <div
      className={`${styles.container} ${isEven ? styles.even : styles.odd} `}
    >
      <div className={styles.content}>
        <h5>{title}</h5>
        {description}
      </div>
    </div>
  );
};

export default CareerItem;
