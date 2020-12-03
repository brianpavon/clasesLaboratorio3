const ol = document.querySelector(".ol");//cuando es una clase le ponemos . como css
const btTraer = document.getElementById("btnTraer");//cuando hay id el query selector no es tan perfomante
const spinner = document.getElementById("spinner");//referencia al spinner y despues lo pongo en la pagina a traves de una funcion

//PROGRAMAR EL MANEJADOR DEL EVENTO CLICK
btnTraer.addEventListener("click",(e)=>{
//creamos una instancia de html http request, para AJAX
    const xhr = new XMLHttpRequest();
    //2 maneras de ponerle el manejador readystate
    //xhr.onreadystatechange
    spinner.appendChild(crearSpineer());
    xhr.addEventListener('readystatechange',()=>{
        //que hacer cuando se termine la llamada, cuando recibamos la respuesta del servidor de esa peticion
        if(xhr.readyState == 4)
        {
            if(xhr.status >= 200 && xhr.status < 300)
            {
                //lo que nos devuelve puede venir como texto y con el metodo response o responsetext
                let datos = JSON.parse(xhr.responseText);
                //console.log(datos);

                ol.appendChild(crearItems(datos));
            }
            else
            {
                //log, no es lo unico que puedo poner... puedo poner console.error, console.warning etc
                console.log("Error: "+xhr.status + "-" + xhr.statusText);
            }
            //tanto si pudo cargar o sino saco el spinner
            spinner.innerHTML = ""; //lo correcto seria ir removiendo los hijos, mientras los tenga
        }
    });

    //objeto xhr hay que abrirlo, method es el metodo y la url... el metodo es get post o el que sea
    //sino aclaramos por default es GET, la URL es adonde vamos a pedir ese recurso
    //xhr.open(method,url);
    //estamos usando una api rest falsa de jsonplaceholder, y probando con el link de usuarios
    xhr.open('GET',"https://jsonplaceholder.typicode.com/users");//lo que escribamos en el open es lo del header
    //una vez que abrimos, usamos el metodo send, para enviar la peticion
    xhr.send();//cuando mandamos algo en el cuerpo de la peticion

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
    //la idea es crear un conjunto de items, lo quiero inyectar como appendchild de la lista ordenada que tengo en el index
    const fragmento = document.createDocumentFragment();//fragmento de un documento, html, lo puedo inyectar
    //el fragment es mas performante, para no andar constantemente cargando y renderizando la pagina
    //la data va a venir como array uso foreach
    data.forEach(element => {
        const item = document.createElement('li');
        item.textContent = `${element.name} ${element.email}`;//hice una interpolacion
        fragmento.appendChild(item);
    });
    return fragmento;
}