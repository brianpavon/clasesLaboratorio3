const ol = document.querySelector(".ol");
const btTraer = document.getElementById("btnTraer");
const spinner = document.getElementById("spinner");

//PROGRAMAR EL MANEJADOR DEL EVENTO CLICK
btnTraer.addEventListener("click",(e)=>{
        traerPersonas();
        /*setTimeout(()=>{
            altaPersona();
        },4000);*/
        //altaPersona();
        //modificarPersona();
        setTimeout(()=>{
            bajaPersona(16);    
        },4000);
        
});


function crearSpineer()
{
    const img = document.createElement('img');
    img.setAttribute("src", "./images/spinner.gif");
    img.setAttribute("alt","Imagen Spineer");

    return img;
}

//hacer una funcion expresada
const crearItems = (data) =>{
    const fragmento = document.createDocumentFragment();
    data.forEach(element => {
        const item = document.createElement('li');
        item.textContent = `${element.nombre} ${element.email}`;
        fragmento.appendChild(item);
    });
    return fragmento;
}

function traerPersonas()
{
    ol.innerHTML = ""; //esto no va asi, tiene que ser con un for que recorra y pregunta mientras tenga hijos que borre
    spinner.appendChild(crearSpineer());

    fetch('http://localhost:3000/personas')
    .then(res=>{
        //devuelve un objeto respuesta, tiene un atributo ok, si esta bien venia true sino false
        if(!res.ok) return Promise.reject(res);//utilizar el objeto promesa, el metodo reject estatico
        //si lo de arriba no pasa, ejecuta lo siguiente
        return res.json();//metodo asincronico, que devuelve una promesa
    })//sin ; puedo colocar otro then asi voy pasando las promesas que devuelve anteriormente
    .then(data=>{
        ol.appendChild(crearItems(data));
        console.log("Personas obtenidas con exito");
    })
    .catch(err=>{
        //en json server nos devuelve un mensaje vacio entonces lo manipulabamos como la clase pasada
        console.error(err.status);
    })
    .finally(()=>{
        //finally recibe un callback independiente si cayo en catch o pudo hacerlo
        spinner.innerHTML = "";
    });
    //corto aca abajo el fetch
}

function altaPersona()
{
    let nuevaPersona = {
        "nombre": "juan",
        "apellido": "gomez",
        "email": "jgomez@utn.com"
    };
    ol.innerHTML = "";
    spinner.appendChild(crearSpineer());
    //declaro un objeto config, para pasarle la peticion, en este caso POST, porque vamos a dar un alta
    const config = {
        method: "POST",
        headers: {
            "Content-type": "application/json;charset = utf-8"
        },
        //en el post los datos van en el cuerpo, con el metodo send
        body: JSON.stringify(nuevaPersona)//esto lo parseamos para pasarlo...
    }
    fetch('http://localhost:3000/personas',config)//paso en el segundo miembro, los claves y valor
    .then(res=>{
        if(!res.ok) return Promise.reject(res);
        return res.json();
    })
    .then(personaAgregada=>{
        console.log("alta exitosa",personaAgregada);//separado por coma puedo mostrar 2 cosas en la consola
        //aca podria hacer un push al array, para agregar a la tabla...
        //aca llamaria a traerPersonas para refrescar la lista
        traerPersonas();
    })
    .catch(err=>{
        console.error(err.status);
    })
    .finally(()=>{
        spinner.innerHTML = "";
    });
}

function modificarPersona()
{
    //voy a tener que mandar en la ruta la persona que tengo que modificar,la que levantamos del array o formulario
    let p = {
        "id": 22,//aca suponemos que modficamos el id 22
        "nombre": "Jose",
        "apellido": "Perez",
        "email": "jperez@utn.com"
    };
    //deberia armar una persona a modificar sin el id, para pasar lo que modifico, lo que queda igual o lo que cambia
    /*const pModificar = {

    };*/
    let id = p.id;
    delete p.id;
    ol.innerHTML = "";
    spinner.appendChild(crearSpineer());

    const config = {
        method : "PUT",
        headers : {
            "Content-type" : "application/json;charset=utf-8"
        },
        body: JSON.stringify(p)
    }
    fetch('http://localhost:3000/personas/'+ id,config)//aca le pasamos el id concatenada
    .then(res=>{
        if(!res.ok) return Promise.reject(res);
        return res.json();
    })
    .then(personaModificada=>{
        console.log("Modificacion exitosa",personaModificada);        
        traerPersonas();
    })
    .catch(err=>{
        console.error(err.status);
    })
    .finally(()=>{
        spinner.innerHTML = "";
    });
}

function bajaPersona(id)
{
    ol.innerHTML = "";
    spinner.appendChild(crearSpineer());

    const config = {
        method : "DELETE",
        headers : {
            "Content-type" : "application/json;charset=utf-8"
        },
        //body: JSON.stringify(p)
    }
    fetch('http://localhost:3000/personas/'+ id,config)//aca le pasamos el id concatenada
    .then(res=>{
        if(!res.ok) return Promise.reject(res);
        return res.json();
    })
    .then(persona=>{
        console.log("Baja exitosa",persona);        
        traerPersonas();
    })
    .catch(err=>{
        console.error(err.status);
    })
    .finally(()=>{
        spinner.innerHTML = "";
    });
}