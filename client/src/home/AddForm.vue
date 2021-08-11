<template>
    <!-- ADD MOVIE -->
    <section id="add-movie" style="margin-bottom:2rem">
        <div class="page-title shadow rounded bg-secondary bg-gradient">
            <h3>Add Movie</h3>
        </div>

        <div class = 'card'>
            <!-- <div class= "card-header">
                <button class="btn btn-outline-success" onclick="toAddPage()" style=width:20%;height:50%>Add New Movie</button>
            </div> -->
            <div class= "card-body" style="overflow-x: scroll">
                <form @submit.prevent="addMovie" id="addMovieForm" action="/">
                    <label>Title</label><br>
                    <input type='text' id='addMovie-title' name='title' placeholder="e.g Titanic" v-model="newMovie.title"><br><br>
                    <label>Synopsis</label><br>
                    <input type='text' id='addMovie-synopsis' name='synopsis' placeholder="Write your description here" v-model="newMovie.synopsis"><br><br>
                    <label>Upload Image</label><br>
                    <img style="object-fit:scale-down;object-position:left" :style="[imagePreviewStyle]" :src="imagePreviewSrc" class="imageLink"/><br><br>
                    <input type="file" id="addMovie-image" name="poster" @change="generateImgUrl"><br><br>
                    <label>Trailer URL</label><br>
                    <input type='text' id='addMovie-trailer' name='trailerUrl' placeholder="Add a Youtube Link" v-model="newMovie.trailerUrl"><br><br>
                    <label>Rating</label><br>
                    <select name='rating' id='addMovie-rating' v-model="newMovie.rating">
                        <option value='0'>---SELECT---</option>                                                                               
                        <option value='1'>1 (Bad)</option>
                        <option value='2'>2 (OK) </option>
                        <option value='3'>3 (Good)</option>
                        <option value='4'>4 (Very Good)</option>
                        <option value='5'>5 (Excellent)</option>
                    </select><br><br>   
                    <label>Genre</label><br>
                    <select name='genreId' id='addMovie-genre' v-model="newMovie.genre">
                        <option value=''>---SELECT---</option>                                                                               
                        <option value='1'>Horror</option>
                        <option value='2'>Thriller</option>
                        <option value='3'>Action</option>
                        <option value='4'>Drama</option>
                        <option value='5'>Romance</option>
                        <option value='6'>Documentary</option>
                        <option value='7'>Comedy</option>
                        <option value='8'>Science Fiction</option>
                        <option value='9'>Fantasy</option>
                    </select><br><br>
                    <p class='errorAddMovie'></p>
                    <button class="confirmbtn" style=width:50%; type="submit">Add Movie</button>
                    <button class="redbtn" style="width:50%;display: inline" @click.prevent="toMovieList">Cancel</button>    
                </form>        
            </div>
        </div>
    </section>

</template>

<script>
export default {
    name: 'AddForm',
    props: ["editMoviePlaceholder"],
    data() {
        return {
            newMovie: {
                title: '',
                synopsis: '',
                poster: '',
                trailerUrl: '',
                rating: '0',
                genre: ''
            },
            imagePreviewStyle: {
                width: '',
                height: ''
            },
            imagePreviewSrc: '',
        }
    },
    methods: {
        addMovie() {
            let newMovieData = {
                title: this.newMovie.title,
                synopsis: this.newMovie.synopsis,
                trailerUrl: this.newMovie.trailerUrl,
                imgUrl: this.newMovie.poster,
                rating: this.newMovie.rating,
                genre: this.newMovie.genre
            }
            // console.log(newMovieData)
            this.$emit('addMovie', newMovieData)
        },
        toMovieList() {
            this.$emit('toMovieList')
        },
        generateImgUrl(event) {
            // console.log(event.target.files)

            this.newMovie.poster = event.target.files[0]

            var reader = new FileReader();
            reader.onload = () => {
                this.imagePreviewStyle.width = '300px'
                this.imagePreviewStyle.height = '180px'
                this.imagePreviewSrc = reader.result
            };

            reader.readAsDataURL(event.target.files[0])
        }
    }
}
</script>

<style>

</style>