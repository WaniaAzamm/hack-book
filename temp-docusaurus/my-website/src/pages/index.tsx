import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroTextContainer}>
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="/docs/intro">
              Start Learning - 5min ⏱️
            </Link>
            <Link
              className="button button--secondary button--lg margin-left--md"
              to="/docs/module-1/chapter-1">
              Explore Modules
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function HomepageAbout() {
  return (
    <section className={styles.aboutSection}>
      <div className="container">
        <div className="row">
          <div className="col col--12 text--center">
            <Heading as="h2" className={styles.aboutTitle}>
              The Future of Robotics Education
            </Heading>
            <p className={styles.aboutDescription}>
              This comprehensive textbook bridges the gap between theoretical AI concepts and practical robotics applications.
              Learn how to build intelligent, physical AI systems that interact with the real world through advanced humanoid robots.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomepageCallToAction() {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className="row">
          <div className="col col--12 text--center">
            <Heading as="h2" className={styles.ctaTitle}>
              Ready to Build the Future?
            </Heading>
            <p className={styles.ctaDescription}>
              Start your journey into Physical AI and Humanoid Robotics today
            </p>
            <div className={styles.ctaButtons}>
              <Link
                className="button button--primary button--lg"
                to="/docs/intro">
                Begin Your Journey
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Comprehensive textbook on Physical AI & Humanoid Robotics">
      <HomepageHeader />
      <main>
        <HomepageAbout />
        <HomepageFeatures />
        <HomepageCallToAction />
      </main>
    </Layout>
  );
}
