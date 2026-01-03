import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
  icon?: string; // Optional icon class for Font Awesome or similar
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Physical AI Foundations',
    description: (
      <>
        Explore the fundamental concepts that bridge artificial intelligence and physical systems.
        Learn how AI algorithms interact with the real world through sensors, actuators, and control systems.
      </>
    ),
  },
  {
    title: 'Digital Twin Technologies',
    description: (
      <>
        Master simulation environments using Gazebo and Unity for creating accurate digital replicas
        of physical robotic systems. Test and validate your AI algorithms in safe virtual environments.
      </>
    ),
  },
  {
    title: 'NVIDIA Isaac Platform',
    description: (
      <>
        Leverage the power of NVIDIA Isaac for developing sophisticated robot brains.
        Implement SLAM, navigation, and planning algorithms for autonomous robotic systems.
      </>
    ),
  },
  {
    title: 'Vision-Language-Action',
    description: (
      <>
        Build intelligent systems that can perceive, understand, and act.
        Integrate computer vision, natural language processing, and robotic control for advanced AI capabilities.
      </>
    ),
  },
  {
    title: 'ROS2 Integration',
    description: (
      <>
        Connect your AI systems with the Robot Operating System for seamless communication
        between different robotic components and modules.
      </>
    ),
  },
  {
    title: 'Academic Rigor',
    description: (
      <>
        All content follows academic standards with peer-reviewed research,
        reproducible experiments, and proper citations for educational excellence.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <div className={styles.featureIcon}>
          <svg className={styles.featureSvg} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
