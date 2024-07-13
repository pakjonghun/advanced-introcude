import { FC } from 'react';
import styles from './SectionTitle.module.css';
import useTypingText from '../../../hooks/useTypingText';

interface Props {
  title: string;
  isActive?: boolean;
  isDark?: boolean;
}

const SectionTitle: FC<Props> = ({ title, isDark = false, isActive = true }) => {
  const typingTitle = useTypingText({ title, isActive });

  return (
    <header className={styles.header}>
      <h5 className={`${styles.title} ${isDark && styles.dark}`}>{typingTitle.toUpperCase()}</h5>
    </header>
  );
};

export default SectionTitle;
