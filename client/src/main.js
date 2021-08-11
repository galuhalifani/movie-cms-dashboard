import Vue from 'vue'
import App from './App.vue'
import GoogleSignInButton from 'vue-google-signin-button-directive'

new Vue ({
    GoogleSignInButton,
    render: h => h(App),
}).$mount('#app');

