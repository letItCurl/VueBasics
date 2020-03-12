new Vue({
    el: '#part1',
    data: {
        title: 'Basics from cdn vue.js',
        name: 'let_It_Curl',
        url: 'https://youtube.com',
        classes: ['text-success','another-one']

    },
    methods: {
        greet(smiley){
            return `こんにちは ${this.name} ${smiley}`
        }
    }
})