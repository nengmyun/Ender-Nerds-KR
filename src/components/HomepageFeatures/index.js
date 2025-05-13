import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '전문적인 디자인',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        저희 제품은 숙련된 크리에이터들이 디자인합니다.
        저희의 창작물은 열정과 사랑으로 가득 차 있습니다.
      </>
    ),
  },
  {
    title: '신속한 도움',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        필요한 정보를 즉시 얻으려면 설명서를 확인하세요.
      </>
    ),
  },
  {
    title: '디스코드',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        아직도 이해가 되지 않는 점이 있다면,
        Discord에 가입하세요.
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
