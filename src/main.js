import Vue from 'vue'
// import '@/plugins/flexible'
import '@/plugins/rem'
import FastClick from 'fastclick';
import router from './routes';

import storage from './plugins/storage';
import Root from './Root';
import App from "./pages/layout";


document.addEventListener('DOMContentLoaded', () => {
  FastClick.attach(document.body);
}, false);

FastClick.prototype.focus = (targetElement) => {
  let length;
  const deviceIsIOS = /\(i[^;]+;( U;)? CPU.+Mac OS X/.test(window.navigator.userAgent);
  if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
    length = targetElement.value.length;
    targetElement.focus();
    targetElement.setSelectionRange(length, length);
  } else {
    targetElement.focus();
  }
};

Vue.config.productionTip = false
Vue.use(storage);

new Vue({
  render: (h) => h(Root),
  router,
}).$mount('#app')
