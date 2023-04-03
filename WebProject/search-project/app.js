// the working code and work by class name
const search = () => {
    var searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("product_list")
    var product = document.querySelectorAll(".product")
    var name = document.querySelectorAll(".p-details")
    // var name = document.getElementsByTagName("h3")
    


        for(var i = 0; i < name.length; i++) {
            var match = product[i].querySelectorAll(".p-details")[0];



            if (match) {
                var text = match.textContent || match.innerHTML

                if (text.toUpperCase().indexOf(searchbox) > -1) {
                    product[i].style.display = "";
                } else {
                    product[i].style.display = "none";
                }
            }
        }
    }

// the working code and work by tage name
// const search = () => {
//     const searchbox = document.getElementById("search-item").value.toUpperCase();
//     const storeitems = document.getElementById("product_list")
//     const product = document.querySelectorAll(".product")
//     const pname = document.getElementsByTagName("h2")
//     const rname = document.getElementsByTagName("h3")

//         for (var i = 0; i < rname.length; i++) {
//             let match = product[i].getElementsByTagName('h3',)[0];
// 
// 
//     for (var i = 0; i < pname.length; i++) {
//         let match = product[i].getElementsByTagName('h2',)[0];


//             if (match) {
//                 let textvalue = match.textContent || match.innerHTML

//                 if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
//                     product[i].style.display = "";
//                 } else {
//                     product[i].style.display = "none";
//                 }
//             }
//         }
//     }
// }