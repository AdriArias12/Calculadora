      let resultado; // Variable global

      function aplicarOperacion() {
        let continuar = true;

        while (continuar) {
          let input1 = prompt("Ingrese el número 1:");
          let input2 = prompt("Ingrese el número 2:");
          let operacion = prompt("Ingrese la operación (suma, resta, multiplicacion, division):");
          operacion = operacion.toLowerCase();
          if (operacion === "salir"){
            break;
          }
          // Validar si se canceló alguno de los prompts
          if (input1 === null || input2 === null || operacion === null) {
            alert("Operación cancelada.");
            break;
          }

          let num1 = parseFloat(input1);
          let num2 = parseFloat(input2);

          realizarOperacion(num1, num2, operacion);
          alert("El resultado es: " + resultado);

          continuar = confirm("¿Deseas aplicar otra operación?");
        }

        alert("Gracias por usar la calculadora.");
      }

      function realizarOperacion(num1, num2, operacion) {
        if (Number.isNaN(num1) || Number.isNaN(num2)) {
          resultado = "Debes ingresar números válidos.";
        } else {
          

          if (operacion === "suma") {
            resultado = num1 + num2;
          } else if (operacion === "resta") {
            resultado = num1 - num2;
          } else if (operacion === "multiplicacion") {
            resultado = num1 * num2;
          } else if (operacion === "division") {
            if (num2 === 0) {
              resultado = "No se puede dividir por cero.";
            } else {
              resultado = num1 / num2;
            }
          } else {
            resultado = "Operación no válida.";
          }
        }

        document.getElementById("resultado").textContent = "Resultado final: " + resultado;
      }

      aplicarOperacion();