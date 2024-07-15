import { FC, ReactNode, useEffect, useRef } from 'react';
import { VerticalOffset } from '../../App/App';
import styles from './ContentBody.module.css';

interface Props {
  index: number;
  setVertical: (index: number, vertical: VerticalOffset) => void;
  children: ReactNode;
}

const ContentBody: FC<Props> = ({ setVertical, index, children }) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const target = elementRef.current;

    setVertical(index, {
      start: target.offsetTop,
      end: target.offsetTop + target.clientHeight,
    });
  }, []);

  const isDark = false;
  // const isDark = index % 2 !== 0;

  return (
    <section ref={elementRef} className={`${styles.container} ${isDark && styles.dark}`}>
      <div className={`${styles.children} ${isDark && styles.dark}`}>{children}</div>
    </section>
  );
};

export default ContentBody;
