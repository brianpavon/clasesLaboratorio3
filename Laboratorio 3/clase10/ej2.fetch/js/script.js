const ol = document.querySelector(".ol");
const btTraer = document.getElementById("btnTraer");
const spinner = document.getElementById("spinner");

//PROGRAMAR EL MANEJADOR DEL EVENTO CLICK
btnTraer.addEventListener("click",(e)=>{
        spinner.appendChild(crearSpineer());
        //fetch maneja promesas
        fetch("https://jsonplaceholder.typicode.com/users")
        //son todos asincronos, cuando vuelva la peticion, va a los then
        .then((res)=>{
            //console.log(res);
            //res tiene muchos metodos que se pueden usar... blob
            //return res.json();//devuelve una promesa, es un metodo asincrono
            //manejo los errores
            return !res.ok ?  Promise.reject(res) : res.json();//ternario
            
        })
        .then((data)=>{
            //recibe callback, lo que devuelve el then anterior en este caso
            ol.appendChild(crearItems(data));
        })
        .catch((err)=>{
            console.log(err);
            let mensaje = err.statusText || "Se produjo un error";
            console.warn("Error: " + err.status + "-" + mensaje);
        })
        .finally(()=>{
            spinner.innerHTML = "";
        })
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
        item.textContent = `${element.name} ${element.email}`;
        fragmento.appendChild(item);
    });
    return fragmento;
}