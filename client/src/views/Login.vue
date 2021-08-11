<template>
    <!-- LOGIN -->
    <section id="login">
        <div>
            <div class="container">
                <div class="containerBox">
                    <form @submit.prevent="login" id="loginForm">
                        <h1>Sign In</h1>
                        <p>Log in to your account</p>
                        <hr>
                    
                        <label for="email"><b>Email</b></label>
                        <input type="text" id='loginEmail' placeholder="Enter Email" name="email" v-model="email" required>
                    
                        <label for="psw"><b>Password</b></label>
                        <input type="password" id='loginPassword' placeholder="Enter Password" name="psw" v-model="password" required>
                    
                        <p>Don't have an account yet? Sign up <a href="#" id="registerButton" style="color:dodgerblue" @click.prevent="toRegisterPage">here</a>.</p>

                        <button type="submit">Log In</button>
                    </form>
                    <button v-google-signin-button="clientId" class="google-signin-button"> Register/Sign-In with Google</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: '',
            clientId: '948524706466-smp5j5nm8g639qsgug9m7i6elubmcdgc.apps.googleusercontent.com'
        }
    },
    methods: {
        login() {
            let loginData = {
                email: this.email,
                password: this.password
            }
            this.$emit('login', loginData)
        },
        toRegisterPage() {
            this.$emit('toRegisterPage', 'register')
        },
        OnGoogleAuthSuccess(id_token) {
            this.$emit('googleLogin', id_token)
        },
        OnGoogleAuthFail(error) {
            if(error.error == 'popup_closed_by_user') {
                swal('Warning', 'Please clear your browser cache', 'error')
            }
            console.log(error, 'error')
        }
    }
}
</script>

<style>
.google-signin-button {
  color: darkgoldenrod;
  font-weight: 500;
  background-color: white;
  height: 50px;
  font-size: 16px;
  border-radius: 10px;
  padding: 10px 20px 25px 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>