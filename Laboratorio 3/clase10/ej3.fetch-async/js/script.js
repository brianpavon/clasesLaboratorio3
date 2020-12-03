const ol = document.querySelector(".ol");
const btTraer = document.getElementById("btnTraer");
const spinner = document.getElementById("spinner");

//PROGRAMAR EL MANEJADOR DEL EVENTO CLICK
btnTraer.addEventListener("click",(e)=>{
        traerPersonas();
});

const traerPersonas = async ()=>{
    spinner.appendChild(crearSpineer());
    ol.innerHTML = "";
    try 
    {
        //transformar el fetch en asincrono
        let res = await fetch("https://jsonplaceholder.typicode.com/users");//espera a que termine fetch
        if(!res.ok)
        {
            //todo mal
            let mensaje = res.statusText || "Se produjo un error";
            //throw Error(res.status + "-" + mensaje);
            //en vez de arrojar un erro puedo arrojar lo que quiera, un objeto por ej
            throw {status: res.status, statusText: mensaje};
        }
        let data = await res.json(); //seria como el segundo then de mas arriba
        ol.appendChild(crearItems(data));
    } 
    catch (err) 
    {
        console.error("Error: " + err.status, err.statusText);//asi queda parecido a si fuera html http
    }
    finally
    {
        spinner.innerHTML = "";
    }
}

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