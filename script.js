function currentTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    let time = hh + ":" + mm + ":" + ss;

    let reloj = document.getElementById('reloj');
    reloj.innerHTML = time;
}
setInterval(currentTime, 1000);

function mostrarFecha() {
    let fechaElemento = document.getElementById('fecha');
    let fechaActual = new Date();
    let opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    fechaElemento.textContent = fechaActual.toLocaleDateString('es-ES', opciones);
}

mostrarFecha();
