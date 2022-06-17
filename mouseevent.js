const btn = document.querySelector('#btnPlus');
const division = document.querySelector('#first-group');

//click eventi

//btn.addEventListener('click',mouseCatch);
//division.addEventListener('click',mouseCatch);

//dblclick eventi

//division.addEventListener('dblclick',mouseCatch);

//mousedown ve mouseup
//division.addEventListener('mousedown',mouseCatch);
//division.addEventListener('mouseup',mouseCatch);

//mouseenter ve mouseleave
//division.addEventListener('mouseenter',mouseCatch);
//division.addEventListener('mouseleave',mouseCatch);

//mouseover ve mouseout
//division.addEventListener('mouseover',mouseCatch);
//division.addEventListener('mouseout',mouseCatch);

division.addEventListener('mousemove', mouseCatch);

function mouseCatch(e) {
    console.log(`event type: ${e.type}`);
    console.log(e);
    e.preventDefault();
   
}
