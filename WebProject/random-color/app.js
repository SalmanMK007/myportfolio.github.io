const colorget =()=>{
    const randomNumber =Math.floor (Math.random()*16777215)
    const randomCode = "#" + randomNumber.toString(16)

    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerHTML= randomCode;
    
    console.log(randomNumber,randomCode);
};
console.log(colorget);

document.getElementById("btn").addEventListener("click",colorget);

// when i refresh the page then the code automatically run 
colorget();