import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '聚焦AI生产力',
    showcase: 'img/feature_01.png',
    description: (
      <>
        时信魔方定位于为 AIGC 的“集成器”，将各个 AI 任务及其对应的下游任务，业务任务进行连通，构造统一的、整体的 AI 用户体验。
        基于此各种 AI 任务可以平滑地在各个生产力场景中衔接和应用。
      </>
    ),
  },
  {
    title: '覆盖数据流',
    showcase: 'img/feature_02.png',
    description: (
      <>
        借助时信魔方的数据覆盖能力，可以为模型提供训练语料，为各个子任务提供分析要素。
        时信魔方能完成包括 App 数据采集，LLM模型操作，AIGC 任务，数据的实时收发，音视频数据的传输，以及特定场景的定制数据流传输。
      </>
    ),
  },
  {
    title: '开箱即用',
    showcase: 'img/feature_03.png',
    description: (
      <>
        时信魔方从一开始就被设计为轻量级结构，易于安装和使用，开箱即用。让您可以快速构建自己的AI应用。
        支持的操作系统：Android、HarmonyOS、iOS、Linux、macOS、Windows等，支持的浏览器：Chrome、Firefox、Safari、Edge等。
      </>
    ),
  }
];

function Feature({showcase, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={showcase} className={styles.featureImg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
