//name="Can"
//var name="Ahmet" //type safe değil
//Ecmascript 9 dan sonra let ve const
//Değişken Tanımlama
//const name="Ahmet"
//Sabit Tanımlama
//let name="Ahmet"

//console.log(name)

/*
function test(){
    if(true)
        var degisken="Merhaba Dünya"
    if(true)
        console.log(degisken)
}
test()
*/

/*
var degisken="Merhaba Dünya"
var degisken="Hello World"
console.log(degisken)
*/

//letle değişkene iki isim atamak sıkıntılı olur
/*
let degisken="Merhaba Dünya"
var degisken="Hello World"
console.log(degisken)
*/

//Hoisting: Bir değişkeni önce tanımlama sonra kullanmak (var değişkeni için)
// console.log(degisken)
// var degisken="Hello World"

//let-const farkları
//let mutable const immutable
//let name="Ahmet"
//const adi="Talha"

// name="Ahmet"
// adi="Can"

/*
var agirlik=50
if (agirlik>49){
    var miktar=1.4
    console.log(`${miktar} su içmelisin`)
}
console.log(miktar)
*/

/*
let agirlik=50
if (agirlik>49){
    var miktar=1.4
    console.log(`${miktar} su içmelisin`)
}
console.log(miktar)
*/

//geleneksel yöntem

/*
function topla(a, b) {
    return a + b
}
*/

/*
function test()
 { console.log("Merhaba" + this.name) }
*/

//Arrow function
//const test=()=>
//{
//a+100
//}

/*
function addToCart(urun_adi,adet,fiyat)
{ }
addToCart("elma",5,10)
addToCart("armut",1,20)
addToCart("kivi",40,50)

let urunler=[{urun_adi:"Elma",fiyat:5,adet:8},
            {urun_adi:"Armut",fiyat:10,adet:2},
            {urun_adi:"Kivi",fiyat:6,adet:7}]

            console.log(urunler[0]["urun_adi"])*/


/*
function topla(...sayilar){
    let toplam=0
    for(let i=0; i<sayilar.lenght; i++){
        toplam=toplam+sayilar[i]
    }
    console.log(toplam)
}
topla(10,20,30,40,50,60)
*/

/*
let [birinci,ikinci,ucuncu]=["İç Anadolu","Marmara","Ege"]
console.log(birinci)
*/

//Condıtıonal ternary operator
//if-else

//diziler


