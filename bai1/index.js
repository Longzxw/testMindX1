const soNguyenTo = [];
function tinhTongSoNguyenTo() {
  let a = parseInt(document.getElementById("a").value);
  let b = parseInt(document.getElementById("b").value);
  let tong = 0;

  for (var i = a; i <= b; i++) {
    if (laSoNguyenTo(i)) {
      tong += i;
    }
  }
  document.getElementById("dayso").innerHTML =
    "Các số nguyên tố trong khoảng từ " +
    a +
    " đến " +
    b +
    " là: " +
    soNguyenTo;
  document.getElementById("ketqua").innerHTML =
    "Tổng các số nguyên tố trong khoảng từ " + a + " đến " + b + " là:" + tong;
}

function laSoNguyenTo(n) {
  if (n < 2) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}
