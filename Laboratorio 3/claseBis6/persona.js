export let algo = 30;

/*export default class Persona*/
export class Persona
{
    constructor(nombre,sexo,edad)
    {
        this.nombre = nombre;
        this._sexo = sexo;
        this.edad = edad;
    }
    set setSexo(sexo)
    {
        this.sexo = sexo.toLowerCase();
    }
    get Sexo()
    {
        return this._sexo;
    }

    /*aca es todo public en los metodos*/
    saludar()
    {
        console.log(`Hola me llamo Pepe ${this.nombre}`);
    }   
}

/*Si es una funcion con nombre*/
/*export default function sarasa()
{
    console.log("Saraseo");
}*/
const sarasa = function()
{
    console.log("Saraseo");
}
export default sarasa;
/*Esto si quiero exportar una funcion expresada*/ 

class Empleado extends Persona
        {
            constructor(nombre,sexo,edad,sueldo)
            {
                super(nombre,sexo,edad);
                this.sueldo = sueldo;
            }
            informarSueldo()
            {
                console.log(`Mi sueldo es ${this.sueldo}`);
            }
            saludar()
            {
                console.log(`Soy un empleado y me llamo ${this.nombre}`);
            }
        }

  