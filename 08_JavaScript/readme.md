# 08_JavaScript

## APA ITU JAVASCRIPT
JavaScript adalah Bahasa pemrograman yang High-level, Scripting. Untyped dan interpreted

## Pengertian Var, Let, Const

### Apa itu Declaration ?
 Declaration adalah proses pembuatan variable untuk menyimpan data

### Apa itu Scoping ?
 Scoping menentukan dimana variabel, fungsi dan objek diatur dan dapat diakses dalam kode kita. Ini berarti ruang lingkup varibel dikendalikan oleh lokasi deklarasi variabel. Scoping dibagi menjadi 3:

 - Global 
 - Function
 - Block

### Apa itu Hoisting ?
Hoisting membuat beberapa jenis variabel atau fungsi dapat diakses/digunakan dalam kode sebelum dideklarasikan.

Deklarasi Var dan function adalah hoisted, oleh karena itu mereka dapat digunakan bahkan sebelum deklarasi itu sendiri terjadi

Sedangkan Let dan const tidak hoisted, oleh karena itu mereka tidak dapat digunakan bahkan sebelum deklarasi terjadi

## Values & References

- primitives = meneruskan nilai
- objects = juga disebut sebagai collection atau reference type

### Primitive
dalam pemrograman adalah unit pemrosesan terkecil dan elemen paling sederhana yang tersedia dalam bahasa pemrograman. 

- sting
- boolean
- number
- bigint(ES11)
- undefined
- Null
- Symbol(ES6)

### Objects 
 Objects adalah unit menyimpan properti dan fungsi (method)

 - object
 - array
 - function
 - date
 - set
 - map
 - weak set
 - weak map

#### Aturan sederhana untuk meneruskan nilai adalah bahwa semua nilai primitif dalam javascript diteruskan oleh nilai.

### Apa itu Destructuring ?
Destructuring adalah ekspresi dari JavaScript yang mungkin untuk menyalin nilai dari array, atau properti dari objek, ke dalam variabel yang berbeda

### Apa itu Spread ?
Spread Syntax dapat digunakan ketika semua elemen dari object atau array perlu dimasukkan kedalam semacam daftar.

## Method pada Array

### Apa itu Method ?
Method merupakan sebuah fungsi yang terkait dengan object, membuat programnya se-sederhana mungkin sesuai kegunaan masing-masing.

CONCAT / menggabungkan dua atau lebih array, dan mengembalikan salinan array yang digabungkan
MAP / membuat array baru dengan hasil memanggil dungsi untuk setiap elemen array
FOREACH / memanggil fungsi untuk setiap elemen array
SLICE / memilih bagian dari array, dan mengembalikan array baru
FILTER / membuat array baru dengan setiap elemen dalam array yang lulus seleksi
REDUCE / melakukan operasi pada setiap elemen array menjadi nilai tunggal (dari kiri ke kanan)

### Apa itu Normal Flow ?
pengeksekusian statement dari atas ke bawah atau kiri ke kanan yang dilakukan secara berurutan

### Apa itu Control Flow ?
Mengatur alur eksekusi pada statment atau jalannya program sesuai keinginan kita

- Pengulangan(loop/iterasi) = For, While, Do While
- Pengkondisian(percabangan) = if ... Else, Switch, Block, Try..Catch, Break, Continue, Throw

TRY...CATCH / try bertugas mengeksekusi statment di dalamnya, sedangkan catch bertugas menangkap error yang terjadi statment di dalam try
TROW / trow terjadi di dalam block try, bertugas melemparkan error sesuai kondisi yang diinginkan, error itu akan ditangkap oleh catch

### Apa itu Function ?
Fungction di dalam JavaScript adalah sebuah objek. Karena meimiliki properti dan juga method. Function digunakan untuk melakukan serangkaian komputasi/prosedur yang dapat digunakan berulang kali

### Apa itu Synchronous ?
Synchronous mengeksekusi setiap perintah satu persatu sesuai urutan kode yang dituliskan.
Output dari code sesuai dengan urutan, karena setiap perintah harus menunggu perintah sebelumnya selesai.

### Apa itu Asynchronous ?
Asynchronous hasil eksekusi atau output tidak selalu berdasarkan urutan kode, tetapi berdasarkan waktu proses.
SetTimeout digunakan untuk menunda eksekusi, karena ada salah satu eksekusi membutuhkan proses yang agak lama, sembaru menunggu proses tersebut javascript mengeksekusi perintah selanjutnya.

### Apa itu Callback ?
Callback adalah fungsi yang dikirimkan sebagai parameter pada fungsi lain atau Callback adalah fungsi yang dieksekusi setelah fungsi lain selesai dijalankan

### Apa itu Promise ?
Promise adalah objek yang merepresentasikan keberhasilan atau kegagalan pada sebuah event yang asynchronous dimasa mendatang.

Asynchronous Callback
- Resolve (promise terpenuhi)---> .Then()
- Reject (promise tidak terpenuhi) ---> .Catch()
- Finally (Promise proses selesai(optional))

### Apa itu Asynchronous function ?
Fungsi Asynchronous sebuah function yang bekerja secara Asynchronous yang menghasilkan promise sebagai return value-nya, tetapi cara penulisan code-nya menggunakan penulisan yang synchronous(standar)

### Apa itu Await ? 
Await adalah sebuah keyword yang terjai pada async function yang tujuannya menghentikan eksekusi sambil menunggu promise-nya selesai

### Apa itu Class ?
Class adalah prototype dari suatu object yang akan kita buat

### Apa itu Constructor ?
Constructor adalah method di dalam class yang akan selalu terpanggil pertama kali ketika membuat object

### Apa itu Method ?
Method adalah sebuah fungsi yang berada di dalam class

### Apa itu Attributes ?
Attributes adalah kumpulan variabel yang membentuk object yang dimiliki oleh suatu class

### Apa itu Extend ?
Extend digunakan untuk membuat kelas anak dari kelas induk. Kelas anak mewarisi seemua atribut dan metode dari kelas induk.

### Apa itu DOM(Document Object Model) ?
adalah API untuk HTML yang mempresentasikan halaman web pada suatu dokumen menjadi sebuah object