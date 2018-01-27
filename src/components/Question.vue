<template>
    <div class="question bg-white border-t-4 border-blue shadow-md mx-2 md:mx-0" v-if="question">
        <div class="font-normal text-lg px-4 py-2 border-b flex justify-between">
            <div>Question {{question.no}}</div>
            <div class="text-xs text-grey-dark uppercase">{{$store.getters.remaining}} Remaining</div>
        </div>
        <div class="p-2">
            <div v-for="(answer, index) in question.attributes"
                :key="index"
                @click="setSelection(answer)"
                class="flex mb-2 p-2 rounded-lg cursor-pointer"
                :class="{'bg-grey-lighter' : selection == answer}"
            >
                <div class="pr-2">
                    <svg v-if="selection && answer && selection.value  == answer.value" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-6 h-6 fill-current text-green-dark"><path fill="currentColor" d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z" class=""></path></svg>
                    <svg v-else aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-6 h-6 fill-current"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z" class=""></path></svg>
                </div>
                <div class="">
                    <h5 class="text-base md:text-lg font-normal text-grey-darkest" v-text="answer.text"></h5>
                    <p class="text-sm md:text-base ml-4 text-grey-darker" v-text="answer.description"></p>
                </div>
            </div>
        </div>
        <div class="px-4 py-2 flex justify-between border-t">
            <button v-if="question.no !== 1" class="px-4 py-2 rounded bg-blue-light text-grey-lightest" @click="prevQuestion">Previous Question</button>
            <div v-else></div>
            <button v-if="question.no !== 40" class="px-4 py-2 rounded bg-blue-light text-grey-lightest" @click="nextQuestion">Next Question</button>
            <div v-else></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        question: Object,
        answer: Object
    },
    data() {
        return {
            selection: null
        }
    },
    mounted() {
        var vThis = this;
        document.onkeydown = function(e) {
            var code = (e.keyCode ? e.keyCode : e.which);
            switch (code) {
                case 49:
                    vThis.setSelection(vThis.question.attributes[0]);
                    break;
                case 50:
                    vThis.setSelection(vThis.question.attributes[1]);
                    break;
                case 51:
                    vThis.setSelection(vThis.question.attributes[2]);
                    break;
                case 52:
                    vThis.setSelection(vThis.question.attributes[3]);
                    break;
                case 39:
                    if (vThis.question.no !== 40) {
                        vThis.nextQuestion();
                    }
                    break;
                case 37:
                    if (vThis.question.no !== 1) {
                        vThis.prevQuestion();
                    }
                    break;
            }
        };
        if (this.answer) {
            this.selection = this.question.attributes.find(a => {return a.value == this.answer.value});
        }
    },
    watch: {
        answer(to, from) {
            if (to) {
                this.selection = this.question.attributes.find(a => {return a.value == to.value});
            }
        }
    },
    methods: {
        setSelection(answer) {
            this.selection = answer;
            this.$store.commit('saveAnswer', {
                no: this.question.no,
                selection: this.selection
            });
        },
        nextQuestion() {
            this.$store.commit('setQuestion', this.question.no + 1);
            this.selection = null;
        },
        prevQuestion() {
            this.$store.commit('setQuestion', this.question.no - 1);
            this.selection = null;
        }
    }
}
</script>
