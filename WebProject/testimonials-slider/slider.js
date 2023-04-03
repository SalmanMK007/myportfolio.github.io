(function () {
    const customerImage = document.querySelector('#customer-img')
    const customerName = document.querySelector('#customer-name')
    const customerText = document.querySelector('#customer-text')

    const btn = document.querySelectorAll('.btn')
    let index = 0
    const customers = []


    function Customer(img, name, text) {
        this.img = img
        this.name = name
        this.text = text
    }

    function createCustomer(img, name, text) {
        let Img = `./img/${img}.png`
        let customer = new Customer(Img, name, text)


        customers.push(customer)
    }

    createCustomer(0, 'KIA Car', 'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore labore nemo, praesentium voluptatem ametadipisicing elit. Dolore, hti sshf jjsdie okdshoa oisdfho sdfih eofih asdfoh sdflkhsldfhowheas osoadfhpraesentium voluptatem amet')
    createCustomer(1, 'KIA Car', 'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore labore nemo, praesentium voluptatem ametadipisicing elit.consectetur Lorem consectetur Lorem consectetur Lorem consectetur Lorem consectetur Lorem consectetur Lorem consectetur Lorem consectetur Lorem consectetur Lorem consectetur Lorem consectetur Lorem consectetur Lorem consectetur Lorem  Dolore, hti sshf jjsdie okdshoa oisdfho sdfih eofih asdfoh sdflkhsldfhowheas osoadfhpraesentium voluptatem amet')
    createCustomer(2, 'Red KIA', 'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit consectetur Lorem consectetur Lorem consectetur Lorem consectetur Lorem consectetur Lorem consectetur Lorem consectetur Lorem amet, consectetur adipisicing elit. Dolore labore nemo, praesentium voluptatem ametadipisicing elit. Dolore, hti sshf jjsdie okdshoa oisdfho sdfih eofih asdfoh sdflkhsldfhowheas osoadfhpraesentium voluptatem amet')
    createCustomer(3, 'White KIA', 'Lorem ipsum dolor sit amet, consectetur Lorem consectetur Lorem consectetur Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore labore nemo, praesentium voluptatem ametadipisicing elit. Dolore, hti sshf jjsdie okdshoa oisdfho sdfih eofih asdfoh sdflkhsldfhowheas osoadfhpraesentium voluptatem amet')
    

    btn.forEach(function (button) {
        button.addEventListener('click', function(e){
            if (e.target.parentElement.classList.contains('prvebtn')) {
                if (index === 0) {
                    index = customers.length
                }
                index--
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }

            if (e.target.parentElement.classList.contains('nextbtn')) {
                index++
                if (index === customers.length) {
                    index = 0
                }
                
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }
        })
    })

})()