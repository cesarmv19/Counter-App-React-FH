import { retornaArreglo } from "../../base/07-deses-arr";

describe('Prueba en archivo 07-deses-arr.js', () =>{

    test('Debe retornar un string y un número', () => { 

        const [letras, numeros] = retornaArreglo();

        console.log(letras);
        expect( letras ).toBe('ABC');
        expect( typeof letras ).toBe('string');

        expect( numeros ).toBe(123);
        expect( typeof numeros ).toBe('number');

     })
});