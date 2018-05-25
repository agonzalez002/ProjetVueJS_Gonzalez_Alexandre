import Vue from 'vue' //librairie "vue" dans node_modules
import router from './routes.js'
import store from './store.js'
import MovieItemComponent from './components/movieitem.vue'
import App from './app.vue'

Vue.component('movie-item', MovieItemComponent);

require('../static/css/style.css');

new Vue({
    el:'#app',
    router,
    store,
    render: h => h(App)
})