new Vue({
    el: '#part6',
    data: {
        title: 'Round 6: just understanding v-if / v-else-if',
        showName: false,
        showAge: true
    },
    methods: {
        toggleName(){
            this.showName = !this.showName
        },
        toggleAge(){
            this.showAge = !this.showAge
        }
    }
})