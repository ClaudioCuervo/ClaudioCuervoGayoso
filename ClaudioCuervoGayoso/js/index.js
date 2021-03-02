//Dejo comentada la url para que no me de error y se pueda ver que el desplegable funciona
//La parte de mostrar las monedas con el cambio a la moneda no funciona, almenos lo he intentado

//let urlCambioMonedas = `https://api.coinbase.com/v2/exchange-rates?currency=${moneda}`;
const urlListaMonedas = `https://api.coinbase.com/v2/currencies`;

fetch(urlListaMonedas)
    .then(
        (respuesta) => {
            return respuesta.json();
        })
    .then((datosJSON) => {
        mostrarListadoHTML(datosJSON);
    })
    .catch((error) => {
        console.log(error);
    })

function mostrarListadoHTML(respListaMonedas) {
    let listaMonedas = respListaMonedas.data;
    let opciones = document.getElementById('id_selectMoneda');
    opciones.innerHTML='';
    listaMonedas.forEach(moneda => {
        fila = document.createElement('option'); 
        monedaName = document.createElement('option');
        monedaName.innerHTML = moneda.name;
        fila.appendChild(monedaName);
        opciones.appendChild(fila);
    });
}

fetch(urlCambioMonedas)
    .then(
        (respuesta) => {
            return respuesta.json();
        })
    .then((datosJSON) => {
        mostrarListadoHTML(datosJSON);
    })
    .catch((error) => {
        console.log(error);
    })

function getValueMoneda() {
    const moneda = document.getElementById("opciones").value;
}