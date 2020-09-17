module.exports = {
  plugins: ['@snowpack/plugin-babel'],
  mount: {
    src: '/dist',
    public: '/',
  },
};
