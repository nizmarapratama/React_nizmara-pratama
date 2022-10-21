# Global State Management and Data fetching 
## Global State Introduction

# REDUX

### Kapan saat yang tepat saat menggunakan REDUX ?

1. Banyak state yang perlu ditaruh di banyak tempat
2. State pada app sering berubah
3. Logic untuk mengubah state kompleks
4. Ukuran codebase yang sedang-besar, dan dikerjakan oleh banyak orang
5. perlu untuk mengetahui bagaimana state diupdate seiring dengan waktu

### REDUX libraries 

1. React-Redux
2. Redux Toolkit
3. Redux DevTools Extension

### Komponen Penting di Redux

1. Actions
2. Reducer
3. Store

## Action

Digunakan untuk memberikan informasi dari aplikasi ke store

## Reducer

Pure JavaScript functions yang mengambil state aplikasi saat ini dan object action lalu mengembalikan state aplikasi terbaru

## Store

Objek setral yang menyimpan state pada aplikasi

## Memakai dan mengubah state

1. Hooks
2. Connect

----------------------------------------------------------------------------------------------

# REDUX THUNK

Thunk Midlleware untuk yang memungkinkan kita untuk membuat action creator yang mengembalikan function bukan action.

## Kenapa perlu Redux Thunk

Untuk menghandle side affect logic seperti logic synchronnous kompleks yang perlu mengakses store dan juga logic async seperti request data

----------------------------------------------------------------------------------------------

## Menyimpan State ke storage

instal terlebih dahulu = (npm install redux-persist)

----------------------------------------------------------------------------------------------

# Hasura

## What is Hasura ?

Hasura GrapQL Enginer adalah server GrapQL yang sangat cepat yang memberi anda GrapQL API instan dan realtime melalu Postgres, dengan pemicu webhook pada peristiwa database, dan srchemas jarak jauh untuk logika bisnis.

----------------------------------------------------------------------------------------------

# REST API at Postman

- Postman
- MockAPI

## What is Postman ?

Postman adalah platform API bagi pengembang untuk merancang, membangun, menguji dan mengulangi API mereka.

## Why use Postman ?

- Mudah untuk berkolaborasi dengan sinkronisasi otomatis dengan anggota lain
- Antarmuka yang sederhanan
- Postman GERATIS hingga 3 anggota dan koleksi tak terbatas.

## What is MockAPI ?

MockAPI adalah alat sederhana yang memungkinkan anda dengan mudah membuat tiruan API, menghasilkan data khusus, dan membentuk operasi sebelumnya menggunakan antarmuka RESTful.

## Why use MockAPI ?

Karena server API tiruan berguna selama pengembangan dan pengujian saat data langsung tidak tersedia atau tidak dapat diandalkan. Saat mendesain API, anda dapat menggunakan API tiruan untuk bekerja secara bersamaan di front-end dan back-end, serta untuk mengumpulkan uman balik dari pengembang.

----------------------------------------------------------------------------------------------

## What is REST API in React ?

Di sisi lain, React adalah salah satu library JavaScript frond-end paling familiar yang digunakan untuk aplikasi web. Bisnis dapat memperoleh manfaat dengan menggunakan React REST API. Ini tidak hanya akan meningkatkan pengalaman pengguna tetapi juga memungkinkan pengembang untuk membuat aplikasi web besar yang dapat mengubah data tanpa memuat ulang halaman.

## Why use REST API in React ?

Ini memberi pengembang kemampuan untuk mengatur aplikasi yang rumit menjadi sumber daya yang sederhana Mudah bagi klien eksternal untuk membangun REST API Anda tanpa komplikasi. Mudah bagi klien eksternal untuk membangun REST API Anda tanpa komplikasi apa pun. Skalanya sangat mudah, REST API bukan khusus bahasa atau platform, tetapi dapat digunakan dengan bahasa apa pun atau dijalankan di platform apa pun.

----------------------------------------------------------------------------------------------

1. Soal untuk nilai Global State Management (REDUX) (skala 0-100)
   Tambahkan redux dan redux-persist pada assignment sebelumnya.


2. Soal untuk nilai data fetching (0-100)
   Gunakan lah hasura untuk membuat database dan juga Restfull API sehingga memiliki struktur data.

- Hasura
  [image](image/Hasura.JPG)

- Postman
  [image](image/Postman.JPG)

- Axios
  [image](image/Axios-1.JPG)
  [image](image/Axios-2.JPG)

- Hasil
- [image](image/Screenshots-hasil.JPG)