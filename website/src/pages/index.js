import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import HomepageShowcases from '../components/HomepageShowcases';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner, styles.cubeIndex)}>
      <div className="container">
        <div className={styles.cubeLogo}><img src="img/cube_256.png"></img></div>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/intro">
            3分钟了解魔方
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="开源,开源软件,AIGC,GPT,LLM,ChatGPT,即时通信,IM,实时通信,视频会议,音视频通话,SDK,多人协作,聊天软件,WebRTC,RTC">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageShowcases />
      </main>
    </Layout>
  );
}
