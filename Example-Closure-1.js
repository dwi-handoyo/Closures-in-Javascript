
// Example Closure 

function init1() {
 let nama = 'Godam'; //local variable
 function tampilNama(){ //inner function (closure)
  console.log(nama); //akses ke parent variable
}
tampilNama();
}

init1();
// inner function yang membutuhkan variable di parent scope-nya (lexical scope) disebut closure
// buka console
// outputnya:
// Godam

function init2() {
 let nama = 'Godam';
 function tampilNama(){
  console.log(nama);
}
console.log(tampilNama());
}

init2();

// buka console
// outputnya:
// Godam
// undefined

function init3() {
 let nama = 'Godam';
 function tampilNama(){
  console.log(nama);
}
console.dir(tampilNama);
}

init3();

// buka console
// outputnya berupa Object:
// ƒ tampilNama()

// klik Scopes, akan tampil:
// [[Scopes]]: Scopes[2]
// 0: Closure (init) {nama: 'Godam'}
// 1: Global {window: Window, self: Window, document: document, name: '', location: Location, …}

function init4() {
 let nama = 'Godam';
 function tampilNama(){
  console.log(nama);
}
return tampilNama;
}

init4();

// buka console
// output:
// Nothing

// ini karena dgn perintah return baru setengah program aja yg dijalankan
// agar dijalankan seluruhnya, maka baris terakhir ganti dgn kode berikut (buka kasus4):
// let panggilNama = init();
// panggilNama();

function init5() {
 let nama = 'Godam';
 function tampilNama(){
  console.log(nama);
}
return tampilNama;
}

let panggilNama5 = init5();
panggilNama5();

// buka console
// output:
// Godam

function init6() {
 let nama = 'Godam';
 function tampilNama(tampil){
  console.log(nama);
  console.log(tampil)
}
return tampilNama;
}

let panggilNama6 = init6();
panggilNama6("Gada");

// buka console
// output:
// Godam
// Gada

function init7() {
 //let nama = 'Godam';
 function tampilNama(nama){
  console.log(nama);
}
return tampilNama;
}

let panggilNama7 = init7();
panggilNama7('Godam');

// buka console
// output:
// Godam


function init8() {
 //let nama = 'Godam';
 return function(nama){
  console.log(nama);
}
}

let panggilNama8 = init8();
panggilNama8('Palu');
panggilNama8('Godam');

// buka console
// output:
// Palu
// Godam








