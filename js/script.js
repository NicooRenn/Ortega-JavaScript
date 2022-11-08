//declaracion de constantes
 const fechaNacimiento = 2009;
 let alertaEntrada = alert("Bienvenidos a Edicion Ilimitada! (por tu seguridad, en caso de comprar props debes ser mayor de 13 años)");
 let acceso = parseInt(prompt("Por favor ingrese su año de Nacimiento."));
 let aprobado = (fechaNacimiento>=acceso);
 let alertBox = true;


//declaracion de variables
    while (alertBox) {console.log(acceso)
    if (acceso<=fechaNacimiento) {
        alert ("Si tienes alguna consulta o sugerencia, no dudes en hablarnos en la seccion Contacto!");
        alertBox= false;
        }else { 
        alert ("Lo sentimos :(, por tu seguridad necesitas si o si ser mayor de 13 para poder realizar una compra de una prop, cualquier consulta contactanos a nuestro telefono o instagram"); 
        break;
        }
    }   
// array con objeto
const objetoCompra = [
    {
        id: 1,
        nombre: "Escudo Hyliano",
        Precio: "$20000",
        Tamaño: "51cm x 64cm",
        Peso: "2.3 kg",
        Descripcion: "Escudo del juego The Legend of Zelda: Skyward Sword"
    },
    {
        id: 2,
        nombre: "Figura Pokemon Fantasmas",
        Precio: "$25000",
        Tamaño: "25cm x 25cm x 27cm",
        Peso: "1 kg",
        Descripcion: "Figura/Estatua de Resina de Pokemon tipo Fantasmas con luces"
    },
    {
        id: 3,
        nombre: "Martillo de Thor",
        Precio: "$10000",
        Tamaño: "44cm x 21.9cm x 14cm",
        Peso: "0.7 kg",
        Descripcion: "Replica Martillo de Thor de las peliculas de Marvel Studios"
    },
 ];

//metodo de busqueda con find
let valorBuscado = "Figura Pokemon Fantasmas"
const busqueda = objetoCompra.find(objetoCompra => objetoCompra.nombre === valorBuscado)
console.log(busqueda)
