// const navDialog = document.getElementById('nav-button-div');

// let eventTrigger = true

// navDialog.addEventListener("click", function(e){
//     console.log("hello")

//     if(eventTrigger){
//         navDialog.innerHTML = '<i class="fa-solid fa-xmark text-gray-600"></i>'
//         eventTrigger= false
//     }

//     else{
//         navDialog.innerHTML = '<i class="fa-solid fa-bars text-gray-600"></i>'
//         eventTrigger= true
//     }
   
// })

const navDialog = document.getElementById('nav-dialog');
function handleMenu() {
    navDialog.classList.toggle('hidden');
}


const dtElements = document.querySelectorAll("dt")
dtElements.forEach(element=>{
    element.addEventListener("click", function(e){
        const ddID = element.getAttribute("aria-controls")
        const faqList= document.getElementById(ddID) 
        const ArrowIcon = element.querySelectorAll("i")[0]

        faqList.classList.toggle("hidden")
        ArrowIcon.classList.toggle("-rotate-180")

    })
})

