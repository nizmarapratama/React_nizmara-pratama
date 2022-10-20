# 23_GraphQL Mutation

Sekarang setelah kita mempelajari cara mengkueri data dari backend kita dengan Apollo Client, langkah alami berikutnya adalah mempelajari cara memodifikasi data back-end dengan mutasi.

## Fungsi Mutation
Fungsi mutasi yang dapat Anda panggil kapan saja untuk menjalankan mutasi
Tidak seperti useQuery, useMutation tidak menjalankan operasinya secara otomatis saat render. Sebagai gantinya, Anda memanggil fungsi mutasi ini.

Selain fungsi mutate, hook useMutation mengembalikan objek yang mewakili status eksekusi mutasi saat ini. Bidang objek ini (tercantum dalam Hasil) menyertakan boolean yang menunjukkan apakah fungsi mutasi telah dipanggil, dan apakah hasil mutasi sedang dimuat.

## Object pada Mutation

- Objek dengan bidang yang mewakili status saat ini dari eksekusi mutasi (data, pemuatan, dll.)
- Objek ini mirip dengan objek yang dikembalikan oleh kait useQuery. Untuk detailnya, lihat Hasil.

## Cara Mengkaitkan Mutation
Kait useMutation React adalah API utama untuk mengeksekusi mutasi dalam aplikasi Apollo.

Untuk menjalankan mutasi, Anda terlebih dahulu memanggil useMutation di dalam komponen React dan meneruskannya ke mutasi yang ingin Anda jalankan.

## Memperbarui data lokal
Saat Anda menjalankan mutasi, Anda memodifikasi data back-end. Biasanya, Anda kemudian ingin memperbarui data cache lokal Anda untuk mencerminkan modifikasi back-end. Misalnya, jika Anda menjalankan mutasi untuk menambahkan item ke daftar tugas, Anda juga ingin item tersebut muncul di salinan daftar yang di-cache.

## useMutation API
Opsi yang didukung dan bidang hasil untuk kait useMutation tercantum di bawah ini.Sebagian besar panggilan ke useMutation dapat menghilangkan sebagian besar opsi ini, tetapi mengetahui keberadaan opsi ini akan berguna. Untuk mempelajari lebih detail tentang useMutation hook API dengan contoh penggunaan, lihat referensi API.