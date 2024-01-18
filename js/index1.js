function btnhitung () {
        let panjang = parseInt(document.getElementById("squareSide1").value);
        let lebar = parseInt(document.getElementById("squareSide2").value);
        let luas = panjang * lebar;
        let Keliling = 2 * panjang + 2 * lebar;
        document.getElementById("Rumus").innerHTML="Rumus Luas Persegi Panjang = pajang x lebar";
        document.getElementById("nilai").innerHTML = "Luas = " + panjang +" cm x " + lebar +" cm"
        document.getElementById("hasil").innerHTML = "Luas = " + luas + " cm2";
        document.getElementById("RumusK").innerHTML="Rumus Keliling Persegi Panjang = 2 x panjang + 2 x lebar";
        document.getElementById("nilaiK").innerHTML = "Keliling = 2 x " + panjang +" cm + 2 x "+ lebar +" cm";
        document.getElementById("hasilK").innerHTML = "Luas = " + Keliling + " cm";
}
function btnreset() {
    document.getElementById("squareSide1").value="";
    document.getElementById("squareSide2").value="";
    document.getElementById("Rumus").innerHTML='';
    document.getElementById("nilai").innerHTML='';
    document.getElementById("hasil").innerHTML='';
    document.getElementById("RumusK").innerHTML='';
    document.getElementById("nilaiK").innerHTML='';
    document.getElementById("hasilK").innerHTML='';
}
