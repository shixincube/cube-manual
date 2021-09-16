import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '简单易用',
    showcase: 'img/feature_01.png',
    description: (
      <>
        时信魔方从一开始就被设计为轻量级 SDK ，易于安装和使用，让您可以快速构建自己的应用。
        支持的操作系统：Windows、Linux 、macOS 、Android、iOS 等，支持的浏览器：Chrome、Firefox、Safari 等。
      </>
    ),
  },
  {
    title: '聚焦通讯',
    showcase: 'img/feature_02.png',
    description: (
      <>
        时信魔方的核心任务就是”通讯“，所有功能都聚焦在高效、稳定并安全地完成通讯任务上。
        从核心的传输协议、存储机制、网络拓扑架构都服务于通讯任务。开发者和应用者只需要关注业务逻辑如何达成，数据通讯与安全交由魔方完成。
      </>
    ),
  },
  {
    title: '功能丰富',
    showcase: 'img/feature_03.png',
    description: (
      <>
        时信魔方能完成包括文本、文件数据的实时收发，基于 RTC 技术的音视频数据的传输，以及特定场景的定制数据流传输。
        同时，配套包括数据链路安全功能，存储安全管理功能，以及在实际应用中的风控管理能力。
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
