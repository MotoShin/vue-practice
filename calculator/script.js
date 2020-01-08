var app = new Vue({
    el: '#app',
    data: {
        output: '0',
        items: [
            ['7', '8', '9', '÷'],
            ['4', '5', '6', '×'],
            ['1', '2', '3', '-'],
            ['0', '.', '+', '=']
        ]
    },
    methods: {
        exec: function (command) {
            switch (command) {
                case '=':
                    this.output = this.output.replace('÷', '/')
                    this.output = this.output.replace('×', '*')
                    this.output = eval(this.output)
                    break
                case 'C':
                    this.output = '0'
                    break
                default:
                    if (this.output === '0') {
                        this.output = command
                    } else {
                        this.output += command
                    }
            }
        }
    }
})
