var a = 5;
let b = "kampus merdeka"
const nama = "Nizmara"
let terdaftar = false;
let lengkap_arr = [a, b, nama, terdaftar]

function perkenalan() {
    let asal = "indonesia"
    return console.log(
        "perkenalkan nama saya " +
        nama +
        " nomor urut " + 
        a +
        " sekarang sedang mengikuti " +
        b +
        " berasal dari " +
        asal 
    );
}
terdaftar= !terdaftar
if (terdaftar === true) {
    console.log(nama + " terdaftar kegiatan kampus merdeka")
}

a = b; 
// nama = b;

// console.log("asal diakses =" + asal); (ini menyebabkan eror karena fariable asal hanya berlaku di perkenalan)
console.log("array = " + lengkap_arr[2]);
console.log("a adalah = " + a ); 
console.log("b adalah = " + b );
perkenalan()


// 2.a karena pada fariable terdaftar nilainya false sedangkan kondosinya true (jika ingin mengubah nilai terdaftar bisa menggunakan tanda !terdaftar maka hasilnya akan sama dengan lawan dari nilai terdaftar)
// 2.b karena fariable const tidak bisa di deklasi ulang(pembuatan ulang fariable) dan tidak bisa mengubah nilai dari variable tersebut.
// 2.c Bisa, akan tetapi di baris 28 memiliki error tersendiri(kasus yang berbeda)


// JAWABAN NO 3
const foo = ['Budi', 'Sita', 'ayu'];
const [x,y,z]=foo

console.log([x,y,z])


//  JAWABAN NO 4
let bdays = ['10-17', '05-19', '20-19'];
bdays = bdays.map((item) => {
    return item.replace('-', '/')
})
console.log(bdays)

//  JAWABAN NO 5
let value = [1,2,3,4,5,6];
value = value.map((item) => {
    return item*2
})
console.log(value)

// JAWABAN NO 6
// Soal pada nomer 6 bukan untuk pembulatan keatas, melaikan pembulatan terdekat dari bilangan aslinya.
let arr = [1.5,2.56,5.1,12.33];
arr = arr.map((item) => {
    return Math.round(item)
})
console.log(arr)
