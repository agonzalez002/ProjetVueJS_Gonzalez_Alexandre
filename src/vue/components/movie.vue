<template>
    <div class="contenu">
        <div class="bloc-haut">
            <div class="gauche">
                <img v-bind:src="movies.movies[$route.params.id].affiche" alt="affiche du film">
            </div>
            <div class="droite">
                <p><span>Titre :</span> {{ movies.movies[$route.params.id].titre }}</p>
                <p><span>Année :</span> {{ movies.movies[$route.params.id].annee }}</p>
                <p><span>Langue :</span> {{ movies.movies[$route.params.id].langue }}</p>
                <p><span>Genre :</span> {{ movies.movies[$route.params.id].genre }}</p>
                <h2>Réalisateur</h2>
                <p><span>Nom :</span> {{ movies.movies[$route.params.id].realisateur.nom }}</p>
                <p><span>Prenom :</span> {{ movies.movies[$route.params.id].realisateur.prenom }}</p>
                <p><span>Nationalité :</span> {{ movies.movies[$route.params.id].realisateur.natio }}</p>
                <p><span>Date de naissance :</span> {{ movies.movies[$route.params.id].realisateur.naissance }}</p>
                <p><span>Note :</span> {{ movies.movies[$route.params.id].note }}</p>
                <span class="btn" @click="edit">Modifier</span>
                <span class="btn" @click="remove">Supprimer</span>
            </div>
        </div>
        <div class="bloc-bas">
            <span class="btn-2" @click="addNew">Ajouter un nouveau film</span>
        </div>
    </div>

</template>

<script>
    import store from '../store.js'
    import axios from 'axios'
    export default {
        name: 'movie',
        created: function() {
            this.$store.dispatch('getMoviesFromAPI');
        },
        computed: {
            movies() {
                //console.log(store.state.movies);
                return store.state.movies
            },
        },
        methods:{
            remove () {
                let id = [];
                id[0] = this.$route.params.id;
                store.dispatch('removeMovie', [ id[0] ])
                this.$router.push('/')
            },
            edit () {
                let id = [];
                id[0] = this.$route.params.id;
                let url = '/movies/' + id[0] + '/edit';
                this.$router.push(url)
            },
            addNew () {
                this.$router.push('/add')
            }
        }
    }
</script>