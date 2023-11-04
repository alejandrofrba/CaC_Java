
/* 
BORRAR
 */

document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("mi-formulario");
    const botonBorrar = document.getElementById("boton-borrar");
  
    botonBorrar.addEventListener("click", function (event) {
      event.preventDefault();
  
      formulario.reset(); 
    });
  });

/* 
  VALIDACIONES
 */

  document.addEventListener("DOMContentLoaded", function () {
    const calcularDescuentoButton = document.getElementById("calcular-descuento");
    const categoriaSelect = document.getElementById("categoria");
    const cantidadInput = document.getElementById("cantidad");
    const nombreInput = document.getElementById("nombre");
    const apellidoInput = document.getElementById("apellido");
    const emailInput = document.getElementById("email");
    const precioTotalSpan = document.getElementById("precio-total");
  
    
    calcularDescuentoButton.addEventListener("click", function (event) {
        event.preventDefault(); // Evita la recarga de la página por defecto
  
        const categoria = categoriaSelect.value;
        const cantidad = parseInt(cantidadInput.value, 10);
        const nombre = nombreInput.value;
        const apellido = apellidoInput.value;
        const email = emailInput.value;
        const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (
            categoria === "" 
            ||  isNaN(cantidad)
            || cantidad <= 0
            || nombre === ""
            || apellido === ""
            || email === "" 
/*
            || emailRegex.match(email) >= 0
*/
            ) {
            alert("Por favor, complete todos los campos correctamente.");
            return;
        }
  
        let descuento = 0;
  
        switch (categoria) {
            case "estudiante":
                descuento = 0.8; // 80% de descuento para Estudiante
                break;
            case "trainee":
                descuento = 0.5; // 50% de descuento para Trainee
                break;
            case "junior":
                descuento = 0.15; // 15% de descuento para Junior
                break;
            default:
                descuento = 0; // Sin descuento por defecto
        }
  
        const precioUnitario = 200; // Precio base por ticket
        const precioTotal = cantidad * (precioUnitario - (descuento * precioUnitario));
  
        precioTotalSpan.textContent = `${precioTotal.toFixed(2)}`;
    });
  });
  