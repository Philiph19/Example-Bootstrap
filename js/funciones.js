//Declarar una funcion con return
function calcularpromedio(num1, num2, num3){
    let promedio = (num1 + num2 + num3) / 3;
    //return 'El promedio es: ' + promedio + ' dolares';
    return `El promedio es: ${promedio} dolares`;
}
//Ejecutar una funcion
console.log(calcularpromedio(7, 35, 19));

//Asignar una funcion a una variable
const calcula = calcularpromedio;
console.log(calcula(45, 35, 2));

/*Expresion de una funcion*/
//variable con const
const calcularArea = function(ancho, alto){
    const area = ancho * alto;
    return area;
}

console.log(calcularArea(25, 10));
                        //parametros
//Funciones de tipo flecha
const calcularArea2 = (ancho1, alto1) => {
    const area1 = ancho1 * alto1;
    return area1;
}

console.log(calcularArea2(25, 15));

//Funciones tipo flecha con un solo parametro y una sola expresion
const multiplicarNum = x => x ** 3;
console.log(multiplicarNum(10));

//Funciones como parametros____________________
const avisaUsuario = (fun, x) =>{
    alert(fun(x));
}

const saludaUsuario = (nombre = 'Amigo') =>{
    return `Hola ${nombre}`;
}

avisaUsuario(saludaUsuario, 'Philip');

//Concepto de Hoisting
