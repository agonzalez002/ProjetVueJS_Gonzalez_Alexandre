<template>
<li @click="display_details=!display_details">
    <img class="affiche" v-bind:src="movie.affiche"><br />
    <span v-if="display_details">
        {{movie.synopsys}}<br />

        <button @click="edit">Edit</button>
        <button @click="remove">Remove</button>
    </span>
    <br /><br />
</li>
</template>

<script>
export default {
    props: [ "movie" ],
    data: function(){
        return {
            display_details: false
        }
    },
    methods: {
        edit() {
            this.$emit('edit', this.movie)
        },
        remove() {
            this.$emit('remove')
        }
    },
}
</script>