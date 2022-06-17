const input = document.querySelector('#first-group');

//keydown keyup

input.addEventListener('keydown', keyCatch);
input.addEventListener('keyup', keyCatch);

function keyCatch(e){
    console.log(`event type: ${e.type}`);
    console.log(`key code : ${e.keyCode}`);
    console.log(`value : ${e.target.value}`);
}

const input2 =document.querySelector('#second-group');

input2.addEventListener('keyup',deneme);
function deneme(e) {
    console.log(`value : ${e.target.value}`);
}