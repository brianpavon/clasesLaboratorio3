
//la idea es pasarle un array de cualquier objeto, y esta funcion sea capaz de devolvernos una tabla
export default function crearTabla(lista)
{
    //1ro crear elemento table
    const tabla = document.createElement('table');
    //llamaria a la funcion crear cabecera... tendria que pasarle lo que quiero que este arriba de esta tabla
    //para que lea la clave de ese objeto, que despues voy a ir pasando
    tabla.appendChild(crearCabecera(lista[0]));//hago la cabecera y la inyecto a la tabla
    tabla.appendChild(crearCuerpo(lista));//aca les pasaria los clave-valor

    return tabla;
    
}

//le paso un objeto y me devuelve una cabecera
function crearCabecera(item)
{
    const thead = document.createElement('thead');
    const tr = document.createElement('tr');
    for (const key in item) 
    {             
         //la cantidad de th, depende de las key del objeto
         //la idea es en cada interacion, hacer un th e inyectarle la key     
         const th = document.createElement('th');
         const texto = document.createTextNode(key);//agarro lo que este escrito en la key para ponerlo en el th
         th.appendChild(texto);
         /*otra manera
         th.textcontent = key; // sin la linea de const texto
         */
        tr.appendChild(th);
    }
    thead.appendChild(tr);
    return thead;
}

//devolver tbody
function crearCuerpo(lista)
{
    const tbody = document.createElement('tbody');
    lista.forEach(element => {
        const tr = document.createElement('tr');
        for (const key in element) 
        {
            //cada valor de atraibuto creo un td(table data),y le inyecto el valor del atributo
            const td = document.createElement('td');
            const texto = document.createTextNode(element[key]);//element, es lo que esta en la lista
            td.appendChild(texto);
            tr.appendChild(td);
        }
        if(element.hasOwnProperty('id'))
        {
            //setear el atributo data id
            tr.setAttribute('data-id',element['id']);
            //tr.dataset.id = element['id'];//tambien puede ser esta
        }
        //le meto el manejador de tr para obtener el id
        agregarManejadorTR(tr);
        tbody.appendChild(tr);
    });
    return tbody;
}

function agregarManejadorTR(tr)
{
    //primero preguntar si existe este tr, en js con poner (tr),ya me da false y eso es null
    //se puede hacer un try catch
    if(tr)
    {
        tr.addEventListener('click', function(e){
            //alert(e.target.getAttribute('data-id'));//e.target va a ser el tr
            //alert(e.target.dataset.id);//e.target va a ser el tr, esta es otra manera
            //console.log("Hiciste click en un tr");
            //console.log(e);

            //alert(e.path[1].dataset.id);
            alert(e.target.parentNode.dataset.id);
        });
    }
}

/*function agregarManejadorTD(td)
{    
    if(td)
    {
        td.addEventListener('click', function(e){
            //console.log("Hiciste click en un td");
            alert(e.target.parentNode.dataset.id);
        });
    }
}*/