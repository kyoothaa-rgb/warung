// 1. Memilih elemen
const judul = document.getElementById("judul");
const sapaan = document.getElementById("sapaan");
const kelas = document.getElementById("kelas");
 
// 2. Melihat elemen di Console
console.log(judul);
console.log(sapaan);
console.log(kelas);
 
// 3. Mengubah isi teks
judul.textContent = "Judul Sudah Diubah!";
 
// 4. Mengubah warna
judul.style.color = "crimson";
 
// 5. Mengubah isi dengan tag HTML
sapaan.innerHTML = "Halo, saya sedang <b>belajar DOM</b>!";
kelas.innerHTML = "Ini adalah teks baru yang ditambahkan ke dalam elemen dengan id 'XRPL5'.";
kelas.style.fontSize = "30px";

// 6. Mencoba id yang tidak ada
const hantu = document.getElementById("tidakada");
console.log(hantu);
hantu.textContent = "Halo";