window.axios = require('axios');
window.Vue = require('vue');

Vue.component('Question', require('./components/Question.vue'));

import { store } from './store';

var vApp = new Vue({
    el: '#app',
    store,
    mounted() {
        this.$store.commit('setQuestion', 1);
    }
});