function hitungBMI() {
    const beratBadan = Number(document.getElementById("beratBadan").value);
    const tinggi = Number(document.getElementById("tinggi").value);
    const hasilBMI = document.getElementById("hasilBMI")

    const bmi = beratBadan / (tinggi * tinggi) * 10000;

    let result = "";

    if (bmi < 18.5) {
        result = "Kurang Berat Badan";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        result = "Normal (Sehat)";
    } else if (bmi >= 25 && bmi < 29.9) {
        result = "Kelebihan Berat Badan";
    } else {
        result = "Obesitas";
    }

    hasilBMI.innerText = `BMI anda adalah ${bmi.toFixed(2)}. Anda termasuk kategori ${result}`
}
