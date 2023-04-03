
var buttons = document.querySelectorAll(".btn");
var screen = document.querySelector(".screen");
var equal = document.querySelector(".btn-equal")
var clear=document.querySelector('.btn-clear');

buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        if (event.target.innerHTML == "C") {
            return screen.value = "";
        } else if (event.target.innerHTML == "=") {
            return;
        }

    
        clear.addEventListener('click',function(e){
    screen.value=""
    });


        let view = event.target.dataset.num;
        screen.value += view;

    });
});

        equal.addEventListener('click', function (event) {
    if (screen.value == "") {
        return alert("Please Enter a Value");
    } else{
        let answer = eval(screen.value);
        screen.value = answer;
        // screen.value = screen.value + "=" + eval(screen.value);
    }
});