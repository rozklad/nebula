import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/components/Dashboard';
import Asset from '@/components/Asset';
import Rundown from '@/components/Rundown';
import Scheduler from '@/components/Scheduler';
import Jobs from '@/components/Jobs';
import Reports from '@/components/Reports';
import System from '@/components/System';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/asset/',
      name: 'Asset',
      component: Asset,
    },
    {
      path: '/rundown/',
      name: 'Rundown',
      component: Rundown,
    },
    {
      path: '/scheduler/',
      name: 'Scheduler',
      component: Scheduler,
    },
    {
      path: '/jobs/',
      name: 'Jobs',
      component: Jobs,
    },
    {
      path: '/reports/',
      name: 'Reports',
      component: Reports,
    },
    {
      path: '/system/',
      name: 'System',
      component: System,
    },
  ],
});
