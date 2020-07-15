const toTop = document.getElementById('top-button');
window.addEventListener("scroll",() =>{
    if(window.pageYOffset > 100){
        toTop.classList.add("active");
    }else{
        toTop.classList.remove("active");
    }
})