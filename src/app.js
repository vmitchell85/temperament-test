window.axios = require('axios');
window.Vue = require('vue');

import { store } from './store';

var vApp = new Vue({
    el: '#app',
    store,
    mounted() {
        // var output = [];
        // var current_number = 1;
        // var current_question = {
        //     no: current_number,
        //     attributes: []
        // };
        // var attribute_count = 0;
        // this.$store.state.questions.forEach(q => {
        //     if (current_number !== q[0]) {
        //         current_number = q[0];
        //         current_question = { no: current_number, attributes: [] };
        //     }

        //     current_question.attributes.push({
        //         text: q[2],
        //         description: q[3],
        //         value: q[1]
        //     });
        //     attribute_count++;
        //     if (attribute_count == 4) {
        //         output.push(current_question);
        //         attribute_count = 0;
        //     }
        // });
        // console.log(output);

        // console.log(JSON.stringify(output));

    }
});