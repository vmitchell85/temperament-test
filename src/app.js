window.axios = require('axios');
window.Vue = require('vue');

Vue.component('Question', require('./components/Question.vue'));

import { store } from './store';

var vApp = new Vue({
    el: '#app',
    store,
    data() {
        return {
            showResults: false
        }
    },
    mounted() {
        this.$store.commit('setQuestion', 1);
    },
    methods: {
        fakeIt() {
            var vThis = this;
            this.$store.state.questions.forEach(q => {
                vThis.$store.commit('saveAnswer', {no: q.no, selection: {no: q.no, value: "C"}});
            });
        }
    }
});