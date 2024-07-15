import styles from './Projects.module.css';
import PhotoAlbum from '../PhotoAlbum/PhotoAlbum';

const Projects = () => {
  return (
    <div className={styles.container}>
      <div className={styles.projectCenter}>
        <div className={styles.projectContentContainer}>
          <h5 className={`title ${styles.projectTitle}`}>{'재고, 판매관리 ERP'}</h5>
          <p className={styles.alignLeft}>제품 판매 및 재고관리를 위한 웹 프로젝트 입니다.</p>
          <p className={styles.alignLeft}>클라이언트 요청에 지속적으로 대응하고 있습니다.</p>
          <p className={styles.alignLeft}>FE : typescript, nextjs, graphql, material UI</p>
          <p className={styles.alignLeft}>BE : nestjs, mongodb</p>
          <p className={styles.alignLeft}>DEVOPS : atlas, elastic beanstalk, vercel</p>

          <div className={styles.card}>
            <h6 className={styles.company}>저장소</h6>
            <a
              href="https://github.com/pakjonghun/pet-erp-fe"
              rel="noreferrer"
              target="_blank"
              className={styles.link}
            >
              프론트
            </a>
            <a
              href="https://github.com/pakjonghun/pet-erp-be"
              rel="noreferrer"
              target="_blank"
              className={styles.link}
            >
              백앤드
            </a>
          </div>
          <div className={styles.albumContainer}>
            <h5>{'다른 프로젝트 이미지 모음'}</h5>
            <PhotoAlbum />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
