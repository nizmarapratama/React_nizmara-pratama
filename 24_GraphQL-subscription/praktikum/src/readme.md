## 24_GraphQL Subscription

Subscription
Dapatkan pembaruan waktu nyata dari server GraphQL Anda
Selain query dan mutasi, GraphQL mendukung jenis operasi ketiga: Subscription.

Seperti query, Subscription memungkinkan Anda mengambil data. Tidak seperti query, Subscription adalah operasi jangka panjang yang dapat mengubah hasilnya seiring waktu. Mereka dapat mempertahankan koneksi aktif ke server GraphQL Anda (paling sering melalui WebSocket), memungkinkan server untuk mendorong pembaruan ke hasil Subscription.

Subscription berguna untuk memberi tahu klien Anda secara real time tentang perubahan pada data back-end, seperti pembuatan objek baru atau pembaruan bidang penting.

## Kapan harus meenggunakan Subscription

Dalam sebagian besar kasus, klien Anda tidak boleh menggunakan Subscription untuk tetap up-to-date dengan backend Anda. Sebagai gantinya, Anda harus melakukan polling sebentar-sebentar dengan query, atau menjalankan ulang query sesuai permintaan saat pengguna melakukan tindakan yang relevan (seperti mengklik tombol).

### Anda harus menggunakan Subscription untuk hal-hal berikut:

Perubahan kecil dan bertahap pada objek besar. Berulang kali polling untuk objek besar itu mahal, terutama ketika sebagian besar bidang objek jarang berubah. Sebagai gantinya, Anda dapat mengambil status awal objek dengan query, dan server Anda dapat secara proaktif mendorong pembaruan ke masing-masing bidang saat terjadi.

Pembaruan waktu nyata dengan latensi rendah. Misalnya, klien aplikasi obrolan ingin menerima pesan baru segera setelah tersedia.

Note: Subscription tidak dapat digunakan untuk mendengarkan acara klien lokal, seperti Subscription perubahan dalam cache. Subscription dimaksudkan untuk digunakan untuk Subscription perubahan data eksternal, dan perubahan yang diterima disimpan dalam cache. Anda kemudian dapat memanfaatkan model observabilitas Apollo Client untuk melihat perubahan dalam cache, menggunakan client.watchQuery atau useQuery.