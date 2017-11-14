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
      {
        path: '/',
        component: 'src/pages/Home',
      },
      {
        path: '/about',
        component: 'src/pages/About',
      },
      {
        is404: true,
        component: 'src/pages/404',
      },
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
