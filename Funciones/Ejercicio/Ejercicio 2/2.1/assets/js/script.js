function pintar(ele,color) {
        ele.style.backgroundColor = 'yellow';

}

const ele= document.getElementById("ele1")
color = "green"
ele.style.backgroundColor=color

ele.addEventListener("click", function(){
    pintar(ele,color)
});