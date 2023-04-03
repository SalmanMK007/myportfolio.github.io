(function () { 
    const form = document.querySelector("#message-form")

    form.addEventListener('submit', function (e) {
        e.preventDefault()

        const message = document.querySelector('#message')
        const feedback = document.querySelector('.feedback')
        const messageContent = document.querySelector('.message-content')

        

        if(message.value === '') {
            feedback.classList.remove('feedback')
            setTimeout(function () {
                feedback.classList.add('feedback')
            }, 4000)
        }else{
            messageContent.textContent = message.value
            message.value = ''
        }
    })
})()



console.log(message);






















