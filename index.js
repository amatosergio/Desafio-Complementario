// Aqui aplique una clase, y un constructor, para crear los productos y sus especificaciones
class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

}
//Iphones
let iphone11 = new Producto("Iphone 11", 500, 10)
let iphone12 = new Producto("Iphone 12", 700, 5)
let iphone13 = new Producto("Iphone 13", 900, 5)
//Macbooks
let macbookAirM1 = new Producto("Macbook Air M1", 900, 10)
let macbookAirM2 = new Producto("Macbook Air M2", 1200, 10)
let macbookPro = new Producto("Macbook Pro M1pro", 1900, 5)

//console.log (iphone11,macbookPro, macbookAirM2)

// Variables y ciclo condicional While para el carro de compras
let totalCompra = 0
let producto = parseInt(prompt('Ingresa el numero del producto que quieres comprar: 1.Iphone 11 - 2.Iphone 12- 3.Iphone 13 4.Macbook Air M2- 5.Macbook Pro - '
)
)
let seguirCompra = true
let decision

while (seguirCompra === true) {
    if (producto === 1) {
        totalCompra = totalCompra + iphone11.precio
    } else if (producto === 2) {
        totalCompra = totalCompra + iphone12.precio
    } else if (producto === 3) {
        totalCompra = totalCompra + iphone13.precio
    } else if (producto === 4) {
        totalCompra = totalCompra + macbookAirM2.precio
    } else if (producto === 5) {
        totalCompra = totalCompra + macbookPro.precio
    }
    else {
        producto = parseInt(prompt('Ingresa el numero del producto que quieres comprar: 1.Iphone 11 - 2.Iphone 12- 3.Iphone 13 4.Macbook Air M2- 5.Macbook Pro - '))
        continue
    }

    decision = parseInt(prompt('Quieres seguir agregando productos? 1.Si - 2.No'))
    if (decision === 1) {
        producto = parseInt(
            prompt(
                'Ingresa el numero del producto que quieres comprar: 1.Iphone 11 - 2.Iphone 12- 3.Iphone 13 4.Macbook Air M2- 5.Macbook Pro - '
            )
        )
    } else if (decision === 2) {
        seguirCompra = false
    }
}
alert('El valor total , sin tax es : ' + totalCompra)

//Funcion para calcular impuestos
function calculartax(valor) {
    const impuestos = valor * (8 / 100)
    return valor + impuestos
}

let valorFinalConTax = calculartax(totalCompra)
alert('El valor final a pagar , con tax incluidos es de : ' + valorFinalConTax)