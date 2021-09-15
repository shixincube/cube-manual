
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
    component: ComponentCreator('/en/docs','4b1'),
    routes: [
      {
        path: '/en/docs/intro',
        component: ComponentCreator('/en/docs/intro','fb4'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/en/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/en/docs/tutorial-basics/congratulations','8bb'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/en/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/en/docs/tutorial-basics/create-a-blog-post','5c2'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/en/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/en/docs/tutorial-basics/create-a-document','e5b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/en/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/en/docs/tutorial-basics/create-a-page','3b3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/en/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/en/docs/tutorial-basics/deploy-your-site','50b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/en/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/en/docs/tutorial-basics/markdown-features','590'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/en/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/en/docs/tutorial-extras/manage-docs-versions','d3c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/en/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/en/docs/tutorial-extras/translate-your-site','7c7'),
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
