
module.exports = {
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
      label: 'Module 3: AI-Robot Brain (NVIDIA Isaac)',
      items: [
        'module-3/isaac-sim-data',
        'module-3/isaac-vslam',
        'module-3/nav2-planning'
      ],
      collapsed: false,
    },
    // Add more modules as they are created
  ],
};