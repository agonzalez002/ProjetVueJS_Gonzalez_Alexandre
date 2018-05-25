<template>
    <div class="list-film">
        <div class="btns">
            <span class="btn" @click="goAdd">Ajouter un nouveau film</span>
        </div>
        <ul class="film">
            <li v-for="item in movies.movies" @click="go(item.id)">
                <img v-if="item.titre !== ''" class="affiche" v-bind:src="item.affiche">
            </li>
        </ul>
       <!-- <movie.vue-item  v-bind:key="item.titre" v-bind:movie.vue="item"></movie.vue-item>-->
    </div>
</template>

<script>
    import store from '../store.js'
    export default {
        name: 'movielist',
        /*data() {
            return {
                test : []
            }
        },,
        created:unction() {
            console.log('test');
            this.$store.dispatch('getMoviesFromAPI');
        }*/
        created: function() {
            this.$store.dispatch('getMoviesFromAPI');
        },
        computed: {
            movies() {
                //console.log(store.state.movies);
                return store.state.movies
            }
        },
        methods:{
            go: function (id) {
                let url = '/movies/' + id;
                this.$router.push(url)
            },
            goAdd () {
                this.$router.push('/add')
            }
        }
    }
</script>