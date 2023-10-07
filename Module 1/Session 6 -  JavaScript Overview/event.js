

e= document.getElementById("demo")
e.addEventListener("click",click)
e.addEventListener("dblclick",dbclick)
function mouseover(){
    let e = document.getElementById("demo")
    e.innerText="change"
    e.style.color="red"
}
function mouseout(){
    let e = document.getElementById("demo")
    e.style.color="black"
    e.innerText="This is text"
}
function click() {
    alert("CLicked !!!")
}
function dbclick(){
    document.getElementById("demo").innerHTML="Changed"
}
var timer = 0;
var delay = 200;
var prevent = false;
$("#btn-click")
    .on("click", function() {
        timer = setTimeout(function() {
            if (!prevent) {
                doClickAction();
            }
            prevent = false;
        }, delay);
    })
    .on("dblclick", function() {
        clearTimeout(timer);
        prevent = true;
        doDoubleClickAction();
    });

function doClickAction() {
    alert("Click")
}
function doDoubleClickAction() {
    alert("Double click")
}