var nombre='Sergio',edad=29

function imprimirEdad()
{
console.log(`${nombre} tiene ${edad} anos`)
}

imprimirEdad()

//function imprimirEdad(n,e)
//{
//console.log(`${n} tiene ${e} anos`)
//}

imprimirEdad(nombre,edad)

var sergio ={
    nombre:'Sergio',
    apellido:'Motoa',
    edad:29
}

var juan={
    nombre:'Juan',
    apellido:'Galvis',
    edad:26
}

function imprimirEnMayusculas(persona)
{
    
    var nombre=persona.nombre.toUpperCase()
    console.log(nombre)

}

//desglosando un objeto

function imprimirApellidoMayuscu({apellido})
{
    console.log(apellido.toUpperCase())
}

function imprimirMinus (persona)
{
    var {nombre}=persona
    console.log(nombre.toLowerCase())
}

function imprNomEdad(persona)
{
    var {nombre}=persona
    var {edad}=persona
    console.log('Hola, mi nombre es '+nombre+' y tengo '+edad)
}
//imprimirEnMayusculas(sergio)
//imprimirApellidoMayuscu(sergio)
//imprimirEnMayusculas(juan)

//imprNomEdad(sergio)
//imprNomEdad(juan)


//Se realiza la modificacion del objeto
function cumplir(persona)
{
    persona.edad+=1
}
//Se genera un nuevo objeto modificado de la base
function cumplirO(persona)
{
    return{
        ...persona,
        edad: persona.edad+1
    }
}