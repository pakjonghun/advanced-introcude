import CareerItem from '../CareerItem/CareerItem';
import { CareerType } from '../CareerItem/type';
import styles from './Career.module.css';

const Career = () => {
  const career: CareerType[] = [
    {
      title: '서버키트',
      description: (
        <>
          <span>서버키트</span>
          <span>성현 웹앱 리뉴얼작업</span>
          <span>새로운 FCM 기능 추가 및 리뉴얼</span>
          <span>백앤드 및 프론트 전반적인 프로젝트 관리업무</span>
        </>
      ),
    },
    {
      title: '서버키트',
      description: (
        <>
          <span>서버키트</span>
          <span>성현 웹앱 리뉴얼작업</span>
          <span>새로운 FCM 기능 추가 및 리뉴얼</span>
          <span>백앤드 및 프론트 전반적인 프로젝트 관리업무</span>
        </>
      ),
    },
    {
      title: '서버키트',
      description: (
        <>
          <span>서버키트</span>
          <span>성현 웹앱 리뉴얼작업</span>
          <span>새로운 FCM 기능 추가 및 리뉴얼</span>
          <span>백앤드 및 프론트 전반적인 프로젝트 관리업무</span>
        </>
      ),
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        {career.slice(0, 2).map((c, index) => {
          return (
            <CareerItem key={c.title?.toString()} career={c} index={index} />
          );
        })}
      </div>
      {/* <div className={styles.right}></div> */}
    </div>
  );
};

export default Career;
