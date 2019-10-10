import Home from './views/Home.vue';

const routes = [{
  path: '/',
  component: Home,
}, {
  path: '/about',
  component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
}, {
  path: '/index/',
  component: () => import(/* webpackChunkName: "index" */ './views/index/layout.vue'),
  children: [{
    path: '',
    component: () => import(/* webpackChunkName: "index" */ './views/index/index.vue'),
  }, {
    path: 'foo',
    component: () => import(/* webpackChunkName: "index" */ './views/index/foo.vue'),
  }, {
    path: 'bar',
    component: () => import(/* webpackChunkName: "index" */ './views/index/bar.vue'),
  }],
}];

export default routes;
