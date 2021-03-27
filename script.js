(function(){
    var cards = document.querySelectorAll(".card")
    cards.forEach(e=>{
        e.addEventListener("click",()=>{
            resetWidth();
            e.style.width="65%"
            e.classList.add("scale-images")
            e.children[1].style.opacity="1"
            e.children[1].style.transition="1s"
        })
    })


    function resetWidth()
    {
        cards.forEach(e=>{
           e.style.width="7%"
           e.classList.remove("scale-images")
           e.children[1].style.opacity="0"
           e.children[1].style.transition="none"

        })
    }





})()
