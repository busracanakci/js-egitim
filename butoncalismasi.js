const btnEkle = document.querySelector('#btnEkle');
btnEkle.addEventListener('click',ekle);
function ekle() {
    console.log("Buton ekle çalıştırıldı");
}
const btnSil = document.querySelector('#btnSil');
btnSil.addEventListener('click',sil);
function sil(){
    console.log("Buton Sil Çalışıtırıldı")
}

//Tek buton iki fonksiyon
const btnDouble = document.querySelector('#btnDouble');
btnDouble.addEventListener('click', fonk1);
btnDouble.addEventListener('click',fonk2);
function fonk1(e) {
    console.log("BtnDouble butonunun ilk fonksiyonu çalıştırıldı");
    e.preventDefault();
}
function fonk2(e) {
    console.log("BtnDouble butonunun ikinci fonksiyonu çalıştırıldı");
    e.preventDefault();
}

//Buradaki e.preventDefault, sayfa scroll durumunda en alttayken butona basıldığında bir linke gitmek istediği için sayfayı yeniliyor ve ekran en üst kısma gidiyor. Bunun önüne geçmek için kullanılıyor.


