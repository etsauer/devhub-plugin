import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { ocpDiscoveryPlugin, OcpDiscoveryPage } from '../src/plugin';

createDevApp()
  .registerPlugin(ocpDiscoveryPlugin)
  .addPage({
    element: <OcpDiscoveryPage />,
    title: 'Root Page',
    path: '/ocp-discovery',
  })
  .render();
