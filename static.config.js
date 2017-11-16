import axios from 'axios'
import path from 'path'

export default {
  getSiteProps: () => ({
    title: 'Aragon',
  }),
  getRoutes: async () => {
    const { data: posts } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    )
    return [
      { path: '/', component: 'src/pages/Home' },
      { path: '/core', component: 'src/pages/Core' },
      { path: '/network', component: 'src/pages/Network' },
      { path: '/foundation', component: 'src/pages/Foundation' },
      { path: '/about', component: 'src/pages/About' },
      { path: '/join', component: 'src/pages/Join' },
      { is404: true, component: 'src/pages/NotFound' },
    ]
  },
  webpack: (conf, { stage, loaders = {} }) => {
    // Extends resolve.modules and resolveLoader.modules
    return conf
    return ['resolve', 'resolveLoader'].reduce(
      (conf, resolve) => ({
        ...conf,
        [resolve]: {
          ...(conf[resolve] || {}),
          modules: [
            ...((conf[resolve] || {}).modules || [
              // When creating `modules`, we need to ensure
              // that the default value is included.
              'node_modules',
            ]),
            path.join(__dirname, 'node_modules/@aragon/ui/node_modules'),
          ],
        },
      }),
      conf
    )
  },
}
