# 19_Deployment Build React App

## Kenapa perlu Build ?

secara default, React mengandung bayak pesan peringatan. Peringantan-peringatan ini sangat berguna dalam pengembangan aplikasi. Namun, pesan-pesan ini membuat React menjadi lebih besar dan lambat. Oleh karenanya kita harus menggunakan versi produksi ketika men-deploy aplikasi. 

Tujuan melakukan build agar aplikasi kita menjadi versi production, sehingga performanya lebih ringan dan cepat.

## Build React App

Karena proyek kita dibangun menggunakan Create React App.

*npm run build*

Ini karena membuat versi produksi untuk aplikasi kita di dalam folder _build_. Ini hanya diperlakukan sebelum men-deploy ke produksi. Untuk pengembangan normal, gunakan *npm start*.

