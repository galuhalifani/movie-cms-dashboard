<template>
  <div>
      <Login v-if="activePage == 'login'" @login="login" @toRegisterPage="changeActivePage" @googleLogin='googleLogin'></Login>
      <Register v-if="activePage == 'register'" @register="register" @toLoginPage="changeActivePage"></Register>
      <Home v-if="isLoggedIn" :user='user' :movies='movies' :histories='histories' :activePage='activePage' @toMovieList="toMovieList" @toHistory="toHistory" @logout='logout' @addMovie='addMovie' @toAddMovie='changeActivePage' @toEditMovie='toEditMovie' :editedMovie='editedMovie' @editMovie="editMovie" @deleteMovie='deleteMovie' @toAuthorMovieList='toAuthorMovieList' @toEditUserForm='toEditUserForm' :editedUser='editedUser' @editUser='editUser' @editStatus='editStatus' @toGenreMovieList='toGenreMovieList' :movieRemark='movieRemark'>
      </Home>
  </div>
</template>

<script>
import axios from 'axios';
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Home from "./views/Home.vue"
export default {
    name: 'App',
    components: { Login, Register, Home },
    data() {
        return {
            rootUrl: 'https://movie-cms-challenge.herokuapp.com',
            isLoggedIn: false,
            activePage: 'login',
            user: {
                name: '',
                fullname: '',
                role: '',
                id: ''
            },
            movies: [],
            histories: [],
            editedMovie: {
                id: '',
                title: '',
                synopsis: '',
                poster: '',
                trailerUrl: '',
                rating: '0',
                genre: '',
                imagePreviewSrc: '',
                imagePreviewStyle: {
                    width: '',
                    height: ''
                }
            },
            editedUser: {
                name: '',
                username: '',
                phoneNumber: '',
                address: ''
            },
            movieRemark: false
        }
    },
    methods: {
        changeActivePage(activePage) {
            this.activePage = activePage
        },
        login(loginDetails) {
            // console.log('MASUK LOGINNNNN')

            let email = loginDetails.email
            let password = loginDetails.password

            axios({
                url: `${this.rootUrl}/login`,
                method: 'post',
                data: {
                    email,
                    password
                }
            })
            .then(data => {
                // console.log(data.data)
                localStorage.setItem('accessToken', data.data.accessToken)
                localStorage.setItem('name', data.data.name)
                localStorage.setItem('role', data.data.role)
                localStorage.setItem('id', data.data.id)
                this.user.name = localStorage.name.split(' ')[0]
                this.user.fullname = localStorage.name
                this.user.role = localStorage.role
                this.user.id = localStorage.id
                this.isLoggedIn = true
                this.toMovieList()
            })
            .catch(err => {
                swal("Error", err.response.data.message, "error");        
            })
        },
        register(newUserData) {
            // console.log('MASUK REGISTER')
            let userData = {
                name: newUserData.name,
                username: newUserData.username,
                email: newUserData.email,
                password: newUserData.password,
                phoneNumber: newUserData.phoneNumber,
                address: newUserData.address
            }

            let title;
            let text;
            let swalWarning = false

            if (!userData.name && !userData.username) {
                title = "You left your username and name blank"
                text = "Your email will be used as your username and name"
                swalWarning = true
            } else if (!userData.name && !userData.username) {
                title = "You left your name blank"
                text = "Your username will be used as your name"
                swalWarning = true
            } else if (!userData.username && userData.name) {
                title = "You left your username blank"
                text = "Your email will be used as your username"    
                swalWarning = true    
            }

            if (swalWarning) {
            swal({
                title: title,
                text: text,
                icon: "warning",
                buttons: true,
                dangerMode: false,
                })
                .then(register => {
                    if (register) {
                        return axios({
                            url: `${this.rootUrl}/register`,
                            method: 'post',
                            data: userData
                        })
                        .then(data => {
                            // console.log('SUCCESSSSSS', data)
                            localStorage.setItem('name', data.data.name)
                            localStorage.setItem('role', data.data.role)
                            this.changeActivePage('login')
                            swal("Success", `Thank You, ${localStorage.name}! You Can Now Log In`, "success");
                        })
                        .catch(err => {
                        // console.log(userData)
                        // console.log(err.response)
                            swal("Error", err.response.data.message.join(', '), "error");      
                        })
                        .then(() => {
                        localStorage.clear()            
                        })
                    } 
                })            
            } else {
                axios({
                url: `${this.rootUrl}/register`,
                method: 'post',
                data: userData
                })
                .then(data => {
                    // console.log('SUCCESSSSSS', data)
                    localStorage.setItem('name', data.data.name)
                    localStorage.setItem('role', data.data.role)
                    this.changeActivePage('login')
                    swal("Success", `Thank You, ${localStorage.name}! You Can Now Log In`, "success");

                })
                .catch(err => {
                    swal("Error", err.response.data.message.join(', '), "error");      
                })
                .then(() => {
                    localStorage.clear()
                })
            }
        },
        logout(data) {
            localStorage.clear()
            this.movies = []
            this.isLoggedIn = data.isLoggedIn
            this.activePage = data.activePage
        },
        toMovieList() {
            this.changeActivePage('movieList')
            this.showAllMovies()
        },
        showAllMovies() {
            // console.log('show all movies')
            axios({
                url: `${this.rootUrl}/movies`,
                method: 'get',
                headers: {
                    accessToken: localStorage.accessToken
                    }
            })
            .then(data => {
                this.movies = data.data

                if (this.movies.length == 0) {
                    this.movieRemark = true
                } else if (this.movies.length >0) {
                    this.movieRemark = false
                }

                // console.log(this.movies)
            })
            .catch(err => {
                console.log(err)
                swal("Error", err.response.data.message, "error");        
            })
        },
        toHistory(activePage) {
            this.activePage = activePage
            axios({
                url: `${this.rootUrl}/movies/history`,
                method: 'get',
                headers: {
                    accessToken: localStorage.accessToken
                }
            })
            .then(data => {
                this.histories = data.data
            })
            .catch(err => {
                swal("Error", err.response.data.message, "error");        
            })
        },
        addMovie(newMovieData) {
            let title = newMovieData.title
            let synopsis = newMovieData.synopsis
            let trailerUrl = newMovieData.trailerUrl
            let imgUrl = newMovieData.imgUrl
            let rating = newMovieData.rating
            let genre = newMovieData.genre

            let movie = new FormData()
            movie.append('title', title)
            movie.append('synopsis', synopsis)
            movie.append('trailerUrl', trailerUrl)
            movie.append('poster', imgUrl)
            movie.append('rating', rating)
            movie.append('genreId', genre)
            
            axios({
                url: `${this.rootUrl}/movies`,
                method: 'post',
                data: movie,
                headers: {
                    accessToken: localStorage.accessToken
                },
                contentType: false,
                processData: false
            })
            .then(data => {
                // console.log(data.data)
                this.toMovieList()
                swal("Success", "You've added a new movie", "success");
            })
            .catch(err => {
                if (Array.isArray(err.response.data.message)) {
                swal("Error", err.response.data.message.join(', '), "error");
                } else {
                swal("Error", err.response.data.message, "error");
                }
            })
        },
        toEditMovie(movie) {
            this.editedMovie.id = movie.id,
            this.editedMovie.title = movie.title,
            this.editedMovie.synopsis = movie.synopsis,
            this.editedMovie.poster = '',
            this.editedMovie.trailerUrl = movie.trailerUrl,
            this.editedMovie.rating = movie.rating,
            this.editedMovie.genre = movie.genreId

            this.editedMovie.imagePreviewStyle.width = '300px'
            this.editedMovie.imagePreviewStyle.height = '180px'
            this.editedMovie.imagePreviewSrc = movie.imgUrl

            this.activePage = 'editForm'
        },
        editMovie(editMovieData, editMovieId) {
            let title = editMovieData.title
            let synopsis = editMovieData.synopsis
            let trailerUrl = editMovieData.trailerUrl
            let imgUrl = editMovieData.imgUrl
            let rating = editMovieData.rating
            let genre = editMovieData.genre

            let movie = new FormData()
            movie.append('title', title)
            movie.append('synopsis', synopsis)
            movie.append('trailerUrl', trailerUrl)
            movie.append('poster', imgUrl)
            movie.append('rating', rating)
            movie.append('genreId', genre)

            // console.log(movie)

            axios({
                url: `${this.rootUrl}/movies/${editMovieId}`,
                method: 'put',
                data: movie,
                headers: {
                    accessToken: localStorage.accessToken
                },
                contentType: false,
                processData: false
            })
            .then(data => {
                // console.log('SUCCESS', data)
                this.toMovieList()
                swal("Success", `Movie ${editMovieData.title} has been edited`, "success")
            })
            .catch(err => {
                // console.log('ERRORRRR', err)
                    if (Array.isArray(err.response.data.message)) {
                    swal("Error", err.response.data.message.join(', '), "error");
                    } else {
                    swal("Error", err.response.data.message, "error");
                    }
            })
        },
        deleteMovie(movieId) {
            // console.log(movieId, 'MOVIE ID')
            swal({
                title: "Are you sure?",
                text: "You can not recover deleted files",
                icon: "warning",
                buttons: true,
                dangerMode: false,
            })
            .then((willDelete) => {
                if (willDelete) {
                    return axios({
                        url: `${this.rootUrl}/movies/${movieId}`,
                        method: 'delete',
                        headers: {
                            accessToken: localStorage.accessToken
                        }
                    })
                    .then(data => {
                        this.toMovieList()
                        swal(data.data.message, {
                            icon: "success",
                        })            
                    })
                    .catch(err => {
                        swal("Error", err.response.data.message, "error");
                    })
                } 
            })
        },
        toAuthorMovieList() {
            this.activePage = 'movieList'

            axios({
                url: `${this.rootUrl}/movies?authorid=${localStorage.id}`,
                method: 'get',
                headers: {
                    accessToken: localStorage.accessToken
                    }
            })
            .then(data => {
                this.movies = data.data
                
                if (data.data.length == 0) {
                    this.movieRemark = true
                } else if (data.data.length >0) {
                    this.movieRemark = false
                }

                // console.log(this.movies)
            })
            .catch(err => {
                console.log(err)
                swal("Error", err.response.data.message, "error");        
            })
        },
        toEditUserForm(activePage) {
            axios({
                url: `${this.rootUrl}/users/${localStorage.id}`,
                method: 'get',
                headers: {
                    accessToken: localStorage.accessToken
                }
            })
            .then(user => {
                // console.log('sucesss render')
                this.activePage = activePage
                this.editedUser.name = user.data.name,
                this.editedUser.username = user.data.username,
                this.editedUser.phoneNumber = user.data.phoneNumber,
                this.editedUser.address = user.data.address
            })
            .catch(err => {
                console.log('fail render')
                swal('Error', err.response.data.message, 'error')
            })            
        },
        editUser(user) {
            console.log('ngedit')
            let newData = {
                name: user.name,
                username: user.username,
                phoneNumber: user.phoneNumber,
                address: user.address
            }

            console.log(newData, 'newdata')

            axios({
                url: `${this.rootUrl}/users/${localStorage.id}`,
                method: 'put',
                data: newData,
                headers: {
                    accessToken: localStorage.accessToken
                }
            })
            .then(user => {
                // console.log(user)
                this.toMovieList()
                swal('Success', 'Your profile has been updated', 'success')
                // console.log(user)
                localStorage.name = ''
                localStorage.name = user.data.name
                this.user.fullname = localStorage.name
            })
            .catch(err => {
                swal('Error', err.response.data.message, 'error')
            })
        },
        editStatus(movieId, status) {
            let data = {
                status: status
            }

            axios({
                url: `${this.rootUrl}/movies/${movieId}`,
                method: 'patch',
                data: data,
                headers: {
                    accessToken: localStorage.accessToken
                }
            })
            .then(data => {
                this.toMovieList()
                // this.dropShowToggle = false
                // console.log(data)
            })
            .catch(err => {
                swal("Error", err.response.data.message, "error");
            })
        },
        toGenreMovieList(genreid) {
            // console.log('genre movies')
            this.activePage = 'movieList'

            axios({
                url: `${this.rootUrl}/movies?genreid=${genreid}`,
                method: 'get',
                headers: {
                    accessToken: localStorage.accessToken
                    }
            })
            .then(data => {
                this.movies = data.data

                if (data.data.length == 0) {
                    this.movieRemark = true
                } else if (data.data.length >0) {
                    this.movieRemark = false
                }

                // console.log(this.movies)
            })
            .catch(err => {
                console.log(err)
                swal("Error", err.response.data.message, "error");        
            })
        },
        googleLogin(id_token) {
            // var id_token = googleUser.getAuthResponse().idToken;
            // console.log(id_token, 'appppp')
            axios({
                url: `${this.rootUrl}/googlelogin`,
                method: 'post',
                data: {
                    id_token
                }
            })
            .then(data => {
                // console.log('DONEEEEEE')
                localStorage.setItem('accessToken', data.data.accessToken)
                localStorage.setItem('name', data.data.name)
                localStorage.setItem('role', data.data.role)
                localStorage.setItem('id', data.data.id)
                this.user.name = localStorage.name.split(' ')[0]
                this.user.fullname = localStorage.name
                this.user.role = localStorage.role
                this.user.id = localStorage.id
                this.isLoggedIn = true
                this.toMovieList()
            })
            .catch(err => {
                swal("Error", err.response.data.message, "error");
            })
        }
    },
    created() {
        if (localStorage.accessToken) {
        this.isLoggedIn = true
        this.toMovieList()
        this.user.name = localStorage.name.split(' ')[0]
        this.user.role = localStorage.role
        this.user.id = localStorage.id
        this.user.fullname = localStorage.name
        } else {
        this.isLoggedIn = false
        this.activePage = 'login'
        this.movieRemark = false
        }
    }
}
</script>

<style>

</style>