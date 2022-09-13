class producto {
    constructor(id, nombre, medida, precio){
        
        this.id = id,
        this.nombre = nombre,
        this.medida = medida,
        this.precio = precio

    }
    
    mostrarData(){
        console.log(`id${this.id} , ${this.nombre}, ${this.medida},  $${this.precio}`)
    }
}


const id1 = new producto(1, "sofa cubo 2","1.85mts", 90900);
const id2 = new producto(2, "sofa bradiston","2.20mts", 339900);
const id3 = new producto(3, "sofa cubo","1.35mts", 68900);
const id4 = new producto(4, "sofa berlin","2.20mts", 131900);
const id5 = new producto(5, "sofa chester","1.60mts", 177900);
const id6 = new producto(6, "sofa nipur + chaise longue","2.40mts", 449900);

let productos = []
productos.push(id1, id2, id3, id4, id5, id6)
console.log(productos[1]);
//función para eliminar los productos de la tienda
function eliminarProducto() {
    productoAEliminar= prompt(`Ingrese el id del producto que desea eliminar ej: id5`)
           confirmador = productoAEliminar.toLowerCase();
           console.log(confirmador);
    const existe = productos.indexOf(confirmador);
    console.log(existe)
    if (existe > -1) {
        productos.splice(existe, 1);
        alert("producto Eliminado");
    }
        alert("no existe el producto que desea Eliminar");
}


//función para mostrar el catalogo productos de la tienda
function mostrarCatalogo(array){
    alert("En la consola puede ver nuestro catálogo")
    console.log("Disfrute de nuestro catálogo:")
    array.forEach((producto)=>{
        producto.mostrarData()
    })
}
//función para buscar los productos a traves del nombre
function buscarPorNombre(){
    let buscarNombre = prompt("Ingrese el nombre del producto que desea buscar")
    let nombreEncontrado = productos.find((producto)=> producto.nombre.toLowerCase() == buscarNombre.toLowerCase())
    if(nombreEncontrado == undefined){
        alert("Su producto no fue encontrado")
    }else{
        console.log(`Su producto fue encontrado es:`)
        console.log(nombreEncontrado)
    }
}

//función para agregar productos al catalogo
function agregarProducto(array){
    let nombreIngresado = prompt("Ingrese el nombre del producto")
    let medidaIngresada = parseInt(prompt("Ingrese la medida"))
    let precioIngresado = parseInt(prompt("Ingrese el precio")) 
    let productoCreado = new producto (productos.length+1, nombreIngresado, medidaIngresada, precioIngresado)
    array.push(productoCreado)
}
/*función para ejecutar el menu, el usuario ingresa un numero, este entra como parametro
dentro de la función menu y ejecuta el switch que se encuentra dentro*/
function preguntarOpcion(){
    let opcion = parseInt(prompt(`Ingrese el número de la opción que desea realizar:
                        1 - Ver catálogo de productos
                        2 - Agregar un producto 
                        3 - Eliminar un producto
                        4 - Encontrar por nombre:
                        0 - Para salir
                        `))
    menu(opcion)
}


function menu(opcionSeleccionada){
    switch(opcionSeleccionada){
        case 0:
            salir = true
            alert(`Gracias por visitarnos, vuelva pronto :D`)
        break    
        case 1:
            mostrarCatalogo(productos)
      	break 
   	    case 2: 
           agregarProducto(productos)
      	break 
   	    case 3: 
           eliminarProducto();
      	break
        case 4: 
            buscarPorNombre()
      	break
   	    default: 
      	alert(`Ingrese una opción correcta`)
    }
}


let salir 
while(salir != true){
    preguntarOpcion()
    
}


