
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/en/',
    component: ComponentCreator('/en/','b38'),
    exact: true
  },
  {
    path: '/en/blog',
    component: ComponentCreator('/en/blog','9bd'),
    exact: true
  },
  {
    path: '/en/blog/archive',
    component: ComponentCreator('/en/blog/archive','133'),
    exact: true
  },
  {
    path: '/en/blog/tags',
    component: ComponentCreator('/en/blog/tags','1b8'),
    exact: true
  },
  {
    path: '/en/blog/tags/diary',
    component: ComponentCreator('/en/blog/tags/diary','6ad'),
    exact: true
  },
  {
    path: '/en/blog/tags/welcome',
    component: ComponentCreator('/en/blog/tags/welcome','6fb'),
    exact: true
  },
  {
    path: '/en/blog/welcome',
    component: ComponentCreator('/en/blog/welcome','c28'),
    exact: true
  },
  {
    path: '/en/docs/tags',
    component: ComponentCreator('/en/docs/tags','0af'),
    exact: true
  },
  {
    path: '/en/intro',
    component: ComponentCreator('/en/intro','3ae'),
    exact: true
  },
  {
    path: '/en/markdown-page',
    component: ComponentCreator('/en/markdown-page','ecf'),
    exact: true
  },
  {
    path: '/en/showcase',
    component: ComponentCreator('/en/showcase','800'),
    exact: true
  },
  {
    path: '/en/docs',
    component: ComponentCreator('/en/docs','f5f'),
    routes: [
      {
        path: '/en/docs/intro',
        component: ComponentCreator('/en/docs/intro','fb4'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];