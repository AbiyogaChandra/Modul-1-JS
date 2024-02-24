// Definisikan fungsi hitungGrade di sini
function hitungGrade() {
var namaSiswa = document.getElementById("nama").value;
var nilai = parseInt(document.getElementById("nilai").value);
// Validasi input
if (namaSiswa === "" || isNaN(nilai)) {
alert("Nama siswa dan nilai harus diisi!");
return;
}
// Hitung grade menggunakan switch
var grade;
switch (true) {
	case nilai >= 90:
		grade = "A";
		break;
	case nilai >= 80:
		grade = "B";
		break;
	case nilai >= 70:
		grade = "C";
		break;
	case nilai >= 60:
		grade = "D";
		break;
	default:
		grade = "E";
		break;
}
// Tampilkan hasil
var hasilGrade = "Nama Siswa: " + namaSiswa + "<br>Nilai: " +
nilai + "<br>Grade: " + grade;
document.getElementById("hasilGrade").innerHTML = hasilGrade;
// Tambahkan console log untuk perulangan
perulanganFor(nilai);
perulanganWhile(nilai);
perulanganDoWhile(nilai);
}
// Tambahkan fungsi perulanganFor
function perulanganFor(jumlahPerulangan) {
// Contoh perulangan for
console.log("Perulangan for:");
for (var i = 1; i <= jumlahPerulangan; i++) {
console.log("Nilai ke - " + i);
}
}
// Tambahkan fungsi perulanganWhile
function perulanganWhile(jumlahPerulangan) {
// Contoh perulangan while
console.log("Perulangan while:");
var i = 1;
while (i <= jumlahPerulangan) {
console.log("Nilai ke - " + i);
i++;
}
}
// // Tambahkan fungsi perulanganDoWhile
function perulanganDoWhile(jumlahPerulangan) {
	console.log("Perulangan dowhile:");
	var i = 1;
	do {
		console.log("Nilai ke - " + i);
		i++;
	} while (i <= jumlahPerulangan);
}
// Tambahkan event listener untuk tombol
document.getElementById("hitungButton").addEventListener("click",
hitungGrade);