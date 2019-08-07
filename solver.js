<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Solver3</title>
</head>

<body>
    <h1 align="center">Formulario de la Serie Fibonacci</h1>
    <h2 align="center"> SOLVER 2</h2>
    <h2>Primer: </h2><input type="text" name="primer" id="primer">
    <br>
    <h2>Segundo: </h2><input type="text" name="segundo" id="segundo">
    <br>
    <h2>Maximo: </h2><input type="text" name="maximo" id="maximo">
    <input type="button" id="tablaCalcular" value="CALCULAR">
    <br>

    <br><input type="button" id="btPar" value="Tabla Pares">
    <input type="button" id="btImpar" value="Tabla Impares">
    <br><br><input type="text" placeholder="Colocar numero" id="multiplo">
    <input type="button" id="btMultiplo" value="Buscar multiplo">
    <input type="text" placeholder="Colocar numero" id="buscarNumero">
    <input type="button" id="btNumero" value="Buscar numero">
    <br>
    <div id="tabla">
        <hr>
        <table border="1" id="tablita">

        </table>
    </div>
    <div id="pares">
        <hr>
        <table border="1" id="tbPares">

        </table>
    </div>
    <div id="impares">
        <hr>
        <table border="1" id="tbImpares">

        </table>
    </div>
    <div id="multiplos">
        <hr>
        <table border="1" id="tbMultiplos">

        </table>
    </div>
    <div id="numero">
        <hr>
        <table border="1" id="tbNumero">

        </table>
    </div>

</body>
<script>
    //Autor: Steven Rocha
    // Descripción: Solver3
    // ocultamos tablas
    var divTabla = document.getElementById("tabla");
    divTabla.style.display = "none";
    var divPares = document.getElementById("pares");
    divPares.style.display = "none";
    var divImpares = document.getElementById("impares");
    divImpares.style.display = "none";
    var divMultiplos = document.getElementById("multiplos");
    divMultiplos.style.display = "none";
    var divNumero = document.getElementById("numero")
    divNumero.style.display = "none";
    //Clase Solver
    function Solver(primer, segundo, maximo) {
        this.primer = primer;
        this.segundo = segundo;
        this.maximo = maximo;
        this.serie = [];
        this.par = [];
        this.impar = [];
        this.multiplo = [];
        this.numero = [];
        this.serie.push(this.primer);
        this.serie.push(this.segundo);
        this.par.push(this.segundo);
        this.impar.push(this.primer);
        // función Par
        var esPar = function (numero) {
            if (numero % 2 === 0) {
                return true;
            } else {
                return false;
            }
        }
        //función generar serie fibonacci
        this.generar = function generar() {
            var primero = this.primer;
            var segundo = this.segundo;
            var maximo = this.maximo;
            var serie = this.serie;
            var pares = this.par;
            var impares = this.impar;
            // crear serie fibonacci
            var serieFibo = function (prim, segun) {
                if (prim + segun > maximo) {
                    return serie;
                } else {
                    var nuevo = prim + segun;
                    if (esPar(nuevo)) {
                        pares.push(nuevo);
                    } else {
                        impares.push(nuevo);
                    }
                    serie.push(nuevo);
                    return serieFibo(segun, nuevo);
                }
            }
            serieFibo(primero, segundo);
        };
        // crear multiplos
        var numMul = Number(document.getElementById("multiplo").value);
        var esMuliplo = function (numero) {
            if (numero % numMul == 0) {
                return numero;
            }
        }
        //mostrar tabla
        this.mostrar = function mostrar() {
            var tabla = document.getElementById("tablita");
            var indice = 0;
            var serie = this.serie;
            var verTabla = function (indice) {
                if (indice === serie.length) {
                } else {
                    var fila = document.createElement("tr" + "td");
                    var columna = document.createElement("td");
                    columna.appendChild(document.createTextNode(serie[indice]));
                    fila.appendChild(columna);
                    tabla.appendChild(fila);
                    return verTabla(indice + 1);
                }
            }
            verTabla(indice)
        };
        //crear pares
        this.crearPares = function crearPares() {
            var tabla = document.getElementById("tbPares");
            var indice = 0;
            var seriePar = this.par;
            var verTabla = function (indice) {
                if (indice === seriePar.length) {
                } else {
                    var fila = document.createElement("tr" + "td");
                    var columna = document.createElement("td");
                    columna.appendChild(document.createTextNode(seriePar[indice]));
                    fila.appendChild(columna);
                    tabla.appendChild(fila);
                    return verTabla(indice + 1);
                }
            }
            verTabla(indice)
        };
        // crear impares
        this.crearImpares = function crearImpares() {
            var tabla = document.getElementById("tbImpares");
            var indice = 0;
            var serieImpar = this.impar;
            var verTabla = function (indice) {
                if (indice === serieImpar.length) {
                } else {
                    var fila = document.createElement("tr" + "td");
                    var columna = document.createElement("td");
                    columna.appendChild(document.createTextNode(serieImpar[indice]));
                    fila.appendChild(columna);
                    tabla.appendChild(fila);
                    return verTabla(indice + 1);
                }
            }
            verTabla(indice)
        };
        // crear multiplos
        this.crearMultiplos = function crearMultiplos() {
            var tabla = document.getElementById("tbMultiplos");
            var indice = 0;
            var serieMultiplo = this.serie.filter(esMuliplo);
            var verTabla = function (indice) {
                if (indice === serieMultiplo.length) {
                } else {
                    var fila = document.createElement("tr" + "td");
                    var columna = document.createElement("td");
                    columna.appendChild(document.createTextNode(serieMultiplo[indice]));
                    fila.appendChild(columna);
                    tabla.appendChild(fila);
                    return verTabla(indice + 1);
                }
            }
            verTabla(indice)
        };
        var numero = document.getElementById("buscarNumero").value;
        this.crearNumero = function crearNumero() {
            var tabla = document.getElementById("tbNumero");
            var indice = 0;
            var serie=this.serie
            var buscar = serie.filter(
                data =>
                    data.serie === numero
            );
            alert("el numero encontrador es: "+ buscar);
            console.log("el numero encontrador es: "+ buscar);
            /*var verTabla = function (indice) {
                if (indice === buscar.length) {
                }else{
                    var fila=document.createElement("tr"+"td");
                    var columna=document.createElement("td");
                    columna.appendChild(document.createTextNode(buscar[indice]));
                    fila.appendChild(columna);
                    tabla.appendChild(fila);
                    return verTabla(indice+1);
                }
            }
            verTabla(indice)*/
        };
    }
    // crear boton calcular
    document.getElementById("tablaCalcular").addEventListener("click", function () {
        var nuevoSolver = new Solver(parseInt(document.getElementById("primer").value),
            parseInt(document.getElementById("segundo").value),
            parseInt(document.getElementById("maximo").value));
        nuevoSolver.generar();
        nuevoSolver.mostrar()
        divTabla.style.display = "block";
        divPares.style.display = "none";
        divImpares.style.display = "none";
        divMultiplos.style.display = "none";
        divNumero.style.display = "none";
    })
    // crear boton pares
    document.getElementById("btPar").addEventListener("click", function () {
        var nuevoSolver = new Solver(parseInt(document.getElementById("primer").value),
            parseInt(document.getElementById("segundo").value),
            parseInt(document.getElementById("maximo").value));
        nuevoSolver.generar();
        nuevoSolver.crearPares();
        divTabla.style.display = "none";
        divPares.style.display = "block";
        divImpares.style.display = "none";
        divMultiplos.style.display = "none";
        divNumero.style.display = "none";
    })
    // crear boton impares
    document.getElementById("btImpar").addEventListener("click", function () {
        var nuevoSolver = new Solver(parseInt(document.getElementById("primer").value),
            parseInt(document.getElementById("segundo").value),
            parseInt(document.getElementById("maximo").value));
        nuevoSolver.generar();
        nuevoSolver.crearImpares();
        divTabla.style.display = "none";
        divPares.style.display = "none";
        divImpares.style.display = "block";
        divMultiplos.style.display = "none";
        divNumero.style.display = "none";
    })
    //crear boton multiplos
    document.getElementById("btMultiplo").addEventListener("click", function () {
        var nuevoSolver = new Solver(parseInt(document.getElementById("primer").value),
            parseInt(document.getElementById("segundo").value),
            parseInt(document.getElementById("maximo").value));
        nuevoSolver.generar();
        nuevoSolver.crearMultiplos();
        divTabla.style.display = "none";
        divPares.style.display = "none";
        divImpares.style.display = "none";
        divMultiplos.style.display = "block";
        divNumero.style.display = "none";
    })
    // crear boton buscar numero
   document.getElementById("btNumero").addEventListener("click", function(){
       var nuevoSolver=new Solver(parseInt(document.getElementById("primer").value),
       parseInt(document.getElementById("segundo").value),
       parseInt(document.getElementById("maximo").value));
       nuevoSolver.generar();
       nuevoSolver.crearNumero();
       divTabla.style.display = "none";
        divPares.style.display = "none";
        divImpares.style.display = "none";
        divMultiplos.style.display = "none";
        divNumero.style.display = "block";
   })
</script>

</html>
