import { FC, ReactNode, useEffect, useRef } from 'react';
import { navigationList } from '../../constants';
import { VerticalOffset } from '../../App/App';
import SectionTitle from '../ui/SectionTitle/SectionTitle';
import styles from './ContentBody.module.css';

interface Props {
  index: number;
  isActive: boolean;
  setVertical: (index: number, vertical: VerticalOffset) => void;
  navigation: (typeof navigationList)[number];
  children: ReactNode;
}

const ContentBody: FC<Props> = ({ navigation, setVertical, index, isActive, children }) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const target = elementRef.current;

    setVertical(index, { start: target.offsetTop, end: target.offsetTop + target.clientHeight });
  }, []);

  const isDark = index % 2 !== 0;

  return (
    <section ref={elementRef} className={`${styles.container} ${isDark && styles.dark}`}>
      <SectionTitle isDark={isDark} isActive={isActive} title={navigation} />
      <div className={`${styles.children} ${isDark && styles.dark}`}>{children}</div>
    </section>
  );
};

export default ContentBody;
