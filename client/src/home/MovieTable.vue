<template>
    <!-- MOVIE LIST -->
    <section id="movie-list" style="margin-bottom:2rem">
        <div class="page-title shadow rounded bg-secondary bg-gradient">
            <h3>All Movies</h3>
            <p style="margin-bottom:0"><i>Sorted by name</i></p>
        </div>

        <div class = 'card'>
            <div class= "card-header">
                <button class="btn btn-outline-success" @click.prevent="toAddMovie" style=width:20%;height:50%>Add New Movie</button>
            </div>
            <div class= "card-body" style="overflow-x: scroll">
                <h2 id='movieListRemark' style='color:red' v-if="movieRemark">No Movies To Show. Please Add a Movie.</h2>
                    <div id="myModal" :class="{modalshow: modalShowToggle}" class="modal">
                        <div class="modal-content">
                            <span class="close" @click='closeModal'>&times;</span>
                            <p id='modalText'>{{modalSynopsis}}</p>
                        </div>
                    </div>
                <table v-if="movies.length > 0" id="movieTable" style="overflow-x: auto" class="table table-striped table-hover tableMovies table-responsive" >
                    <thead class='table-primary'>
                        <tr>
                            <th style="text-align:center">Title</th>
                            <th style="text-align:center">Genre</th>
                            <th style="padding-left:30px;text-align:center">Rating</th>
                            <th style="text-align:center">Status</th>
                            <th style="text-align:center">Poster</th>
                            <th style="text-align:center">Trailer</th>
                            <th style="text-align:center">Synopsis</th>
                            <th style="text-align:center">Author</th>
                            <th style="text-align:center">Action</th>
                        </tr>
                    </thead>
                    <tbody id="movieList">
                        <MovieTableRow @dropstatus='dropstatus' :movies='movies' v-for="(movie, index) in movies" :movie='movie' :index='index' :key="movie.id" @toEditMovie='toEditMovie' @deleteMovie='deleteMovie' @editStatus='editStatus' :user='user' @expandTrailer='expandTrailer'></MovieTableRow>
                    </tbody>
                </table>
            </div>
        </div>
    </section>

</template>

<script>
import MovieTableRow from '../tablerows/MovieTableRow.vue'
export default {
    name: 'MovieList',
    components: { MovieTableRow },
    props: ["movies", "user", "movieRemark"],
    data() {
        return {
            modalShowToggle: false,
            modalSynopsis: ''
        }
    },
    methods: {
        toAddMovie() {
            this.$emit('toAddMovie', 'addForm')
        },
        dropstatus(status) {
            this.$emit('dropstatus', status)
        },
        toEditMovie(movie) {
            this.$emit('toEditMovie', movie)
        },
        deleteMovie(movieId) {
            this.$emit('deleteMovie', movieId)
        },
        editStatus(movieId, status) {
            this.$emit('editStatus', movieId, status)
        },
        expandTrailer(synopsis) {
            this.modalShowToggle = true
            this.modalSynopsis = synopsis

            window.onclick = function(event) { // close expanded trailer modal
                var modal = document.getElementById("myModal");
                if (event.target == modal) {
                    this.modalShowToggle = false
                }
            }
        },
        closeModal() {
            this.modalShowToggle = false  
        }
    }
}
</script>

<style>

</style>