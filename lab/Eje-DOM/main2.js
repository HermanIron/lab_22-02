function mostrarTicket() {
  let nombre = document.getElementById("nombreInput").value;
  let fecha = document.getElementById("fechaInput").value;
  let fila = document.getElementById("filaInput").value;
  let asiento = document.getElementById("asientoInput").value;
  
  let datosHTML = "Nombre: " + nombre + "<br>" +
                  "Fecha: " + fecha + "<br>" +
                  "Butaca: Fila " + fila + ", Asiento " + asiento;
                   
  document.getElementById("datos").innerHTML = datosHTML;
}