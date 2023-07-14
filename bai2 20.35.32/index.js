type = "text/javascript";
var N = prompt("Nhap gia tri N");
N = parseInt(N);
for (i = 0; i < N; i++) {
  for (j = 0; j <= i; j++) {
    document.writeln(" * ");
  }
  document.writeln("<br/>");
}
