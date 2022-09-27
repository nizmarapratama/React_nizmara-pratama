# 15_React Routing

## Apa itu Router ?

Router merupakan modul dalam react yang berfungsi untuk melakukan proses navigasi pada SPA(Single Page Application)

## Multi Page Application vs Single Page Application

1. Apa itu Multi Page application ?
   - Multi Page Application(MPA) juga disebut dengan tradisional web app adalah jenis aplikasi website dimana perlu memuat ulang seluruh halaman web setiap kali membuat permintaan baru

2. Apa itu Single Page Application ?
   - Single Page Application(SPA) adalah salah satu jenis aplikasi website dimana hanya ada 1 halaman yang menangani semua aktivitas yang terjadi dalam aplikasi tersebut

## Keunggulan SPA dan MPA 

- Single Page Aplication
    - waktu loding website jauh lebih cepat
    - tidak ada query tambahan ke server
    - front-end yang cepat dan responsif
    - meningkatkan pengalaman pengguna(use experience)

- Multi Page Application
    - SEO website akan lebih mudah dioptimasi
    - memudahkanmu untuk mengubah halaman tertentu untuk setiap kebutuhan yang berbeda
    - menggunakan tools analisis seperti Google Analytics yang dapat terintegrasi langsung dengan website

## Kekurangan SPA

- Single Page Application 
    - tidak bagus dalam hal SEO
    - berat saat di-lood/buka pertama kali
    - kurang aman dibandingkan dengan Website biasa
    - Masalah kompabilitas browser

- Multi Page Application
    - Kecepatan download website jauh lebih lama jika dibandingkan dengan single page application
    - kita perlu mengintegrasikan antara front-end dan back-end
    - lebih sering membutuhkan maintenance dan update
    - mungkin akan lebih sering menemukan masalah perfirma pada website

## BrowserRouter

Digunakan sebagai router yang menggunakan API history dari HTML5, sehingga dapat menggunakan location untuk sinkronkan UI dengan url. Di dalam object location sendiri mempresentasikan dimana lokasi aplikasi sekarang

## Route

- Route digunakan sebagai pengarah jalannya lalu lintas suatu aplikasi web

- Attribute path merupakan url pada browser pada proses routing

- Attribute component merupakan suatu komponen yang akan ditampilkan kepada user saat mengakses path yang didefinisikan 

## Switch 

Digunakan untuk membungkus kumpulan beberapa component Route.

Exact bertugas untuk memastikan route hanya me-render component yang memiliki path yang cocok, jika tidak ada yang cocok, maka route yang akan di-render yaitu route terakhir dengan component notfound

## Link 

Digunakan untuk berpindah antar halaman, property to tersebut merujuk pada path di route yang akan dituju.

Element kosong <></> tersebut adalah shorthand dari <React.Fragment></React_Fragment> yang mana bisa untuk membungkus child element tanpa menambahkan node ke dalam DOM.

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Menggunakan url param React

## Apa itu URL Parameter ?

Parameter URL adalah suatu parameter yang nilainya diterapkan secara dinamis di URL halaman.

## Perbedaan Link dan Redirect

1. Link
   - dapat digunakan kondisi apapun
   - memberikan history baru pada browser
   - bereaksi dengan click seperti a href

2. Redirect
   - lebih sering digunakan pada halaman 404
   - menimpa history pada browser
   - bereaksi dengan suatu kondisi

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Hook Routing React

- useHistory
- useLocation
- useParams
- useRouteMatch

1. useHistory memberikan kita akses ke instance riwayat yang dapat anda gunakan untuk bernavigasi, seperti dan kegunaanya :
   
   - length: (angka) jumlah entri dalam tumpukan riwayat
   - go: (fungsi) memindahkan penunjuk di tumpukan riwayat sebanyak n entri
   - goBack: (fungsi) setara dengan go(-1)
   - goForward: setara dengan go(1)
   - Push: (fungsi) mendorong entri baru ke tumpukan riwayat
   - Replace: (fungsi) mengganti entri saat ini di tumpukan riwayat history

2. useParams mengembalikan objek pasangan kunci/nilai parameter URL. Gunakan untuk mengakses match.params dari <Route> saat ini.

3. useRouteMatch mencoba mencocokkan URL saat ini dengan cara yang sama seperti <Route>. Ini sebagian besar berguna untuk mendapatkan akses ke data kecocokan tanpa benar-benar merender <Route>.

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Assigment React Routing 

## 1. Home.js
   [image](img/Home-1.js.jpg)

   [image](img/Home-2.js.jpg)


## 2. Navbar.js 
   [image](img/Navbar.js.jpg)


## 3. ToDoInput.js
   [image](img/ToDoInput.js.jpg)


## 4. ToDoList.js
   [image](img/ToDoList.js.jpg)


## 5. about-app.jsx
   [image](img/about-app.jsx.jpg)


## 6. about-author.jsx
   [image](img/about-author.jsx.jpg)


## 7. about.jsx
   [image](img/about.jsx.jpg)


## 8. App.js
   [image](img/App.js.jpg)


## 9. index.js
   [image](img/index.js.jpg)


# HASIL

## 1. Hasil ToDoInput
   [image](img/Hasil-ToDoInput.jpg)


## 2. Hasil about
   [image](img/Hasil-about.jpg)


## 3. Hasil about-app
   [image](img/Hasil-aboutapp.jpg)


## 4. Hasil about-author 
   [image](img/Hasil-aboutauthor.jpg)


## 5. Hasil NotFound
   [image](img/Hasil-notfound.jpg)

   