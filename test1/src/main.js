 // VueOnsen set here as plugin to VUE. Done automatically if a call to window.Vue exists in the startup code.
 // Webpack CSS import
 import 'onsenui/css/onsenui.css';
 import 'onsenui/css/onsen-css-components.css';

 // JS import
 import Vue from 'vue';
 import App from './App.vue'
 import VueOnsen from 'vue-onsenui'; // This imports 'onsenui', so no need to import it separately

 Vue.use(VueOnsen); // VueOnsen set here as plugin to VUE. Done automatically if a call to window.Vue exists in the startup code.

 // new Vue({
 //   render: h => h(App)
 // }).$mount('#app')


 const page2 = {
   key: 'page2',
   template: '#page2'
 };

 const page1 = {
   key: 'page1',
   template: '#page1',
   methods: {
     push() {
       this.$emit('push-page', page2);
     }
   }
 };

 new Vue({
   render: h => h(App),
   el: '#app',
   template: '#main',
   data() {
     return {
       pageStack: [page2, page1]
     };
   }
 });

/*
import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
*/
