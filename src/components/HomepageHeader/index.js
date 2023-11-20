import styles from './styles.module.css';

const HomepageHeader = () => {
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <h1 className={styles.heroTitle}>
          안녕하세요,&nbsp;
          <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code> 한
          <br />
          프론트엔드 개발자&nbsp;
          <strong>김동규</strong>입니다.
        </h1>
      </div>
    </header>
  );
};

export default HomepageHeader;
