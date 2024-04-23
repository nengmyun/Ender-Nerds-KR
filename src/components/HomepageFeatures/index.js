import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '전문적인 디자인',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        저희의 제품은 전문가가 디자인합니다.
        해당 제품들은 저희의 열정과 사랑에 힘입어 만들어집니다.
      </>
    ),
  },
  {
    title: '빠른 도움',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        설치 및 사용 방법은 설명서를 확인해보세요.
      </>
    ),
  },
  {
    title: '디스코드',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        설명서로도 이해되지 않는 것들은 디스코드에서 물어보세요!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
