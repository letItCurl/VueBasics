new Vue({
    el: '#part4',
    data: {
        title: 'Round 4: The annoying sibling...',
        sentence: 'Can you just stop ?',
        sentenceVModel: 'Can you just stop ? (with v-model)'
    },
    methods: {
        updateSentence(event){
            console.log(event.target.value)
            this.sentence = event.target.value
        }
    }
})