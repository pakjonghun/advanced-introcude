import styles from './AboutMe.module.css';
import BaseDescription from '../ui/BaseDescription/BaseDescription';

const AboutMe = () => {
  return (
    <>
      <div className={styles.content}>
        <div className={`${styles.card} ${styles.left}`}>
          <BaseDescription
            title="꾸준히 개발하며 학습 합니다."
            description={
              <>
                <span>그동안 진행해 온 프로젝트 저장소</span>
                <a
                  rel="noreferrer"
                  target="_blank"
                  className={styles.link}
                  href="https://github.com/pakjonghun"
                >
                  링크
                </a>
                <br />
                <span>TIL 기록</span>
                <a
                  rel="noreferrer"
                  target="_blank"
                  className={styles.link}
                  href="https://github.com/pakjonghun/til"
                >
                  링크
                </a>
              </>
            }
          />
        </div>
        <div className={`${styles.card} ${styles.center}`}>
          <BaseDescription
            title="다방면으로 소통하기위해 노력합니다."
            description={
              <>
                <span>클라이언트와 소통하기 위한 전산 사용 설명서</span>
                <a
                  rel="noreferrer"
                  target="_blank"
                  className={styles.link}
                  href="https://loving-robin-3c0.notion.site/1326cc27e5514a4992ea118b374c71b3"
                >
                  링크
                </a>
                <br />
                <span>사이드 프로젝트에서 백앤드 개발자와 소통 하기 위해 정리한 학습내용</span>
                <a
                  rel="noreferrer"
                  target="_blank"
                  className={styles.link}
                  href="https://stitch-saw-c14.notion.site/43ab8c9cecb64cf981bd10609024a071?pvs=4"
                >
                  링크
                </a>
              </>
            }
          />
        </div>
        <div className={`${styles.card} ${styles.right}`}>
          <BaseDescription
            title="끊임없이 문제를 인식하고 해결하기 위해 노력합니다."
            description={
              <>
                <span>canvas 랜더링 성능 개선내용 정리</span>
                <a
                  rel="noreferrer"
                  target="_blank"
                  className={styles.link}
                  href="https://loving-robin-3c0.notion.site/fabric-canvas-d1a7ecf3c56241beb6cb21d59c2f98f9"
                >
                  링크
                </a>
                <br />
                <span>오버패칭 언더패칭 해결을 위한 Graphql 적용 </span>
                <a
                  rel="noreferrer"
                  target="_blank"
                  className={styles.link}
                  href="https://github.com/pakjonghun/pet-erp-fe"
                >
                  링크
                </a>
              </>
            }
          />
        </div>
      </div>
    </>
  );
};

export default AboutMe;
