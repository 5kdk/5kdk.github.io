import Heading from '@theme/Heading';
import Space from '@site/src/components/Space';
import styles from './styles.module.css';

const HomepageHeader = () => {
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <Heading as="h1" className={styles.heroTitle}>
          안녕하세요,&nbsp;
          <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>
          <br />
          프론트엔드 개발자&nbsp;
          <strong>김동규</strong>입니다.
        </Heading>
      </div>
      <Space />
    </header>
  );
};

export default HomepageHeader;
