(function () {
    const buttons = document.querySelectorAll('.counterBtn')
    const counter = document.querySelector('.counter')

    let count = 0

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            if (button.classList.contains('prevBtn')) {
                count--;
            }
            else if (button.classList.contains('nextBtn')){
                count++;
            }
            counter.textContent = count 
            if (count < 0) {
                counter.style.color = 'Red';
            } else if (count > 0) {
                counter.style.color = 'green';
            }else{
                counter.style.color = '#333333'; 
            }
        })
    });
})();