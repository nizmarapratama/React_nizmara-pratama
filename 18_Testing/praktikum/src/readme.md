# 18_Testing

# 1. Testing Introduction

## Apa itu Testing ?

Testing adalah proses memverifikasi bahwa test assertions kita benar dan bahwa code kita tetap benar sepanjang masalah aplikasi. Test assertion ini adalah ekspresi boolean yang mengembalikan nilai true kecuali ada bug di kode kita.

## Manfaat testing 

- Ketika aplikasi kita mempunyai coverage yang baik (mayoritas codebase tercover oleh test), kita akan merasa percaya diri jika harus mengubah suatu bagian pada aplikasi kita. Saat kita mengubah bagian tersebut, dan ada bagian yang lain menjadi broken kita akan segera mengetahuinya.
- mengurangi bug pada aplikasi. Walaupun testing tidak menjamin aplikasi kita bebas bug, tetapi kita bisa mencegah beberapa hal yang berpotensi menjadi bug.

## Katagori Testing

1. Rendering component trees = di dalam environment tes yang sudah disederhanakan dan ditegaskan pada keluarannya. kita akan fokus pada bagian ini.

2. Menjalankan aplikasi lengkap = di dalam environment peramban (browser) asli. Ini dikenal sebagai tes "end-to-end"

## Rekomendasi tools 

### Jest

test runner pada JavaScript yang memungkinkan Anda mengakses DOM melalui jsdom. Sementara jsdom hanyalah perkiraan cara kerja browser, seringkali cukup baik mengetes komponen pada React. Jest memberikan kecepatan iterasi yang bagus dikombinasikan dengan fitur-fitur yang powerful seperti mocking modules dan timers sehingga Anda dapat memiliki kontrol lebih pada kode yang di jalankan.

### React Testing Library

Merupakan seperangkat helpers yang memungkinkan kita mengetes komponen pada React tanpa bergantung pada detail implementasinya. Pendekatan ini membuat refactoring menjadi mudah dan juga mendorong kita untuk menerapkan best practices untuk aksesibilitas. Mungkin tidak memberikan cara untuk me-render secara "dangkal" pada sebuah komponen tanpa anak, test runner seperti jest yang memungkinkan kita melakukan mocking.

### Install

Jika kita menginstall React menggunakan create-react-app, Jest. (dan React testing library) akan secara default sudah terinstall. Tetapi jika kita, menggunakan custom React setup, kita perlu menginstall dan men set up Jest(dan React Testing Library).

----------------------------------------------------------------------------------------------

# 2. Create basic testing with RTL

## Rendering Komponen 

### Render dan Debug

Fungsi render RTL akan merender file JSX apa pun yang dibutuhkan. Setelah itu, kita baru bisa memiliki akses ke komponen React yang akan kita test. Untuk meyakinkan bahwa file JSX sudah terender, kita bisa menggunakan fungsi debug RTL. Selalu gunakan fungsi debug RTL apabila kita tidak yakin seperti apa hasil dari fungsi render RTL. React Testing Library digunakan untuk berinteraksi dengan komponen kita seperti manusia. Itulah alasan kenapa kita melihat struktur HTML sebagai output dari fungsi render.

## Memilih elemen

React Testing Library menawarkan berbagai fungsi untuk mendapatkan elemen. Element selanjutnya digunakan untuk assertions atau untuk interaksi pengguna. Kita dapat memilih elemen dengan fungsi object screen RTL. Salah satu contohnya ialah getByText untuk memilih teks dari elemen yang sudah dipilih.

## Katagori Testing

<!-- - LabelText: getByLabelText: <label for="search" />
- PlaceholderText: getByPlaceholderText: <input placeholder="search" />
- AltText: getByAltText: <img alt="profile" />
- DisplayValue: getByDisplayValue: <input value="javaScript"/> -->

## Handle Asynchronous

Untuk Kasus apa ? ini digunakan ketika hendak mengetes facth sebuah API. Pada kasus ini kita perlu membuat mock untuk axios (atau yang lain). Selanjutnya kita perlu membuat mock promise hasilnya ketika resolve atau reject. Ini dikembalikan lagi kepada skenario kita.

# 3. Testing Custom Hook

## Library yang digunakan

Untuk mengetes custom hook, kita menggunakan React Hooks Testing Library. Dia akan memberikan kita alat alat untuk mengetes hooks tanpa merender suatu komponen.

