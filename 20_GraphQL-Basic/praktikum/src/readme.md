# 20_React JS & GraphQL

## GraphQL Overview

### What is GrapQL ?

GraphQL adalah bahasa Query untuk API Anda, dan runtime sisi server untuk mengeksekusi Query dengan menggunakan sistem tipe yang Anda tentukan untuk data Anda, GraphQL meminimalkan jumlah data yang perlu ditransfer melalui jaringan, dengan graphQL kita dapat menggunakan satu titik akhir tunggal (/graphQL) untuk setiap permintaan yang diperlukan.

## GraphQL Core Features

Sebelum kita dapat melakukan GraphQL maka kita perlu men-setup GraphQL Server (Backend), Anda dapat menggunakan Hasura, Apollo Server atau lainnya untuk melakukan itu. Kemudian kita dapat menggunakan GraphQL pada client baik menggunakan Prisma, Apollo Client, Postman, dll.

Kemudian ada 3 fitur utama klien GraphQL :
1. Query, mendapatkan data berdasarkan query tertentu yang kita definisikan
2. Mutation, insert, update, delete data
3. Subscription, dapatkan tanggal terupdate secara realtime/berdasarkan event.

## Query Basics

Dengan graphQL kita bisa mendapatkan data yang kita butuhkan. Kami menentukan bidang apa yang ingin kami dapatkan dan graphQL akan memberi kami data berdasarkan apa yang kami definisikan. Misalnya, bayangkan ada satu koleksi dalam database yang menyimpan data film. Semua data yang tidak dibutuhkan seperti director, create_at dan updated_at tidak akan disertakan dalam hasil.

## Query multiple related data sources / collections

Kami juga dapat menggunakan kueri untuk mendapatkan data dari beberapa koleksi terkait. jika kita ingin mendapatkan data direktur kita perlu menggunakan director.id untuk mendapatkan data dari endpoint lain, tetapi dengan graphQL kita juga dapat mendefinisikan bidang yang dibutuhkan secara langsung asalkan tersedia di server GraphQL.

## Query multiple related data sources / collections

Kami juga dapat menggunakan kueri untuk mendapatkan data dari beberapa koleksi yang tidak terkait untuk meminimalkan permintaan jaringan. Gambar jika kita menginginkan data film dan data buku. Dengan REST kita perlu melakukan setidaknya 2 titik akhir yang berbeda. Dengan GraphQL kita bisa melakukan 1 request untuk mendapatkan data tersebut.

## Query fragments

Fragmen GraphQL adalah bagian dari logika yang dapat dibagi antara beberapa Query dan mutasi. Kita dapat menggunakan fragmen untuk menyederhanakan Query mutasi.

## Mutation 

Mutasi pada dasarnya adalah fungsi untuk memperbarui, menyisipkan dan menghapus data. Kita perlu mendefinisikan operasi apa yang ingin kita lakukan (berdasarkan operasi yang tersedia di server graphQL Anda) dan kemudian menentukan data apa yang harus dikembalikan oleh GraphQL.

## Subscription

- Berlangganan adalah fitur GraphQL yang memungkinkan server mengirim data ke kliennya ketika peristiwa tertentu terjadi. Langganan biasanya diimplementasikan dengan WebSockets. Dalam pengaturan itu, server mempertahankan koneksi yang stabil ke klien langganannya.

- Ketika data dimodifikasi maka klien akan mendapatkan data yang diperbarui secara langsung secara real-time. Jika kami berlangganan pada pengumpulan orang maka setiap kali orang baru ditambahkan atau ketika data dihapus atau diubah maka kami akan mendapatkan data yang diperbarui secara real-time langsung ke klien kami. Berlangganan hanya akan terjadi di sisi klien bukan sisi server.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Hasil Praktikum

1. Soal 6 Query dan Hasil
   - [image](img/Soal-6_query.JPG)
   - [image](img/Hasil_soal-6.JPG)

2. Soal 7 mutation dan Hasil result
   - [image](img/Soal-7_mutation.jpg)
   - [iamge](img/Hasil_soal-7.jpg)

3. Soal 8 mutation dan Hasil result
   - [iamge](img/Soal-8_mutation.jpg)
   - [image](img/Hasil_soal-8.jpg)

## Tempat pengumpulan json file

- [query](quey.json)