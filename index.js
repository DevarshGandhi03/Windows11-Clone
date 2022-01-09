let startbutton = document.getElementsByClassName("start")[0];
let conte = document.getElementsByClassName("container")[0];

startbutton.addEventListener("click", () => {
    if (conte.style.bottom=="-535px") {
        conte.style.bottom="50px" 
    }
    else{
        conte.style.bottom="-535px"

    }
});
