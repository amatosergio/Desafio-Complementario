// Aqui aplique una clase, y un constructor, para crear los productos y sus especificaciones
class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        
    }

}

let iphone11 = new Producto("Iphone 11", 500, 10)
iphone11.id = (id=1)
let iphone12 = new Producto("Iphone 12", 700, 5)
iphone12.id =(id=2)
let iphone13 = new Producto("Iphone 13", 900, 5)
iphone13.id =(id=3)

let macbookAirM1 = new Producto("Macbook Air M1", 900, 10)
macbookAirM1.id =(id=4)
let macbookAirM2 = new Producto("Macbook Air M2", 1200, 10)
macbookAirM2.id=(id=5)
let macbookPro = new Producto("Macbook Pro M1pro", 1900, 5)
macbookPro.id=(id=6)   



let totalCompra = 0
let producto = parseInt(prompt('Ingresa el numero del producto que quieres comprar: 1.Iphone 11 - 2.Iphone 12- 3.Iphone 13 4.Macbook Air M2- 5.Macbook Pro - '
)
)
let seguirCompra = true
let decision
let carrito = []

while (seguirCompra === true) {
     if (producto === 1) {
        carrito.push(iphone11.precio)
    } else if (producto === 2) {
        carrito.push(iphone12.precio)
    } else if (producto === 3) {
        carrito.push(iphone13.precio)
    } else if (producto === 4) {
        carrito.push(macbookAirM2.precio)
    } else if (producto === 5) {
        carrito.push(macbookPro.precio)
    }
    // Tutor Luis, aca quise aplicar un metodo , pero no pude hacer que funcione
   /*  const productoElegido= Producto.find (prod=> prod.id === producto)
    if(producto){
        totalCompra= totalCompra + productoElegido.precio
    } */
    
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

alert('El valor total , sin tax es : ' + carrito[1] + " dolares" )


function calculartax(valor) {
    const impuestos = valor * (8 / 100)
    return valor + impuestos
}

let valorFinalConTax = calculartax(carrito[1])
alert('El valor final a pagar , con tax incluidos es de : ' + valorFinalConTax)

console.log(carrito)