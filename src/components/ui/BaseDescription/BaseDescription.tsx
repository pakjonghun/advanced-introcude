import { FC, ReactNode } from 'react';
import styles from './BaseDescription.module.css';

interface Props {
  title: ReactNode;
  description: ReactNode;
}

const BaseDescription: FC<Props> = ({ title, description }) => {
  return (
    <div>
      <h6 className="subTitle">{title}</h6>
      <div className="description">{description}</div>
    </div>
  );
};

export default BaseDescription;
