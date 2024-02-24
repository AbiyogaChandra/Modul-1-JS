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
}