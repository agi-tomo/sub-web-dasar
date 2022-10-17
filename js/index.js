const namaSaya = "Margi Nur Utomo";
let usia = 22;

let biodata = document.getElementById("biodata");
let name = document.getElementById("name");
let age = document.getElementById("age");

function Kalangan() {
    let generasi;
    if (usia <= 18 && usia >= 14) {
        generasi = "Remaja";
    } else if (usia <= 30 && usia >= 19) {
        generasi = "Dewasa";
    }
    return (biodata.innerHTML = generasi);
}

console.log(`Nama : ${namaSaya} usia : ${usia}`);

name.innerHTML = namaSaya;
age.innerHTML = usia + " Tahun";

Kalangan();
