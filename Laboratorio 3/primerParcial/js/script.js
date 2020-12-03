import crearTabla from "./tabla.js";
import Anuncio_Auto from "./anuncio.js";

let listaAnunciosAutos;
let frmAnuncioAutos;
let proximoId;
let divTabla;
//localStorage.clear();
window.addEventListener('load',inicializarManejadores);

function inicializarManejadores()
{
    
    listaAnunciosAutos = obtenerAnuncios();
    proximoId = obtenerId();
    divTabla = document.getElementById("divTabla");
    actualizarLista();
    
    frmAnuncioAutos = document.forms[0];
    
    frmAnuncioAutos.addEventListener('submit',e=>{
        e.preventDefault();
        const nuevoAnuncio = obtenerAnuncio();
        if(nuevoAnuncio)
        {
            listaAnunciosAutos.push(nuevoAnuncio);
            proximoId++;
            guardarDatos();
            actualizarLista();
        }
    });
    botonesModificacion();
}


function obtenerAnuncios()
{
    
    return JSON.parse(localStorage.getItem('anuncio_autos')) || [];
}

function obtenerId()
{
    
    return JSON.parse(localStorage.getItem('nextId')) || 1;
}

function obtenerAnuncio()
{
    
    const nuevoAnuncio = new Anuncio_Auto(proximoId,
        
        frmAnuncioAutos.titulo.value,        
        frmAnuncioAutos.transaccion.value,       
        frmAnuncioAutos.descripcion.value,
        frmAnuncioAutos.precio.value,
        frmAnuncioAutos.puertas.value,
        frmAnuncioAutos.kms.value,
        frmAnuncioAutos.potencia.value
        );
    
    return nuevoAnuncio;
}

function guardarDatos()
{
    localStorage.setItem('anuncio_autos',JSON.stringify(listaAnunciosAutos));
    localStorage.setItem('nextId',proximoId);
}

function actualizarLista()
{
    divTabla.innerHTML = "";
    
    setTimeout(()=>{
        divTabla.innerHTML = "";
        divTabla.appendChild(crearTabla(listaAnunciosAutos));
        crearSpineer();
        
    },3000);
    
}

function botonesModificacion()
{
    
    let btnModificar = document.getElementById("btnModificar");
    let btnCancelar = document.getElementById("btnCancelar");
     
    btnModificar.addEventListener('click',e=>{
        frmAnuncioAutos = document.forms[0];
        let idSeleccionado = frmAnuncioAutos.id.value;
        let vehiculo = listaAnunciosAutos.find(element=>element['id'] == idSeleccionado);
        console.log(vehiculo);
        vehiculo.titulo = frmAnuncioAutos.titulo.value;
        vehiculo.descripcion = frmAnuncioAutos.descripcion.value;
        vehiculo.precio = frmAnuncioAutos.precio.value;
        vehiculo.num_puertas = frmAnuncioAutos.puertas.value;
        vehiculo.num_kms = frmAnuncioAutos.kms.value;
        vehiculo.potencia = frmAnuncioAutos.potencia.value;
        
        console.log(vehiculo);
        console.log(listaAnunciosAutos);
        localStorage.setItem('anuncio_autos',JSON.stringify(listaAnunciosAutos));
        actualizarLista();
        limpiarCampos()
    });
    
    btnCancelar.addEventListener('click',e=>{
        limpiarCampos();
        //vaciarCampos(frmAnuncioAutos);
        
    });
}

function limpiarCampos()
{

    let txtTitulo = document.getElementById('txtTitulo');
    let txtDescripcion = document.getElementById('txtDescripcion');
    let txtPrecio = document.getElementById('txtPrecio');
    let txtPuertas = document.getElementById('txtPuertas');
    let txtKms = document.getElementById('txtKms');
    let txtPotencia = document.getElementById('txtPotencia');
    let btnModificar = document.getElementById("btnModificar");
    let btnCancelar = document.getElementById("btnCancelar");
    btnModificar.style.display = "none";
    btnCancelar.style.display = "none";
    txtTitulo.value = '';
    txtDescripcion.value = '';
    txtPrecio.value = '';
    txtPuertas.value = '';
    txtKms.value = '';
    txtPotencia.value = '';
}

function vaciarCampos(elemento)
{
    while(elemento.firstChild)
    {
        elemento.removeChild(elemento.firstChild);
    }
}

function crearSpineer()
{
    const img = document.createElement('img');
    img.setAttribute("src", "./images/spinner.gif");
    img.setAttribute("alt","Imagen Spineer");

    return img;
}