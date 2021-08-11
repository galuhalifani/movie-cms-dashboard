<template>
    <!-- EDIT USER -->
    <section id="edit-user" style="margin-bottom:2rem">
        <div class="page-title shadow rounded bg-secondary bg-gradient">
            <h3>Edit User</h3>
            <!-- <p class="text-subtitle text-muted">All Released Movies</p> -->
        </div>

        <div class = 'card'>
            <!-- <div class= "card-header">
                <button class="btn btn-outline-success" onclick="toAddPage()" style=width:20%;height:50%>Add New Movie</button>
            </div> -->
            <div class= "card-body" style="overflow-x: scroll">
                <form onsubmit="editUser(event)" id="editUserForm" action="/">
                    <label>Name</label><br>
                    <input type='text' id='editUser-name' name='name' placeholder="Your Name" v-model="name" required><br><br>
                    <label>Username</label><br>
                    <input type='text' id='editUser-username' name='username' placeholder="Your Username" v-model="username" required><br><br>
                    <label>Phone Number</label><br>
                    <input type='text' id='editUser-phoneNumber' name='phoneNumber' placeholder="e.g 085692738224" v-model="phoneNumber"><br><br>
                    <label>Address</label><br>
                    <input type='text' id='editUser-address' name='address' placeholder="e.g Comedy Street 79, Jakarta, Indonesia" v-model="address"><br><br>
                    <p class='errorEditUser'></p>
                        <button class="confirmbtn" style="width:50%;display: inline" type="submit" @click.prevent="editUser">Update Profile</button>
                        <button class="redbtn" style="width:50%;display: inline" @click.prevent="toMovieList">Cancel</button>    
                </form>        
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'EditUserForm',
    props: ["editedUser"],
    data() {
        return {
            name: this.editedUser.name,
            username: this.editedUser.username,
            phoneNumber: this.editedUser.phoneNumber,
            address: this.editedUser.address
        }
    },
    methods: {
        toMovieList() {
            this.$emit('toMovieList')
        },
        editUser() {
            let userEdit = {
                name: this.name,
                username: this.username,
                phoneNumber: this.phoneNumber,
                address: this.address
            }
            this.$emit('editUser', userEdit)
        }
    },
    computed: {
        userEdit() {
            return {...this.editedUser};
        }
    }
    // watch: {
    //     editedUser(val) {
    //         this.name = val.name
    //         this.username = val.username
    //         this.phoneNumber = val.phoneNumber
    //         this.address = val.address
    //     }
    // }
}
</script>

<style>

</style>