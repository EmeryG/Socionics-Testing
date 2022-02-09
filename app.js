var app = new Vue({
    el: "#app",
    data: {
        q1: -100,
        q2: -100,
        result_message: ''
    },
    methods: {
        submit_result: function() {
            if(this.q1 != -100 && this.q2 != -100) {
                var result = this.q1 - this.q2;
                if(result > 0) {
                    this.result_message = 'You like Socionics ' + Math.round(Math.abs(result)/4.0*100) + "%";
                } else if(result < 0) {
                    this.result_message = 'You hate Socionics ' + Math.round(Math.abs(result)/4.0*100) + "%";
                } else {
                    this.result_message = 'You are completely neutral about Socionics';
                }
            }
        }
    }
})