import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Utils from '@/utils/mixin.js'

//animals.css
// import animated from 'animate.css'
import animated from 'animate.css'

//例子特效
import VueParticles from 'vue-particles'

Vue.use(VueParticles)


//初始化elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//全局初始化scss样式@代表src样式
import '@/assets/css/reset.scss';


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
