let nav = document.querySelector(".overlay")
let links = document.querySelectorAll(".navlinks")

const openmenu = () => {
    nav.style.display = "block"
}

const closemenu = () => {
    nav.style.display = "none"
}

const toggleLinks = () => {
    links.forEach(link =>{
        // if(link.isClicked == true){
        //     if(!link.classList.contains == "active"){
        //         link.classList.add("active")
        //     }else{
        //         link.classList.remove("active")
        //     }
        // }

        

        
    })
}

// links.forEach(link =>{
//     if(!link.classList.contains("active")){
//         link.classList.add("active")
//     }else{
//         link.classList.remove("active")
//     }
// })