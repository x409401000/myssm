import ElementUI from 'element-ui'; /*node_modules引入了element-ui 这里就可以直接引用了*/
import 'element-ui/lib/theme-chalk/index.css'; /*node_modules引入了element-ui 这里就可以直接引用了*/
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '@/App.vue';
import router from '@/router';


Vue.config.productionTip = false

Vue.use(ElementUI);/*ElementUI 是一个插件，所以需要使用use*/
Vue.use(VueRouter);/*ElementUI 是一个插件，所以需要使用VueRouter*/
new Vue({
  render: h => h(App),
  router
}).$mount('#app')

