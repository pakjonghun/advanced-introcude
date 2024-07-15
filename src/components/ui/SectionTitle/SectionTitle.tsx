import { FC } from 'react';
import styles from './SectionTitle.module.css';
import useTypingText from '../../../hooks/useTypingText';
import { navigationList } from '../../../constants';

interface Props {
  pageIndex: number;
  title: string;
  onClickMenu: (index: number) => void;
  isDark?: boolean;
}

const SectionTitle: FC<Props> = ({ pageIndex, title, onClickMenu, isDark = false }) => {
  const isActive = navigationList[pageIndex] === title;

  const typingTitle = useTypingText({ title, isActive });

  return (
    <header className={styles.header}>
      <h5 className={`${styles.title} ${isDark && styles.dark}`}>{typingTitle.toUpperCase()}</h5>
      <ul className={styles.navigation}>
        {navigationList.map((item, idx) => {
          const isSelected = title === item;
          return (
            <li
              onClick={() => onClickMenu(idx)}
              className={`${styles.item} ${isSelected && styles.selected}`}
              key={`header_${item}`}
            >
              {item.toUpperCase()}
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default SectionTitle;
