import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Module 1: Foundations of Physical AI',
      items: [
        'module-1/chapter-1',
        'module-1/chapter-2',
        'module-1/chapter-3'
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Module 2: Digital Twin (Gazebo & Unity)',
      items: [
        'module-2/gazebo-physics',
        'module-2/virtual-sensors',
        'module-2/unity-interaction'
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Module 3: AI-Robot Brain (NVIDIA Isaac)',
      items: [
        'module-3/isaac-sim-data',
        'module-3/isaac-vslam',
        'module-3/nav2-planning'
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Module 4: Vision-Language-Action (VLA)',
      items: [
        'module-4/whisper-voice',
        'module-4/llm-planning',
        'module-4/ros2-actions'
      ],
      collapsed: false,
    },
    // Add more modules as they are created
  ],
};

export default sidebars;
