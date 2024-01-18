function btnhitung () {
        let sisi = parseInt(document.getElementById("squareSide").value);
        let luas = sisi * sisi;
        let Keliling = 4* sisi
        document.getElementById("Rumus").innerHTML="Rumus Luas = sisi x sisi";
        document.getElementById("nilai").innerHTML = "Luas = " + sisi +" cm x " + sisi +" cm"
        document.getElementById("hasil").innerHTML = "Luas = " + luas + " cm2";
        document.getElementById("RumusK").innerHTML="Rumus Keliling = 4 x sisi";
        document.getElementById("nilaiK").innerHTML = "Keliling = 4 x " + sisi +" cm ";
        document.getElementById("hasilK").innerHTML = "Luas = " + Keliling + " cm";
}
function btnreset() {
    document.getElementById("squareSide").value="";
    document.getElementById("Rumus").innerHTML='';
    document.getElementById("nilai").innerHTML='';
    document.getElementById("hasil").innerHTML='';
    document.getElementById("RumusK").innerHTML='';
    document.getElementById("nilaiK").innerHTML='';
    document.getElementById("hasilK").innerHTML='';
}
