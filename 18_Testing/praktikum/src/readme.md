# 18_Testing

## Apa itu testing ?
Testing adalah proses memverifikasi bahwa test assertions kita benar dan bahwa code kita tetap benar sepanjang masa aplikasi. Test assertion ini adalah ekspresi boolean yang mengembalikan niali true kecuali ada bug di kode kita.

## Manfaat testing 

- ketika aplikasi kita mempunyai coverage yang baik (mayoritas codebase tercover oleh test), kita akan merasa percaya diri jika harus merubah suatu bagian pada aplikasi kita. Saat kita mengubah bagian tersebut, dan ada bagian yang lain menjadi broken kita akan segera mengetahuinnya.
- mengurangi bug pada aplikasi. Walaupun testing tidak menjamin aplikasi kita bebas bug, tetapi kita bisa mencegah beberapa hal yang berpotensi menjadi bug.

## Katagori Testing

1. `Rendering component trees` di dalam enviroment tes yang sudah disederhanakan dan ditegaskan pada keluarannya. Kita akan fokus pada bagian ini.
2. `Menjalankan aplikasi lengkap` di dalam environment peramban(browser) asli. Ini dikenal sebagai tes `end-to-end`.

## Pertimbangan memilih perkakas

- Kecepatan interasi vs environment yang realistis
- seberapa banyak Mock

## Rekomendasi Tools
Jest = Test runner pada JavaScript yang memungkinkan kita mengakses DOM melalui jsdom. 

# Create basic testing with RTL

## Render dan bug 
Fungsi Render RTL akan merender file JSX apa pun yang dibutuhkan. Untuk meyakinkan bahwa file JSX sudah terender, kita bisa menggunakan fungsi debug RTL. Selalu gunakan fungsi debug RTL apabila kita tidak yakin seperti apa hasil dari fungsi render RTL.

# Testing Custom Hook
Library yang di gunakan untuk mengetes custom hook, kita menggunakan React Hooks Testing Library. Dia akan memberikan kita alat-alat untuk mengetes hooks tanpa merender satu komponen.

