
/* 1st Exercise 
Declara 2 variables numéricas (con el valor que desees), indica cual es mayor de
los dos. Si son iguales indicalo también. Puedes ir cambiando los valores
para comprobar que funciona. 
*/

        // let num1 = 6;
        // let num2 = 8;

        // console.log(num1);
        // console.log(num2);

        // if (num1 > num2) {
        //     alert("El 6 es mayor");
        // } else {
        //     (num2 > num1);
        //     alert("El 8 es mayor");
        // }

/* 2nd Exercise 
Declara un String que contenga tu nombre, después muestra un mensaje de
bienvenida por consola. Por ejemplo: si introduzco “Fernando”, me aparezca
“Bienvenido Fernando”.*/

        // let nombre = "Alejandro"
        // console.log("Bienvenido",nombre)

/* 3rd Exercise 
Modifica la aplicación anterior, para que nos pida el nombre que queremos
introducir (recuerda usar prompt).
*/

        // let nameUser = prompt("May I have your name please?");
        // alert ("Good to see you "+ nameUser);

/* 4th Exercise 
Haz una aplicación que calcule el área de un círculo (pi*R2). El radio se pedirá
por teclado (recuerda pasar de String a double con parseDouble). Usa la
constante PI. */

        // let radius = prompt("¿Which is the radius of the circle?");
        // let radiuscalc = Math.PI * Math.pow(radius,2);
        // alert("The area of the circle is "+ radiuscalc);

/* 5th Exercise
Lee un número por teclado e indica si es divisible entre 2 (resto = 0). Si no lo es,
también debemos indicarlo. */

        // let num1 = parseInt(prompt("Insert a number"));
        // if (num1 % 2 === 0) {
        //     alert("The number "+num1 +" is divisible between 2");
        // } else {
        //     alert("The number "+num1 +" is NOT divisible between 2");
        // }

/* 6th Exercise 
Lee un número por teclado que pida el precio de un producto (puede tener
decimales) y calcule el precio final con IVA. El IVA sera una constante que sera
del 21% */

        // let productprice = parseInt(prompt("Please, insert product price"));
        // const iva = .21
        // let productpriceplustax = productprice + (productprice * iva);
        // alert("The price including VAT is " + productpriceplustax +"€");

/* 7th Exercise 
Muestra los números del 1 al 100 (ambos incluidos). Usa un bucle while. */

        // let i=0
        // while (i <= 100) {
        //     recount = "The number is "+ i;
        //     i++;
        //     console.log(recount)
        // }


/* 8th Exercise 
Haz el mismo ejercicio anterior con un bucle for.*/

        // for (i=0; i <= 100; i++) {
        //     console.log(i);
        // }

/* 9th Exercise
Muestra los números del 1 al 100 (ambos incluidos) divisibles entre 2 y 3. Utiliza
el bucle que desees.*/

        // for (i=0; i <= 100; i++) {
        //     if([i] % 2 === 0) {
        //         console.log([i] + " es divisible entre 2")
        //     }
        //     if([i] % 3 === 0) {
        //         console.log([i] + " es divisible entre 3")
        //     }
        // }

/* 10th Exercise 
Realiza una aplicación que nos pida un número de ventas a introducir, después
nos pedirá tantas ventas por teclado como número de ventas se hayan indicado.
Al final mostrara la suma de todas las ventas. Piensa que es lo que se repite y lo
que no.*/

function sumInput() {
    let numbers = [];
      let numVentas = parseInt(prompt("Dime cuantas ventas se han realizado"))
      for (let i = 0; i <= numVentas -1; i++) {
      let PrecioVentas = prompt("Cual ha sido el precio de venta?");
      numbers.push(+PrecioVentas);
    }
  
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  }
  
  alert( sumInput() );
