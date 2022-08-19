import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en 02-template-string.js', () =>{

    test('getSaludo debe retornar Hola Fernando', () => { 
        const nombre = 'Fernando';

        const saludo = getSaludo( nombre );


        expect( saludo ).toBe( 'Hola ' + nombre + '!');
     })

     //getSaludo debe retornar Hola Carlos! si no hay argumento

     test('getSaludo debe retornar Hola Carlos si no hay argumento', () => { 

        const saludo = getSaludo();

        console.log(saludo);
        expect( saludo ).toBe( 'Hola Carlos!');
     })

});