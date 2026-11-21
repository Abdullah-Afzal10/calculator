               
function calc(num) {
var a = document.getElementById("inputvalue")
a.value += num 
}
function result(){
    var a = document.getElementById("inputvalue")
a.value = eval(a.value)
}
function clearone(){
    var a = document.getElementById("inputvalue")
    a.value = a.value.slice(0,-1)

}
function clearall(){
    var a = document.getElementById("inputvalue")
     a.value = "";
}