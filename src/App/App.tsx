import { ReactNode, useEffect, useState } from 'react';
import AboutMe from '../components/AboutMe/AboutMe';
import Navigation from '../components/Navigation/Navigation';
import styles from './App.module.css';
import { navigationList } from '../constants';
import ContentBody from '../components/ContentBody/ContentBody';
import Projects from '../components/Projects/Projects';
import Header from '../components/Header/Header';

export type VerticalOffset = {
  start: number;
  end: number;
};

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [verticalOffset, setVerticalOffset] = useState<VerticalOffset[]>(
    navigationList.map(() => ({ start: 0, end: 0 }))
  );

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
    window.scrollTo({ behavior: 'smooth', top: verticalOffset[index].start ?? 0 });
  };

  const getIsSelected = (index: number) => {
    const targetVertical = verticalOffset[index];
    if (!targetVertical) {
      throw new Error('네비게이션과 바디의 섹션 숫자가 맞지 않습니다.');
    }

    return targetVertical.start <= scrollY + 240 && scrollY + 240 <= targetVertical.end;
  };

  const bodyMapper: Record<(typeof navigationList)[number], ReactNode> = {
    Header: <Header />,
    'About Me': <AboutMe />,
    Projects: <Projects />,
  };

  return (
    <main className={styles.main}>
      <Navigation
        navigationList={navigationList.concat()}
        onClickNavigation={onClickNavigation}
        getIsSelected={getIsSelected}
      />
      {navigationList.map((navigation, idx) => {
        return (
          <ContentBody
            children={bodyMapper[navigation]}
            index={idx}
            isActive={getIsSelected(idx)}
            navigation={navigation}
            setVertical={setVertical}
          />
        );
      })}
    </main>
  );
}

export default App;
