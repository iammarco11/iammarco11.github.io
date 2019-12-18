var modal = '';

function open_modal(id){
    modal = document.getElementById(id)
    modal.style.display = "block"
    console.log(modal)
}
function close_modal(){
    modal.style.display = "none"
}

var dp = ''

function on_hover(id){
       
    k = document.getElementById(id) 
    k.style.display = "block"
    console.log(k)
}