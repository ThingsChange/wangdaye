import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routeList';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
});
router.onError((error) => {
  const pattern = /Loading chunk (\d|\w)+ failed/g;
  const isChunkLoadFailed = error?.message?.match(pattern);
  const targetPath = router.history.pending.fullPath;
  let times = $ss.get('FD_CMD') || 0
  if (isChunkLoadFailed && times < 1) {
    $ss.set('FD_CMD', times++)
    router.replace({ path: targetPath, query: { fdRefreshTime: new Date().getTime() } });
  } else if (times === 1) {
    $cam('你大爷还是你大爷');
  }
});

export default router;
