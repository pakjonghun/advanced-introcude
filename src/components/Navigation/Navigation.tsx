import { FC } from 'react';
import styles from './Navigation.module.css';

interface Props {
  navigationList: string[];
  getIsSelected: (index: number) => boolean;
  onClickNavigation: (index: number) => void;
}

const Navigation: FC<Props> = ({ navigationList, getIsSelected, onClickNavigation }) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {navigationList.map((navigation, index) => {
          const isSelected = getIsSelected(index);
          return (
            <li
              onClick={() => onClickNavigation(index)}
              className={`${styles.item} ${isSelected && styles.selected}`}
              key={navigation}
            >
              <span>{navigation.toUpperCase()}</span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
