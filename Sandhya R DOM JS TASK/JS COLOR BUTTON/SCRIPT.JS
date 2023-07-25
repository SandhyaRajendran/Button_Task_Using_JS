const button = document.querySelectorAll("button")
// console.log(button)


for(let i=0; i<button.length; i++){
    console.log(button[i])
    function show(){
        if(button[i].innerText == "click1"){
            button[i].classList.toggle("show")

        }
        else if(button[i].innerText == "click2"){
            button[i].classList.toggle("hide")

        }
        else{
            button[i].classList.toggle("long")
        }

    }
    button[i].addEventListener("click",show)
}
