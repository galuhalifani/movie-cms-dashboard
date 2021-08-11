<template>
    <tr>
        <td style="text-align:center;padding-left:15px;padding-right:20px">{{movie.title}}</td>

        <td style="text-align:center">{{movie.Genre.name}}</td>

        <td style="padding-left:30px;text-align:center" :class="starColor">{{ratingToStar}}</td>

        <td>
            <div class="dropdown-status">
            <button @click.prevent="dropstatus(movie.status)" :style="[movie.status == 'active' ? {backgroundColor: '#04AA6D'} : movie.status == 'inactive' ? {backgroundColor: 'darkgoldenrod'} : {backgroundColor: 'grey'}]" class="dropbtn">{{movie.status}}</button>
            <div id="myDropdown" class="dropdown-content" :class="{dropshow: dropShowToggle}" v-if="user.role == 'admin'">
                <a href="/" v-for="status in statusOptions" :key="status" @click.prevent="editStatus(movie.id, status)">{{status}}</a>
            </div>
            </div>
        </td>
                            
        <td width="200px"><img :src="movie.imgUrl" alt="movie.imgUrl" style="object-fit:cover;
        width:230px;
        height:150px;"></td>

        <td style="text-align:center">
            <iframe width="230" height="150px" :src="movie.trailerUrl"></iframe>
        </td>

        <td style="text-align:center;padding-left:30px;padding-right:30px" id="movieSynopsis" @click="expandTrailer(movie.synopsis)"><p class="overflow-ellipsis">{{movie.synopsis}}</p><pre>[click to show more..]</pre></td>

        <td style="text-align:center;padding-left:15px;padding-right:20px">{{movie.User.name}}</td>

        <td style="text-align:center">
            <a class="badge bg-success" href='#' @click="toEditMovie(movie)" v-if="user.role == 'admin' || user.id == movie.authorId">Edit</a>
            <a class="badge bg-secondary" href='/' @click.prevent="deleteMovie(movie.id)" v-if="user.role == 'admin' || user.id == movie.authorId">Delete</a>
        </td>
    </tr>    
</template>

<script>    
export default {
    name: 'MovieTableRow',
    props: ["movies", "movie", "index", "user"],
    data() {
        return {
            statusOptions: [],
            dropShowToggle: false,
        }
    },
    methods: {
        toEditMovie(movie) {
            this.$emit('toEditMovie', movie)
        },
        deleteMovie(movieId) {
            this.$emit('deleteMovie', movieId)
        },
        editStatus(movieId, status) {
            this.dropShowToggle = false
            this.$emit('editStatus', movieId, status)
        },
        expandTrailer(synopsis) {
            this.$emit('expandTrailer', synopsis)
            // $("#myModal").show()
            // $("#modalText").append(synopsis)
        },
        dropstatus(status) { // kalau dipasang di grandparent component, satu button yg di-click, semua ikut ke-expand
            this.statusOptions = []
            // console.log('ke click!!!!')

            let status1;
            let status2;

            if (status == 'active') {
                status1 = 'inactive'
                status2 = 'archived'
            } else if(status == 'inactive') {
                status1 = 'active'
                status2 = 'archived'
            } else if(status == 'archived') {
                status1 = 'active'
                status2 = 'inactive'
            }

            this.statusOptions.push(status1)
            this.statusOptions.push(status2)

            if (this.dropShowToggle == true) {
                this.dropShowToggle = false
            } else {
                this.dropShowToggle = true
            }
            
            window.onclick = function(event) {
                this.dropShowToggle = false
                if (!event.target.matches('.dropbtn')) {
                    this.dropShowToggle = false
                    var dropdowns = document.getElementsByClassName("dropdown-content");
                    var i;
                    for (i = 0; i < dropdowns.length; i++) {
                        var openDropdown = dropdowns[i];
                        if (openDropdown.classList.contains('dropshow')) {
                        openDropdown.classList.remove('dropshow');
                        }
                    }
                }
            }
        }
    },
    computed: {
        ratingToStar() {
            let star = ''
            for (let i = 0 ; i < this.movie.rating; i++) [
                star += '★'
            ]
            return star
        },
        starColor() {
            if (this.movie.rating > 3) {
                return 'green-star'
            } else if (this.movie.rating == 3) {
                return 'yellow-star'
            } else {
                return 'red-star'
            }
        }
    }
}
</script>

<style>

</style>