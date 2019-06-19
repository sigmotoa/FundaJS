var x=4, y='4'
//Cuando se usa === se consulta que la igualdad es totalmente exacta
var sergio={
    nombre:'Sergio',
    apellido:'Motoa',
    edad:29,
    ingeniero: true,
    cantante: false,
    contador:false,
    profesor:true,
    musico:false,
    antropologo:false
}

function imprimeProfe(persona)
{
    console.log(`${persona.nombre} es: `)

    if(persona.ingeniero)
    {
        console.log('Ingeniero')
    }
    if(persona.cantante)
    {
        console.log('Cantante')
    }
    if(persona.contador)
    {
        console.log('Contador')
    }
    if(persona.profesor)
    {
        console.log('Profesor')
    }
    if(persona.musico)
    {
        console.log('Musico')
    }
    if(persona.antropologo)
    {
        console.log('Antropologo')
    }

}
imprimeProfe(sergio)

function esMayor(persona)
{
    if(persona.edad>=18)
    {
        console.log(`${persona.nombre} es mayor de edad `)
    }
    else
    {
        console.log(`${persona.nombre} es menor de edad `)
    }
}
esMayor(sergio)
var otro={
    nombre:'Sergio'
}
//Cuando se comparan objetos, se compara es la direcci[on de memoria



