new Vue({
    el: '#part2',
    data: {
        title: 'Round 2: the power of coffe',
        wage: 10

    },
    methods: {
        changeWage(amount){
            this.wage += amount
        }
    }
})