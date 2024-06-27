import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const ocpDiscoveryPlugin = createPlugin({
  id: 'ocp-discovery',
  routes: {
    root: rootRouteRef,
  },
});

export const OcpDiscoveryPage = ocpDiscoveryPlugin.provide(
  createRoutableExtension({
    name: 'OcpDiscoveryPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
