import crearTabla from "./tabla.js";
import Persona from "./persona.js";

//const btnTabla;
//const listaPersonas = [];
let listaPersonas;
let frmPersona;
let proximoId;
let divTabla;

//esta lista no la quiero... uso el local storage donde voy a ir guardando lo que cargue
/*let listaPersonas = [{"id":1,"first_name":"Feliza","last_name":"Corser","email":"fcorser0@google.es","gender":"Female"},
{"id":2,"first_name":"Nial","last_name":"Barnardo","email":"nbarnardo1@wisc.edu","gender":"Male"},
{"id":3,"first_name":"Tish","last_name":"D'Costa","email":"tdcosta2@miitbeian.gov.cn","gender":"Female"},
{"id":4,"first_name":"Kiel","last_name":"Switsur","email":"kswitsur3@php.net","gender":"Male"},
{"id":5,"first_name":"Ashlin","last_name":"Corderoy","email":"acorderoy4@amazonaws.com","gender":"Male"},
{"id":6,"first_name":"Carline","last_name":"Francisco","email":"cfrancisco5@loc.gov","gender":"Female"},
{"id":7,"first_name":"Josey","last_name":"Cowl","email":"jcowl6@ycombinator.com","gender":"Female"},
{"id":8,"first_name":"Kip","last_name":"Serrier","email":"kserrier7@huffingtonpost.com","gender":"Male"},
{"id":9,"first_name":"Dillie","last_name":"Finnes","email":"dfinnes8@google.com.au","gender":"Male"},
{"id":10,"first_name":"Alain","last_name":"Daykin","email":"adaykin9@weibo.com","gender":"Male"},
{"id":11,"first_name":"Diane-marie","last_name":"Hannond","email":"dhannonda@yale.edu","gender":"Female"},
{"id":12,"first_name":"Korey","last_name":"Tuma","email":"ktumab@macromedia.com","gender":"Male"},
{"id":13,"first_name":"Jae","last_name":"Hendrick","email":"jhendrickc@aol.com","gender":"Male"},
{"id":14,"first_name":"Bronnie","last_name":"Kubyszek","email":"bkubyszekd@trellian.com","gender":"Male"},
{"id":15,"first_name":"Janaya","last_name":"Wilber","email":"jwilbere@fastcompany.com","gender":"Female"},
{"id":16,"first_name":"Paten","last_name":"Bradburne","email":"pbradburnef@skyrock.com","gender":"Male"},
{"id":17,"first_name":"Bartlet","last_name":"Beelby","email":"bbeelbyg@cbslocal.com","gender":"Male"},
{"id":18,"first_name":"Leila","last_name":"Bachelor","email":"lbachelorh@elpais.com","gender":"Female"},
{"id":19,"first_name":"Findlay","last_name":"Puller","email":"fpulleri@hc360.com","gender":"Male"},
{"id":20,"first_name":"Worthington","last_name":"Ivanin","email":"wivaninj@techcrunch.com","gender":"Male"}]*/

//cada vez que se refresca la pagina va a suceder esto
window.addEventListener('load',inicializarManejadores);

function inicializarManejadores()
{
    //obtenerPersonas(listaPersonas);
    listaPersonas = obtenerPersonas();
    proximoId = obtenerId();
    divTabla = document.getElementById("divTabla");
    actualizarLista();
    //console.log(listaPersonas);
    //const frmPersona = document.forms[0];
    frmPersona = document.forms[0];
    //document.forms[0].addEventListener('submit',e=>{
    frmPersona.addEventListener('submit',e=>{
        e.preventDefault();//aborto el envio del formulario
        /*console.log(frmPersona.nombre.value);
        console.log(frmPersona.querySelector('#txtApellido').value);
        console.log(frmPersona.getElementById("txtEmail").value);*/
        
        //hago el alta de la persona
        const nuevaPersona = obtenerPersona();
        if(nuevaPersona)
        {
            listaPersonas.push(nuevaPersona);
            proximoId++;
            guardarDatos();
            actualizarLista();
        }
    });
}

//se fija si en el local storage ya hay algo guardado, o va inicializar con un array vacio sino hay nada
//function obtenerPersonas(lista)
function obtenerPersonas()
{
    //lista = JSON.parse(localStorage.getItem('gente')) || [];//si existe y lo puedo parsear a array de personas, sino creo el array vacio
    return JSON.parse(localStorage.getItem('gente')) || [];
}

function obtenerId()
{
    //lista = JSON.parse(localStorage.getItem('gente')) || [];//si existe y lo puedo parsear a array de personas, sino creo el array vacio
    return JSON.parse(localStorage.getItem('nextId')) || 20000;
}

function obtenerPersona()
{
    
    const nuevaPersona = new Persona(proximoId,
        /*frmPersona.nombre.value,
        frmPersona.querySelector('#txtApellido').value,
        frmPersona.email.value,
        frmPersona.gender.value*/
        frmPersona.nombre.value,
        //document.getElementById("txtApellido"),
        frmPersona.apellido.value,
        //document.querySelector('#txtEmail'),
        frmPersona.email.value,
        frmPersona.gender.value
        );
    //listaPersonas.push(nuevaPersona);
    return nuevaPersona;
}

function guardarDatos()
{
    localStorage.setItem('gente',JSON.stringify(listaPersonas));
    localStorage.setItem('nextId',proximoId);
}

function actualizarLista()
{
    divTabla.innerHTML = "";
    //meter una imagen, de spiner onda cargando
    //simular tardanza...
    setTimeout(()=>{
        divTabla.innerHTML = "";
        divTabla.appendChild(crearTabla(listaPersonas));
    },5000);
    
}

//agregar un manejador de evento para el boton cargar tabla
//const btnTabla = document.getElementById('btnTabla');

/*btnTabla.addEventListener('click',function(e){
    const divTabla = document.getElementById('divTabla');
    divTabla.appendChild(crearTabla(listaPersonas));
    //console.log(event);    
});*/


/*//pase todo esto al archivo tabla.js
//la idea es pasarle un array de cualquier objeto, y esta funcion sea capaz de devolvernos una tabla
function crearTabla(lista)
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
        /*tr.appendChild(th);
    }
    thead.appendChild(tr);
    return thead;
}*/
/*
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
