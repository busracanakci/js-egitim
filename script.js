//AYRI AYRI BUTON OLUŞTURMA VE AYRI FONKSİYONLARA ERİŞME 
const btn = document.querySelector('#btnDeleteAll');
//btn.addEventListener('click',function(){
//    console.log('butona tıklandı');
//})
const btn2 = document.querySelector('#btnAddTask');


btn2.addEventListener('click',function(e){
    console.log('Add Butonuna Tıklandı Buton 2');
    e.preventDefault();
})
btn.addEventListener('click',btnClick);
function btnClick() {
    console.log('Delete Butonuna tıklandı Buton 1');
}

//İKİ FONKSİYONA TEK BUTONDAN ERİŞME

const btn3 = document.querySelector('#btnDouble');
btn3.addEventListener('click',fonk1);
btn3.addEventListener('click',fonk2);

function fonk1(){
    console.log("Double butonu fonksiyon 1den ulaşıldı");
}
function fonk2() {
    console.log("Double butonu fonksiyon 2den ulaşıldı");
}
