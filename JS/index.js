
function tinhTien() {
    var luongngay = +document.getElementById('luong-ngay').value;
    var ngaylam = +document.getElementById('ngay-lam').value;

    var tienLuong = luongngay * ngaylam;

    document.getElementById('ket-qua-b1').innerHTML = tienLuong;
}
function tinhTBinh() {
    var so1 = +document.getElementById('so-1').value
    var so2 = +document.getElementById('so-2').value
    var so3 = +document.getElementById('so-3').value
    var so4 = +document.getElementById('so-4').value
    var so5 = +document.getElementById('so-5').value

    var tBinh = (so1 + so2 + so3 + so4 + so5) / 5;

    document.getElementById('ket-qua-b2').innerHTML = tBinh.toFixed(3);
}
function tinhPS() {
    var a = +document.getElementById('chieu-dai').value
    var b = +document.getElementById('chieu-rong').value

    var P = (a + b) * 2;
    var S = a * b;

    document.getElementById('chu-vi').innerHTML = P.toFixed(3);
    document.getElementById('dien-tich').innerHTML = S.toFixed(3);
}
function quyDoi() {
    var USD = +document.getElementById('USD').value

    var Doi = USD * 23500;

    document.getElementById('ket-qua-b3').innerHTML = new Intl.NumberFormat('vn-VN').format(Doi) + 'VND';
}
function tongSo() {
    var so2chuso = +document.getElementById('so-2-chu-so').value;

    var sohangChuc = so2chuso / 10;//21/10 = 2
    var sohangDonVi = so2chuso % 10; //21%10=1

    var tong2so = Math.floor(sohangDonVi) + Math.floor(sohangChuc);

    document.getElementById('ket-qua-b5').innerHTML = tong2so;
}

