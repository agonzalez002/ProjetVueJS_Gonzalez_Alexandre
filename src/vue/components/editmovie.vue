<template>
    <div class="contenu edit">
        <div class="lig">
            <label>Titre : </label><input id="titre" type="text" name="titre" v-bind:value="movies.movies[$route.params.id].titre">
        </div>
        <div class="lig">
            <label>Année : </label><input id="annee" type="text" name="annee" v-bind:value="movies.movies[$route.params.id].annee">
        </div>
        <div class="lig">
            <label>Langue : </label><input id="langue" type="text" name="langue" v-bind:value="movies.movies[$route.params.id].langue">
        </div>
        <div class="lig">
            <label>Affiche (url) : </label><input id="affiche" type="text" name="affiche" v-bind:value="movies.movies[$route.params.id].affiche">
        </div>
        <div class="lig">
            <label>Genre : </label><input id="genre" type="text" name="genre" v-bind:value="movies.movies[$route.params.id].genre">
        </div>
        <h2>Réalisateur</h2>
        <div class="lig">
            <label>Nom : </label><input id="nom" type="text" name="reaNom" v-bind:value="movies.movies[$route.params.id].realisateur.nom">
        </div>
        <div class="lig">
            <label>Prenom : </label><input id="prenom" type="text" name="reaPrenom" v-bind:value="movies.movies[$route.params.id].realisateur.prenom">
        </div>
        <div class="lig">
            <label>Nationalité : </label><input id="natio" type="text" name="reaNatio" v-bind:value="movies.movies[$route.params.id].realisateur.natio">
        </div>
        <div class="lig">
            <label>Date de naissance (JJ Mois AAAA) : </label><input id="naissance" type="text" name="reaNaissance" v-bind:value="movies.movies[$route.params.id].realisateur.naissance">
        </div>
        <div class="lig">
            <label>Note :</label><input id="note" type="number" min="1" max="5" v-bind:value="movies.movies[$route.params.id].note"/>
        </div>
        <span class="btn" @click="modif">Valider</span>
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
            modif () {
                let titre = document.getElementById("titre").value;
                let annee = document.getElementById("annee").value;
                let langue = document.getElementById("langue").value;
                let affiche = document.getElementById("affiche").value;
                let genre = document.getElementById("genre").value;
                let nom = document.getElementById("nom").value;
                let prenom = document.getElementById("prenom").value;
                let natio = document.getElementById("natio").value;
                let naissance = document.getElementById("naissance").value;
                let note = document.getElementById("note").value;

                let data = [];
                data[0] = titre;
                data[1] = annee;
                data[2] = langue;
                data[3] = affiche;
                data[4] = genre;
                data[5] = nom;
                data[6] = prenom;
                data[7] = natio;
                data[8] = naissance;
                data[9] = note;
                data[10] = this.$route.params.id;


                store.dispatch('editMovie', [data[0], data[1], data[2], data[3], data[4], data[5], data[6], data[7], data[8], data[9], data[10]])
                this.$router.push('/')
            },
        }
    }
</script>