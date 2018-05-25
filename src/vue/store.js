import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)


const store = new Vuex.Store({
    state: {
        movies: []
    },
    actions: {
        getMoviesFromAPI() {
            let uri = "http://localhost:8081/movies";
            axios.get(uri).then((response) => {
                //console.log(response.data);
                this.state.movies = response.data;
            //this.commit('updateMovies', response.data)
        });
        },
        removeMovie(context, [id]) {
            let uri = "http://localhost:8081/movies/" + id;
            //console.log(uri);
            axios
                .delete(uri, {})
                .then(function(response) {
                    console.log(response.data);
        }).catch(function(error) {
                console.log(error);
            });
            /*axios.delete(uri, {}).then((response) => {
                console.log(response.data);
                //this.commit('updateMovies', response.data)
        });*/
        },
        editMovie(context, [data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11]) {
            let uri = 'http://localhost:8081/movies/' + data11 + '/edit';
            axios
                .put(uri, {titre: data1, annee: data2, langue: data3, affiche: data4, genre: data5, nom: data6, prenom: data7, natio: data8, naissance: data9, note : data10})
                .then(function(response) {
                    console.log(response.data);
                })
                .catch(function(error) {
                console.log(error);
                });
        },
        addMovie(context, [data1, data2, data3, data4, data5, data6, data7, data8, data9]) {
            let uri = 'http://localhost:8081/movies/';
            axios
                .post(uri, {titre: data1, annee: data2, langue: data3, affiche: data4, genre: data5, nom: data6, prenom: data7, natio: data8, naissance: data9})
                .then(function(response) {
                    console.log(response.data);
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
    },
    mutations: {
        updateMovies(state, movies) {
            //console.log(movies);
            this.state = movies;
        },
        remove() {
            console.log("test");
        }
    },

})

export default store

