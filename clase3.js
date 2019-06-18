var nombre='Sergio',edad=29

function imprimirEdad()
{
console.log(`${nombre} tiene ${edad} anos`)
}

imprimirEdad()

function imprimirEdad(n,e)
{
console.log(`${n} tiene ${e} anos`)
}

imprimirEdad(nombre,edad)

function imprimirEnMayusculas()
{
    nombre=nombre.toUpperCase()
    console.log(nombre)

}
imprimirEnMayusculas()