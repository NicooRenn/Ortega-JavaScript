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
        }
    }   
