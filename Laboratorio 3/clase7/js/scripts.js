//Document Object Model

/*console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);

console.log(document.title);

console.log(document.charset);
console.log(document.documentElement.lang);

console.log(document.forms);
console.log(document.links);//mostrar los enlaces del documento
console.log(document.styleSheets);
console.log(document.scripts);//acceder a los archivos script

//varias maneras de pegarle a un elemento

//Esto de getElemntById o ByTagName o ByName o ByClassName, no es algo que se te este utilizando actualmente
console.log(document.getElementById('linkGoogle'));//esto es como un to string de este id
console.log(document.getElementsByTagName('a'));//nos devuelve un html collection, como un array seria, nos devuelve todos los elementos de la etiqueta que pasamo
console.log(document.getElementsByName('nombre'));
console.log(document.getElementsByClassName('enlace')[0]);//nos va a devolver un array, en realidad html collection, con todos los elementos que pertenezcan a una clase
//con el corchete, apunto a ese elemnto que quiero mostrar

document.getElementById('btn1').addEventListener('click',e=>{alert("saludar")});
//otra forma es:
//const boton = document.getElementById('btn1');
//boton.addEventListener('click',e=>{alert("saludar")});
//el getElementById se siguen usando---

//byTagName,ByName fueron reemplazadas por
console.log(document.querySelector('#btn1'));//utiliza las mismas query que css
console.log(document.querySelectorAll('.enlace'));//esto me muestra como un array de los elementos de la clase
console.log(document.querySelectorAll('p'));
console.log(document.querySelector('#p1'));//este es como getElementById, pero no se recomienda, es mas lento
*/

//Guardar una referencia en una variable

/*const titulo = document.getElementById('titulo');//aca tengo una referencia, y puedo modificar los atributos con js
console.log(titulo.getAttribute('id'));//getAttribute es como un getter
//puedo setear un atributo

//titulo.setAttribute('id','pepe');//es como un setter recibe 2 parametros,primero lo que quiero modificar, el 2do lo que le voy a poner
//aca manipulo atributos
console.log(titulo.hasAttribute('id'));//si quiero saber si un elemento tiene atributos

//console.log(titulo.removeAttribute('id'));//devuelve undefinned ,saco el id
console.log(titulo.hasAttribute('id'));

console.log(titulo.className);
console.log(titulo.classList);//es parecido a un array pero no lo es

//supongamos que le quiero agregar al titulo la clase letras verdes
titulo.classList.add('letrasVerdes', 'rojo');//metodo add agrego una clase a esto, puedo pasarle varias con comas entre medio

const linkGoogle = document.getElementById('linkGoogle');*/


/*const boton = document.getElementById('btn1');
boton.addEventListener('click',e=>{linkGoogle.classList.toggle('rojo')});//agrego la clase link, cada vez que hago click en ese boton

/*const boton = document.getElementById('btn1');
boton.addEventListener('click',e=>
    {
        //linkGoogle.classList.toggle('link')
        //if(linkGoogle.getAttribute('class'))

    });*/

//en vez de aplicar css en linea lo puedo hacer desde aca tambien
/*const $parrafo3 = document.getElementById('p3');
$parrafo3.setAttribute('style',"background-color: red;color: yellow;");
//no estaria haciendo una clase, no es buena practica, pero se puede hacer si quisiera

//operador punto, si ya tengo una referencia al parrafo (en este caso
console.log($parrafo3.id);

const $info = document.getElementById('info');

//2 metodos que me permiten escribir texto dentro de una etiqueta
//$info.innerText = "Hola Mundo";//inyecta todo lo que este en comillas como texto en el html, no se deberia usar
//si quiero meter una etiqueta
$info.innerHTML = "<h2>Hola mundo </h2>";//mete codigo html desde js, no es una buena practica
//$info.textContent = "<h2>Hola mundo </h2>";//esto en vez de innerText

// lo que se debe hacer es crear un objeto en javascript de html
const unH2 = document.createElement('h2');//ponemos el elemento que queremos crear, y voy a tener un obj en memoria de este h2
//para inyectar texto
//let text = document.createTextNode('Esto es un titulo h2');//creo con un nodo texto, ese texto

//unH2.appendChild(text);//inyecta un hijo, a otra etiqueta--->esto es lo correcto para inyectar html en js
unH2.textContent = "chau mundo";//es otra forma en vez de crear esa variable text
unH2.classList.add('rojo');//le inyecto clases...
$info.appendChild(unH2);//ahora se va a ver en la pagina
//console.log(unH2);

//reemplazar una clase con otra
const linkGoogle = document.getElementById('linkGoogle');
linkGoogle.classList.replace('rojo','azul'); //segundo parametro la nueva clase

//a partir de la ultima actuzalizacion de html, puedo agregar propiedades que elabore yo
//const titulo = document.getElementById('titulo');
//agregarlo desde js en vez de html
//titulo.dataset.descripcion = "Esto es un data attrribute";
//otra forma
titulo.setAttribute('data-descripcion',"esto es un nuevo atributo");
console.log(titulo.dataset.descripcion);//aca lo recupero lo que hice en html */




/*const $parrafos = document.getElementById('parrafos');
console.log($parrafos);

console.log($parrafos.childNodes);
//console.log($parrafos.children);

//guardo en una referencia
const hijos = $parrafos.children;
//console.log(hijos[0]);//devolveria el parrafo 1
//o por id
//console.log(hijos['p1']);
console.log($parrafos.firstChild);//viene el primer nodo hijo, elemento o texto,firstElementChild--> viene el primer elemento
console.log($parrafos.lastElementChild);//el ultimo elemento, sino lastElement devuelve el ultimo nodo
console.log($parrafos.lastChild.nodeType);//aca nos dice que tipo es el nodo hijo..

//si tenemos un nodo podemos tener una referencia al nodo padre
console.log($parrafos.parentNode);//pregunto cual es el padre del nodo parrafos 

//elementos hermanos... previous next
//console.log($parrafos.nextElementSibling);
$parrafos.removeChild($parrafos.firstElementChild);//esto es para removerle un elemento a otro
//en este caso quiero remover el primer hijo, entonces uso la propiedad .firsElementChild, si quisisera el ultimo pongo lastElementChild

//puedo preguntar con hasChild si el elemento tiene hijos
console.log($parrafos.hasChildNodes());
//si quiero borrar todos puedo hacer,esto itera hasta que elimina todos los hijos
while($parrafos.hasChildNodes())
{
    $parrafos.removeChild($parrafos.firstChild);//remuevo todo
}*/

//JSON

/*console.log(JSON.stringify(1234));//va  a mostrar en un color diferente
console.log(1234);
console.log(JSON.parse("1234"));*/

/*const p1 = {
    nombre: "Juan",
    edad: 34,
    nada: true
}
/*console.log(p1);
console.log(JSON.stringify(p1));//aca lo transforma a JSON

let x = JSON.stringify(p1);

const objetoPersona = JSON.parse(x);
console.log(objetoPersona);//lo vuelvo a convertir*/

//SI QUIERO GUARDAR EN EL LOCAL STORAGE
/*localStorage.setItem("unaPersona",JSON.stringify(p1));//recibe 2 parametros, clave (nombre de variable), valor(lo que quiero guardar)
//como lo unico que puedo guardar es texto, lo paso con JSON.stringify

//si quisiera recuperar esto del localstorage
const otraPersona = JSON.parse(localStorage.getItem("unaPersona"));//lo vuelvo a convertir a objeto
console.log(otraPersona);*/

//PARA PARCIAL, tendriamos todo en el local storage y de ahi sacariamos las cosas...

//const perona = JSON.parse(localStorage.getItem("unaPersona")) || [];//obtengo el array de eso que esta en el local storage o sino lo declaro como un array vacio

//const vec = [];
const autos =
[{"marca":"Volvo"},
{"marca":"Toyota"},
{"marca":"Jeep"},
{"marca":"Hyundai"},
{"marca":"GMC"},
{"marca":"Chrysler"},
{"marca":"Hyundai"},
{"marca":"Saturn"},
{"marca":"Bentley"},
{"marca":"Honda"},
{"marca":"Suzuki"},
{"marca":"BMW"},
{"marca":"Toyota"},
{"marca":"Honda"},
{"marca":"Nissan"},
{"marca":"Mazda"},
{"marca":"Buick"},
{"marca":"Infiniti"},
{"marca":"Saab"},
{"marca":"Buick"}];
const divInfo = document.getElementById("info");

divInfo.appendChild(crearLista(autos));//llamo a la funcion, le paso los valores que tiene ese array de autos

//crea una ul, y tiene li, que en este caso van a tener las marcas de los autos
function crearLista(vec){
    const lista = document.createElement('ul');
    //ejecuta el callback que pase por parentesis, y en cada iteracion va a pasar un elemento de ese vec
    vec.forEach(auto => {
        const item = document.createElement('li');
        const texto = document.createTextNode(auto.marca);
        //agrego el nodo texto al item
        item.appendChild(texto);
        //lo agrego a la lista ul
        lista.appendChild(item);
    });
    return lista;
}

const listaPersonas = [{"id":1,"first_name":"Gabriell","last_name":"Tatterton","email":"gtatterton0@naver.com","gender":"Female"},
{"id":2,"first_name":"Gilberte","last_name":"Chastelain","email":"gchastelain1@elegantthemes.com","gender":"Female"},
{"id":3,"first_name":"Abdul","last_name":"Zoellner","email":"azoellner2@walmart.com","gender":"Male"},
{"id":4,"first_name":"Grant","last_name":"Wadeson","email":"gwadeson3@umich.edu","gender":"Male"},
{"id":5,"first_name":"Paulie","last_name":"Jordi","email":"pjordi4@buzzfeed.com","gender":"Male"},
{"id":6,"first_name":"Karoly","last_name":"Billington","email":"kbillington5@altervista.org","gender":"Male"},
{"id":7,"first_name":"Umberto","last_name":"Speir","email":"uspeir6@nytimes.com","gender":"Male"},
{"id":8,"first_name":"Woodie","last_name":"Roslen","email":"wroslen7@istockphoto.com","gender":"Male"},
{"id":9,"first_name":"Lorrie","last_name":"Rounding","email":"lrounding8@linkedin.com","gender":"Male"},
{"id":10,"first_name":"Kennett","last_name":"Sorrell","email":"ksorrell9@wikispaces.com","gender":"Male"},
{"id":11,"first_name":"Lorry","last_name":"Napoleon","email":"lnapoleona@patch.com","gender":"Female"},
{"id":12,"first_name":"Bronnie","last_name":"Foat","email":"bfoatb@bloomberg.com","gender":"Male"},
{"id":13,"first_name":"Geoffry","last_name":"Kaine","email":"gkainec@miitbeian.gov.cn","gender":"Male"},
{"id":14,"first_name":"Myrtle","last_name":"Calcut","email":"mcalcutd@google.com.hk","gender":"Female"},
{"id":15,"first_name":"Hubie","last_name":"Tatterton","email":"htattertone@goodreads.com","gender":"Male"},
{"id":16,"first_name":"Chucho","last_name":"Uzzell","email":"cuzzellf@friendfeed.com","gender":"Male"},
{"id":17,"first_name":"Aura","last_name":"Burnage","email":"aburnageg@xinhuanet.com","gender":"Female"},
{"id":18,"first_name":"Misha","last_name":"Acors","email":"macorsh@oracle.com","gender":"Female"},
{"id":19,"first_name":"Shawn","last_name":"Ransfield","email":"sransfieldi@alibaba.com","gender":"Female"},
{"id":20,"first_name":"Anastasia","last_name":"Penhearow","email":"apenhearowj@bigcartel.com","gender":"Female"}];

//hacer la funcion obtenerPersonas
function obtenerPersonas(lista){
    //crear una tabla, tiene thead, un tbody, que adentro tiene tr, y adentro de cada tr tenga td
    //la idea es que recorra el array de personas, agarre la key y cargue los datos en la table
    //que pueda extraer los th y poner en los td lo que corresponda
}
