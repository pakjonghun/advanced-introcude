import { FC, ReactNode } from 'react';
import styles from './BaseDescription.module.css';

interface Props {
  title: ReactNode;
  description: ReactNode;
}

const BaseDescription: FC<Props> = ({ title, description }) => {
  return (
    <div className={`horizontal ${styles.content}`}>
      <h6 className="subTitle">{title}</h6>
      <p className="description">{description}</p>
    </div>
  );
};

export default BaseDescription;
