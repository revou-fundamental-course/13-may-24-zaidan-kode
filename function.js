function hitungLuas(){
    var alas  = parseFloat(document.getElementById('alas').value);
    var tinggi= parseFloat(document.getElementById('tinggi').value);
    var luas = 0.5 * alas * tinggi;

    document.getElementById('hasilLuas').innerHTML = 'Alas= ' + alas + ', Tinggi = ' + tinggi + '<br>Hasil = ' + luas;

}

function hitungKeliling(){
    var sisiA  = parseFloat(document.getElementById('sisiA').value);
    var sisiB  = parseFloat(document.getElementById('sisiB').value);
    var sisiC  = parseFloat(document.getElementById('sisiC').value);
    var keliling = sisiA + sisiB + sisiC;

    document.getElementById('hasilKeliling').innerHTML = 'Sisi A= ' + sisiA + ', Sisi B = ' + sisiB + ', Sisi C = ' +sisiC + '<br>Hasil = ' + keliling;

}

function resetLuas(){
    document.getElementById('form-luas').reset();
    document.getElementById('hasilLuas').textContent = '';
}

function resetKeliling(){
    document.getElementById('form-keliling').reset();
    document.getElementById('hasilKeliling').textContent = '';
}