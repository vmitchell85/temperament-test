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
    methods: {
        fakeIt() {
            var vThis = this;
            var options = ["P", "M", "S", "C"];

            this.$store.state.questions.forEach(q => {
                var randomValue = options[Math.floor(Math.random() * options.length)];
                vThis.$store.commit('saveAnswer', { no: q.no, selection: { no: q.no, value: randomValue}});
            });
            this.showResults = true;
        },
        resetForm() {
            this.showResults = false;
            this.$store.commit('resetForm');
        }
    }
});