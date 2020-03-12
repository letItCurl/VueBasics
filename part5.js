new Vue({
    el: '#part5',
    data: {
        title: 'Round 5:',
        clickMessage: 'prevent this !'
    },
    methods: {
        logMessage(message){
            this.clickMessage = message
        }
    }
})