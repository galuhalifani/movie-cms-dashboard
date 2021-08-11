<template>
    <!-- EDIT MOVIE -->
    <section id="edit-movie" style="margin-bottom:2rem">
        <div class="page-title shadow rounded bg-secondary bg-gradient">
            <h3>Edit a Movie</h3>
        </div>

        <div class = 'card' style="margin-bottom:2rem">
            <!-- <div class= "card-header">
                <button class="btn btn-outline-success" onclick="toAddPage()" style=width:20%;height:50%>Add New Movie</button>
            </div> -->
            <div class= "card-body" style="overflow-x: scroll">
                <form @submit.prevent="editMovie" id="editMovieForm" action="/">
                    <label>Title</label><br>
                    <input type='text' id='editMovie-title' name='title' placeholder="e.g Titanic" v-model="editMovieData.title"><br><br>
                    <label>Synopsis</label><br>
                    <input type='text' id='editMovie-synopsis' name='synopsis' placeholder="Write your description here" v-model="editMovieData.synopsis"><br><br>
                    <label>Change Image</label><br>
                    <img style="object-fit:scale-down;object-position:left" :style="[editMovieData.imagePreviewStyle]" :src="editMovieData.imagePreviewSrc" class="imageLink"/><br><br>
                    <input type="file" id="editMovie-image" name="poster" @change="generateImgUrl"><br><br>
                    <label>Trailer URL</label><br>
                    <input type='text' id='editMovie-trailer' name='trailerUrl' placeholder="Add a Youtube Link" v-model="editMovieData.trailerUrl"><br><br>
                    <label>Rating</label><br>
                    <select name='rating' id='editMovie-rating' v-model="editMovieData.rating">
                        <option value='0'>---SELECT---</option>                                                                               
                        <option value='1'>1 (Bad)</option>
                        <option value='2'>2 (OK) </option>
                        <option value='3'>3 (Good)</option>
                        <option value='4'>4 (Very Good)</option>
                        <option value='5'>5 (Excellent)</option>
                    </select><br><br>   
                    <label>Genre</label><br>
                    <select name='genreId' id='editMovie-genre' v-model="editMovieData.genre">
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
                    <p class='errorEditMovie'></p>
                    <button class="confirmbtn" style=width:50%; type="submit">Edit Movie</button>
                    <button class="redbtn" style="width:50%;display: inline" @click.prevent="toMovieList">Cancel</button>    
                </form>        
            </div>
        </div>
    </section>

</template>

<script>
export default {
    name: 'EditForm',
    props: ["editedMovie"],
    data() {
        return {
            editMovieData: {
                title: this.editedMovie.title,
                synopsis: this.editedMovie.synopsis,
                trailerUrl: this.editedMovie.trailerUrl,
                poster: this.editedMovie.poster,
                rating: this.editedMovie.rating,
                genre: this.editedMovie.genre,
                imagePreviewStyle: {
                    width: this.editedMovie.imagePreviewStyle.width,
                    height: this.editedMovie.imagePreviewStyle.height
                },
                imagePreviewSrc: this.editedMovie.imagePreviewSrc
            }
        }
    },
    methods: {
        editMovie() {
            let editMovieData = {
                title: this.editMovieData.title,
                synopsis: this.editMovieData.synopsis,
                trailerUrl: this.editMovieData.trailerUrl,
                imgUrl: this.editMovieData.poster,
                rating: this.editMovieData.rating,
                genre: this.editMovieData.genre
            }

            let editMovieId = this.editedMovie.id

            this.$emit('editMovie', editMovieData, editMovieId)
        },
        toMovieList() {
            this.$emit('toMovieList')
        },
        generateImgUrl(event) {
            this.editMovieData.poster = event.target.files[0]
            
            var reader = new FileReader();
            reader.onload = () => {
                this.editMovieData.imagePreviewStyle.width = '300px'
                this.editMovieData.imagePreviewStyle.height = '180px'
                this.editMovieData.imagePreviewSrc = reader.result
            };

            reader.readAsDataURL(event.target.files[0])
        }
    },
}
</script>

<style>

</style>