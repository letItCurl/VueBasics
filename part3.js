new Vue({
    el: '#part3',
    data: {
        title: 'Round 3: Where is my log ?',
        coords: {
            x: 0,
            y: 0,
        }
    },
    methods: {
        logEvent(event){
            console.log(event)
        },
        logCoords(event){
            this.coords.x = event.offsetX
            this.coords.y = event.offsetY
        }
    }
})