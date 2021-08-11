<template>
    <!-- REGISTER -->
    <section id="register" style="height:100vh; overflow-y:auto">
        <div>
        <form @submit.prevent="register" action="action_page.php" style="border:1px solid #ccc">
            <div class="container">
            <div class="containerBox">

            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
            <p>Fields marked with * are mandatory</p>
            <hr>

            <label for="name"><b>Full Name</b></label>
            <input type="text" id='registerName' placeholder="Your Name" name="name" v-model="newUser.name">

            <label for="username"><b>Username</b></label>
            <input type="text" id='registerUsername' placeholder="Username" name="username" v-model="newUser.username">
        
            <label for="email"><b>Email*</b></label>
            <input type="text" id='registerEmail' placeholder="Enter Email" name="email" required v-model="newUser.email">
        
            <label for="psw"><b>Password*</b></label>
            <input type="password" id='registerPassword' placeholder="Enter Password" name="password" required v-model="newUser.password">

            <label for="phoneNumber"><b>Phone Number (10-13 digits, numbers only)</b></label><br>
            <input type="tel" pattern="[0-9]{10-13}" id='registerPhone' placeholder="Enter Phone Number" name="phoneNumber" v-model="newUser.phoneNumber"><br><br>

            <label for="address"><b>Address</b></label>
            <input type="text" id='registerAddress' placeholder="Enter Address" name="address" v-model="newUser.address">
                        
            <p>Already have an account? Log in <a href="/" style="color:dodgerblue" v-on:click.prevent="toLoginPage">here</a>.</p>

            <p class='errorLogin'></p>

            <div class="clearfix">
                <button type="submit" class="confirmbtn">Sign Up</button>
                <button type="button" id="loginButton" class="redbtn" @click.prevent="toLoginPage">Log In</button>
            </div>
            </div>
        </div>
        </form>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Register',
    data() {
        return {
            newUser: {
                name: '',
                username: '',
                email: '',
                password: '',
                phoneNumber: '',
                address: ''
            }
        }
    },
    methods: {
        register() {
            let newUserData = {
                name: this.newUser.name,
                username: this.newUser.username,
                email: this.newUser.email,
                password: this.newUser.password,
                phoneNumber: this.newUser.phoneNumber,
                address: this.newUser.address
            }
            this.$emit('register', newUserData)
        },
        toLoginPage() {
            this.$emit('toLoginPage', 'login')
        }
    }
}
</script>

<style>

</style>