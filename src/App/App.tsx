import { ReactNode, useEffect, useState } from 'react';
import AboutMe from '../components/AboutMe/AboutMe';
import styles from './App.module.css';
import { navigationList } from '../constants';
import Projects from '../components/Projects/Projects';
import Header from '../components/Header/Header';
import SectionTitle from '../components/ui/SectionTitle/SectionTitle';
import ContentBody from '../components/ContentBody/ContentBody';

export type VerticalOffset = {
  start: number;
  end: number;
};

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [verticalOffset, setVerticalOffset] = useState<VerticalOffset[]>(
    navigationList.map(() => ({ start: 0, end: 0 }))
  );

  const pageIndex = verticalOffset.findIndex(({ start, end }) => {
    const scrollTop = scrollY + 61 + 290;
    return end >= scrollTop && scrollTop >= start;
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const setVertical = (index: number, verticalOffset: VerticalOffset) => {
    setVerticalOffset((prev) => {
      const clonedList = prev.concat();
      clonedList[index] = verticalOffset;
      return clonedList;
    });
  };

  const onClickNavigation = (index: number) => {
    let scroll = verticalOffset[index].start - 61 ?? 0;
    if (!index) {
      scroll = 0;
    }

    window.scrollTo({ behavior: 'smooth', top: scroll });
  };

  const bodyMapper: Record<(typeof navigationList)[number], ReactNode> = {
    경력요약: <Header />,
    성장발전: <AboutMe />,
    프로젝트: <Projects />,
  };

  return (
    <div className={styles.container}>
      <SectionTitle
        pageIndex={pageIndex}
        onClickMenu={onClickNavigation}
        title={navigationList[pageIndex]}
      />
      <main className={styles.main}>
        {navigationList.map((navigation, idx) => {
          return (
            <ContentBody
              key={`${idx}_${navigation}`}
              children={bodyMapper[navigation]}
              index={idx}
              setVertical={setVertical}
            />
          );
        })}
      </main>
    </div>
  );
}

export default App;
