'use strict';



const timer = {
    secondsPassed: 0,
    minsPassed: 0,


    startTimer() {
        //
        console.log(this);

        // //lost context #2
        // [1, 2, 3].filter(function() {
        //     console.log('filter.this: ' + this);
        // });




        setInterval(
            function() {
                console.log(this);

                this.secondsPassed += 1;
            }.bind(this),
            1000,
        );
        //fix contex with bind
        // const CallBackFunc = function() {
        //     console.log(this);

        //     this.secondsPassed += 1;
        // };
        // const bindedCallBackFunc = CallBackFunc.bind(this);
        // setInterval(bindedCallBackFunc, 1000);
    },
    stopTimer() {
        //
    },
    getTime() {
        //
    },
    resetTimer() {
        //
    },
};

//context
// 1. know when context is lost
// 2. fix context


//test data
timer.startTimer();

// //lose context#1
// const startTimerFunc = timer.startTimer();
// startTimerFunc();