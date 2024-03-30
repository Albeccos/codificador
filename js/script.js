const ingresoTexto = document.getElementById("ingresoTexto");
const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const botonCopiar = document.getElementById("botonCopiar");
const resultado = document.getElementById("resultado");
const right = document.getElementById("right");



let reemplazar = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
]

const replace = (nuevoValor) => {
    resultado.innerHTML = nuevoValor;

    textoAyuda.style.display = "none";
    mensajeFinal.style.display = "none";
    muneco.classList.add("oculto");
    botonCopiar.style.display = "block";
    right.classList.add("ajustar");
    resultado.classList.add("ajustar");
    resultado.style.display = "block";
    ingresoTexto.value = "";
}

botonEncriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase();
    function encriptar (newText) {
        for(let i = 0; i < reemplazar.length; i++ ) {
            if (newText.includes(reemplazar[i][0])) {
                newText = newText.replaceAll(reemplazar[i][0],reemplazar[i][1]);
            }
        }
        return  newText;
    }

    replace(encriptar(texto));
});

botonDesencriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase();
    function desencriptar (newText) {
        for(let i = 0; i < reemplazar.length; i++ ) {
            if (newText.includes(reemplazar[i][1])) {
                newText = newText.replaceAll(reemplazar[i][1],reemplazar[i][0]);
            }
        }
        return  newText;
    }
    replace(desencriptar(texto));
});

botonCopiar.addEventListener("click", () => {
    let texto = resultado;
    texto.select();
    document.execCommand('copy');
    alert ('El texto ha sido copiado con éxito');

    resultado.innerHTML = "";
    textoAyuda.style.display = "block";
    mensajeFinal.style.display = "block";
    muneco.classList.remove("oculto");
    botonCopiar.style.display = "none";
    right.classList.remove("ajustar");
    resultado.classList.remove("ajustar");
    resultado.style.display = "none";
    ingresoTexto.focus();
})

