<template>
    <section id="main">
        <!-- SIDEBAR -->
        <div id="sidebar" class="d-flex flex-column p-3 bg-dark text-white" style="height:100vh">
            <div id="sidebar-head" class='d-flex'>
                <span style="font-size: 1rem; color: white; align-items: center;">
                <i class="fas fa-film fs-2" style="line-height:unset; margin-right:15px"></i>
                </span>
                <div class="fs-2">MENU</div>
            </div>
            <hr>
            <ul class="sidebar-ul flex-column mb-auto nav nav-pills">
                <li>
                    <a href='#' @click.prevent="toMovieList" class="nav-link sidebar text-white fs-5 collapsed" data-bs-toggle="collapse" data-bs-target="#allMovies-collapse">
                        <i style="color:white; margin-right:8px" class="fas fa-photo-video"></i>
                        <p class='fs-4'>All Movies</p>
                    </a>
                </li>
                <li>
                    <a href='#' @click.prevent="toAuthorMovieList" class="nav-link sidebar text-white fs-5">
                        <i style="color:white; margin-right:8px" class="fas fa-users"></i>
                        <p class='fs-4'>My Movies</p>
                    </a>
                </li>
                <li>
                    <a href='#' class="nav-link sidebar text-white fs-5 collapsed" data-bs-toggle="collapse" data-bs-target="#genre-collapse">
                        <i style="color:white; margin-right:8px" class="fas fa-theater-masks"></i>
                        <p class='fs-4'>Genre</p>
                    </a>
                    <div class="collapse mb-3" id="genre-collapse">
                        <ul class="btn-toggle-nav list-unstyled fs-5">
                            <li>
                                <a href="#" @click.prevent='toGenreMovieList(1)' class="link-light">
                                    <!-- <i style='color:black' class="fas fa-th-large"></i> -->
                                    <span>Horror</span>      
                                </a>
                            </li>
                            <li>
                                <a href="/" @click.prevent='toGenreMovieList(2)' class='link-light'>
                                    <!-- <i style='color:black' class="bi bi-grid-fill"></i> -->
                                    <span>Thriller</span>
                                </a>        
                            </li>
                            <li>
                                <a href="/" @click.prevent='toGenreMovieList(3)' class='link-light'>
                                    <!-- <i class="bi bi-grid-fill"></i> -->
                                    <span>Action</span>
                                </a>        
                            </li>
                            <li>
                                <a href="/" @click.prevent='toGenreMovieList(4)' class='link-light'>
                                    <!-- <i class="bi bi-grid-fill"></i> -->
                                    <span>Drama</span>
                                </a>
                            </li>
                            <li>
                                <a href="/" @click.prevent='toGenreMovieList(5)' class='link-light'>
                                    <!-- <i class="bi bi-grid-fill"></i> -->
                                    <span>Romance</span>
                                </a>        
                            </li>
                            <li>
                                <a href="/" @click.prevent='toGenreMovieList(6)' class='link-light'>
                                    <!-- <i class="bi bi-grid-fill"></i> -->
                                    <span>Documentary</span>
                                </a>        
                            </li>
                            <li>
                                <a href="/" @click.prevent='toGenreMovieList(7)' class='link-light'>
                                    <!-- <i class="bi bi-grid-fill"></i> -->
                                    <span>Comedy</span>
                                </a>        
                            </li>
                            <li>
                                <a href="/" @click.prevent='toGenreMovieList(8)' class='link-light'>
                                    <!-- <i class="bi bi-grid-fill"></i> -->
                                    <span>Science Fiction</span>
                                </a>        
                            </li>
                            <li>
                                <a href="/" @click.prevent='toGenreMovieList(9)' class='link-light'>
                                    <!-- <i class="bi bi-grid-fill"></i> -->
                                    <span>Fantasy</span>
                                </a>        
                        </ul>
                    </div>
                </li>
                <li>
                    <a href='#' @click="toHistory" class="nav-link sidebar text-white fs-5">
                        <i style="color:white; margin-left: 6px; margin-right:10px" class="far fa-calendar-check"></i>
                        <p class='fs-4'>History</p>
                    </a>
                </li>
            </ul>
        </div>

        <!-- CONTENT -->
        <div id="main_content" style="height:100vh; overflow-y:auto">

            <!-- NAVBAR -->
            <div id="navbar">
            <nav class="navbar navbar-light bg-transparent justify-content-between navbar-expand-lg shadow-lg p-3 mb-5 bg-body rounded">
                <div class="container-fluid">
                  <a class="navbar-brand" href="#">Movie Collection CMS</a>
                    <ul class="navbar-nav mb-2 mb-lg-0">
                      <li class="nav-item" style='margin-right:25px'>
                        <a class="nav-link active" @click.prevent="toMovieList" aria-current="page" aria-expanded="false" href="#">
                            <span style="font-size: 1rem; color: grey;">
                                <i class='fas fa-home fs-4 text-gray-600' data-bs-toggle="tooltip" data-bs-placement="bottom" 
                                title="Back to Homepage"></i>
                            </span>
                            <p>Home</p>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link active" @click="toEditUserForm" aria-current="page" aria-expanded="false" href="#">
                            <span style="font-size: 1rem; color: grey;">
                                <i class='fas fa-user-cog fs-4 text-gray-600' data-bs-toggle="tooltip" data-bs-placement="bottom" 
                                title="Edit My Profile"></i>    
                            </span>
                            <p>Profile</p>
                        </a>    
                      </li>
                    </ul>
                    <ul class="navbar-nav mb-2 mb-lg-0">
                        <li class="nav-item dropdown">
                            <a class="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <div id="profile" class="user-name text-end me-3">
                                        <h6 class="mb-0 text-gray-600">{{user.fullname}}</h6>
                                        <p class="mb-0 text-sm text-gray-600">{{user.role}}</p>
                                </div>
                                <div class="user-img d-flex align-items-center">
                                    <div class="avatar avatar-md">
                                        <img src="https://picsum.photos/id/1005/500/500">
                                    </div>
                                </div>
                            </a>
                            <ul style="right:0; left:unset" class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                              <li class="profileName"><h6 class="dropdown-header">Hello {{ user.name }}!</h6></li>
                              <li><a class="dropdown-item" href="#" @click.prevent="toAuthorMovieList"><i class="icon-mid bi bi-person me-2"></i>
                                My Movies</a></li>
                                <li><a class="dropdown-item" href="#" @click.prevent="toAddMovie('addForm')"><i class="icon-mid bi bi-gear me-2"></i>
                                Add New Movie</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="#" @click="logout"><i
                                class="icon-mid bi bi-box-arrow-left me-2"></i>Logout</a></li>
                            </ul>
                          </li>    
                    </ul>
                </div>
              </nav>
            </div>

                <!-- MAIN TABLES --> 
                <div class="main_table">

                <MovieTable v-if="activePage == 'movieList'" :movies='movies' :user='user' @toAddMovie="toAddMovie" @dropstatus="dropstatus" @toEditMovie='toEditMovie' @deleteMovie='deleteMovie' @editStatus='editStatus' :movieRemark='movieRemark'></MovieTable>

                <AddForm v-if="activePage == 'addForm'" @toMovieList='toMovieList' @addMovie='addMovie' :editedMovie='editedMovie'></AddForm>

                <EditForm v-if="activePage == 'editForm'" @toMovieList='toMovieList' :editedMovie='editedMovie' @editMovie="editMovie"></EditForm>

                <HistoryTable v-if="activePage == 'historyList'" :histories="histories"></HistoryTable>

                <EditUserForm v-if="activePage == 'editUserForm'" :editedUser='editedUser' @editUser='editUser' @toMovieList='toMovieList'></EditUserForm>

                </div>
        </div>

    <!-- closing tag section main page -->
    </section>
</template>

<script>
import MovieTable from "../home/MovieTable.vue";
import AddForm from "../home/AddForm.vue";
import EditForm from "../home/EditForm.vue";
import HistoryTable from "../home/HistoryTable.vue"
import EditUserForm from "../home/EditUserForm.vue"
export default {
    name:'Home',
    components: { MovieTable, HistoryTable, AddForm, EditForm, EditUserForm },
    props: ["activePage", "user", "movies", "histories", "editedMovie", "editedUser", "movieRemark"],
    data() {
        return {
            movieIndex: ''
        }
    },
    methods: {
        toMovieList() {
            this.$emit('toMovieList')
        },
        toHistory() {
            this.$emit('toHistory', 'historyList')
        },
        logout() {
            let data = {
                isLoggedIn: false,
                activePage: 'login'
            }

            this.$emit('logout', data)
        },
        toAddMovie(activePage) {
            // console.log(activePage)
            this.$emit('toAddMovie', activePage)
        },
        dropstatus(status) {
            this.$emit('dropstatus', status)
        },
        addMovie(newMovieData) {
            this.$emit('addMovie', newMovieData)
        },
        toEditMovie(movie) {
            this.$emit('toEditMovie', movie)
        },
        editMovie(editMovieData, editMovieId) {
            this.$emit('editMovie', editMovieData, editMovieId)
        },
        deleteMovie(movieId) {
            this.$emit('deleteMovie', movieId)
        },
        toAuthorMovieList() {
            this.$emit('toAuthorMovieList')
        },
        toEditUserForm() {
            this.$emit('toEditUserForm', 'editUserForm')
        },
        editUser(user) {
            this.$emit('editUser', user)
        },
        editStatus(movieId, status) {
            this.$emit('editStatus', movieId, status)
        },
        toGenreMovieList(genreid) {
            this.$emit('toGenreMovieList', genreid)
        }
    }
}
</script>

<style>

</style>