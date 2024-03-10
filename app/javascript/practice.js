let kuji = new Array(4);
kuji[0] = "<h1 style='color:green'>大吉</h1>"
kuji[1] =  "<h2>中吉</h2>"
kuji[2] =  "<h3>小吉</h3>"
kuji[3] = "<h4 style='color:red'>凶</h4>"


function unsei() {
  let myArea = document.getElementById("myArea")
  let num = Math.floor(kuji.length * Math.random());
  myArea.innerHTML = kuji[num];
}