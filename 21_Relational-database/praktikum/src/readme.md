# 21_Relational Database

## Apa itu database ?
Database adalah sekumpulan data yang terorganisir

## Database Relationship

- ONE-TO-ONE = hubungan satu-ke-satu adalah jenis kardinalitas yang mengacu pada hubungan antara dua entitas A dan B dimana satu elemen A hanya dapat dihubungkan dengan satu elemen B, dan sebaliknya. Dalam istilah matematika, ada fungsi bijective dari A ke B.
- ONE-TO-MANY = Dalam analisis sistem, hubungan satu kebanyak adalah jenis kardinalitas yang mengacu pada hubungan antara dua entitas A dan B di mana element A dapat dihubungkan kebanyak elemen B, tetapi anggota B terkait dengan hanya satu elemen A. Contohnya : aggap A sebagai buku. dan B sebagai halaman.
- MANY-TO-MANY = hubungan banyak ke banyak adalah jenis kardinalitas yang mencangkup pada hubungan antara dua entitas, katakanlah, A dan B, dimana a dapat berisi turunan induk yang memiliki banyak anak di B dan sebaliknya. Contohnya: aggap A sebagai Pelukis dan B sebagai kanvas.

## RDBMS (Relational Database Management Systems) 
adalah sebuah sistem manajemen bisnis data relational, sebuah program komputer yang di rancang untuk mengatur/memanajemen sebuah basusu data sebagai sekumpulan data yang disimpan secara terstruktur, dan melakukan operasi-operasi atas data atas permintaan penggunanya.

Software yang menggunakan Relational Database Model sebagai dasarnya, contohnya: MySQL

## Jenis perintah SQL

- DDL = Data Definition Languange
- DML = Data Manipulation Languange
- DCL = Data Control Languange

## DDL STATMENT

- `CREATE DATABASEE database_name;`
- `USE database_name`
- `CREATE TABLE...`
- `DROP TABLE...`
- `RENAME TABLE...`

## CREATE TABLE WITH IS SCHEMA

- `CREATE TABLE table_name(column1 data_type PRIMARY KEY, column2 data_type FOREIGN KEY.... column data_type, PRIMARY KEY (one more columns));`

## MODIFY TABLE SCHEMA

- `ALTER TABLE table_name`
- `ADD COLUMN column_name data_type;`

## TIPE DATA MySQL

- `Num`
- `Huruf`
- `Date`

## Statement Operastion

- INSERT = input data ke table user
- SELECT = menampilkan semua data pada tabel user, menampilkan username dan fullname pada table user yang idnya 1, menampilkan username dan fullname dari table user yang usernamenya tidak kosong
- UPDATE = ubah data fullname ke tabel user dengan id 1
- DELETE = hapus data pada tavel user dengan id 1

## DML Statement

- LIKE/BETWEEN
- AND/OR
- ORDER BY
- LIMIT

## JOIN STANDAR SQL ANSI

- INNER JOIN
  inner join akan mengembalikan baris-baris dari dua tabel atau lebih yang memenuhi syarat

- LEFT JOIN
  left join akan mengembalikan seluruh baris dari tabel disebelah kiri yang dikenai kondisi ON dan hanya baris dari tabel disebelah kanan yang memenuhi kondisi join.

- RIGHT JOIN
  right join akan mengembalikan semua baris dari tabel sebelah kanan yang dikenai kondisi ON dengan data dari tabel sebelah kiri yang memenuhi kondisi join. teknik ini merupakan kebalikan left join.

## FUNGSI AGREGASI SQL

- MIN
- MAX
- SUM
- AVG
- COUNT
- HAVING

## FUNGTION
sebuah kumpulan statment yang akan mengembalikan sebuah nilai baik pada pemanggilannya.

---------------------------------------------------------------------------

## Hasil Praktikum

1. Soal dan jawaban
   - [image](img/Soal_1.jpg)
   - [image](img/Hasil-OneToOne.jpg)

2. Soal dan jawaban
   - [image](img/Soal_2.jpg)
   - [image](img/Hasil-onetomany.jpg)
