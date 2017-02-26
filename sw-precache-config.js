module.exports = {
  navigateFallback: '/index.html',
  stripPrefix: 'dist',
  root: 'dist/',
  staticFileGlobs: [
    'dist/index.html',
    'dist/**.js',
    'dist/**.css',
    'dist/**.woff2'
  ]
  // runtimeCaching: [
  //   {
  //     urlPattern: /\/api\/post\//,
  //     handler: 'networkFirst',
  //     options: {
  //       cache: {
  //         maxEntries: 10,
  //         name: 'api-cache'
  //       }
  //     }
  //   }
  // ]
};
