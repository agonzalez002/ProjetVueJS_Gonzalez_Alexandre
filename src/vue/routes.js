import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    name: 'app',
    routes: [
        {
            name:'movies',
            path: '/',
            component: function (resolve) {
                require(['./components/movielist.vue'], resolve)
            }
            /*{
                template: '<div>Liste de tous les films</div>'
            }*/
        },
        {
            path: '/movies/:id/',
            component: function (resolve) {
                require(['./components/movie.vue'], resolve)
            }
            /*component: {
                template: '<div>Affichage du film {{ $route.params.id }}</div>'
            }*/
        },
        {
            path: '/movies/:id/edit/',
            component: function (resolve) {
                require(['./components/editmovie.vue'], resolve)
            }
            /*component: {
                template: '<div>Affichage de la page de modification du film</div>'
            }*/
        },
        {
            path: '/add',
            component: function (resolve) {
                require(['./components/addmovie.vue'], resolve)
            }
        }
    ]
})

export default router