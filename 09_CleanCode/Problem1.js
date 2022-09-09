// PROBLEM 1

// 1. kekurangan yang di temukan :
//    - Tidak menggunakan huruf kapital class.
//    - Tidak menggunakan huruf kapital tiap penggantian kata pada penamaan method atau function (kecuali kosakata awal)
//    - Pembuatan function atau method yang tidak benar.
//    - Tidak menggunakan constructor.
//    - Tidak menggunakan metode inheritance.
//    - Tidak menggunakan fungsi array filter dengan benar.


// 2. KEKURANGAN YANG TERJADI PADA BAGIAN : 
//    - class user.
//    - class userintervice
//    - method getalluser pada class userservice.
//    - method getuserbyid pada class userservice
//    - fungsi array filter pada getuserbyid.


// 3. ALASAN KEKURANGAN :
//    a. class user :
//       - tidak menggunakan huruf kapital pada penamaan class, harusnya user.
//       - tidak menggunakan constructor pada tiap property seperti id, username, dan password.

//    b. class userservice :
//       - tidak menggunakan huruf kapital pada penamaan class, harusnya user.
//       - tidak menggunakan metode inheritance/pewarisan untuk mewarisi property-property yang terdapat pada class.
//       - tidak menggunakan constructor pada property users.

//    c. METHOD GETALLUSER PADA CLASS USERINTERVICE : 
//       - tidak menggunakan huruf kapital pada tiap penggantian kata pada nama method(kecuali kosakata awal), harusnya getAlluser.
//       - meletakkan tipe data user [] sebelum nama method yang tidak diperlukan dan akan menimbulkan error.
//       - penyebutan variabel (users) yang tidak benar, harusnya (this.users).

//    d. METHODGETUSERBYID PADA CLASS USERSERVICE :
//       - tidak menggunakan huruf kapital pada tiap penggantian kata pada nama method (kecuali kosakata awal), harusnya getUserById.
//       - meletakan tipe data user sebelum nama method yang tidak diperlukan dan akan menimbulkan error.
//       - penyebutan variabel (users) yang tidak benar, harusnya (this.users).
//       - fungsi array filter yang tidak benar, harusnya meletakan parameter function yang akan meng(return) tipe data Bolean (true/false).