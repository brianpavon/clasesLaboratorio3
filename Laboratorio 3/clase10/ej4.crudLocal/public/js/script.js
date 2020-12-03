const ol = document.querySelector(".ol");//cuando es una clase le ponemos . como css
const btTraer = document.getElementById("btnTraer");//cuando hay id el query selector no es tan perfomante
const spinner = document.getElementById("spinner");//referencia al spinner y despues lo pongo en la pagina a traves de una funcion

//PROGRAMAR EL MANEJADOR DEL EVENTO CLICK
btnTraer.addEventListener("click",(e)=>{
        altaPersona();
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
        item.textContent = `${element.nombre} ${element.email}`;//hice una interpolacion
        fragmento.appendChild(item);
    });
    return fragmento;
}

function altaPersona()
{
    let nuevaPersona =
    {
        "nombre": "Juan",
        "apellido": "Perez",
        "email": "jperez@utn.com"
    }
    const xhr = new XMLHttpRequest();
    ol.innerHTML = "";
    spinner.appendChild(crearSpineer());
    xhr.addEventListener('readystatechange',()=>{
        if(xhr.readyState == 4)
        {
            if(xhr.status >= 200 && xhr.status < 300)
            {
                let datos = JSON.parse(xhr.responseText);
                //ol.appendChild(crearItems(datos));
            }
            else
            {
                console.log("Error: "+xhr.status + "-" + xhr.statusText);
            }
            spinner.innerHTML = ""; 
        }
    });
    xhr.open('POST',"http://localhost:3000/personas");
    xhr.setRequestHeader("Content-type","application/json;charset=utf-8");
    xhr.send(JSON.stringify(nuevaPersona));
}