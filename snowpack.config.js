// module.exports = env => {
//   console.log(env);
//   return {
//     plugins: ['@snowpack/plugin-babel'],
//     mount: {
//       src: '/dist',
//       public: '/',
//     },
//   };
// };

const { makeWebpackConfig } = require('webpack-simple');

const myConfig = makeWebpackConfig();
console.log(`myConfig:`, myConfig);

module.exports = {
  plugins: [
    '@snowpack/plugin-babel',
    [
      '@snowpack/plugin-webpack',
      {
        extendConfig: config => {
          // console.log('config', config);
          return myConfig;
        },
      },
    ],
  ],
  mount: {
    src: '/dist',
    public: '/',
  },
};
