import BaseDescription from '../ui/BaseDescription/BaseDescription';
import styles from './Projects.module.css';
import PhotoAlbum from '../PhotoAlbum/PhotoAlbum';

const Projects = () => {
  return (
    <div className={styles.container}>
      <div className={styles.albumContainer}>
        <PhotoAlbum />
      </div>
      <div className={styles.projectCenter}>
        <BaseDescription
          title="재고, 판매 관리 ERP"
          description={
            <div className={styles.erpLink}>
              <a
                href="https://github.com/pakjonghun/pet-erp-fe"
                rel="noreferrer"
                target="_blank"
                className={styles.link}
              >
                FELink
              </a>
              <span>/</span>
              <a
                href="https://github.com/pakjonghun/pet-erp-be"
                rel="noreferrer"
                target="_blank"
                className={styles.link}
              >
                BELink
              </a>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Projects;
