import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de heroes.js', () =>{
    test('debe retornar un heroe por id', () => { 

        const id = 1;
        const heroe = getHeroeById(id);
        
        const heroeData = heroes.find( h => h.id === id);

        expect( heroe ).toEqual( heroeData);
    });

    test('debe retornar undefined si Heroe no existe', () => { 

        const id = 10;
        const heroe = getHeroeById(id);

        expect( heroe ).toBe( undefined);
    });

    test('debe retornar un arreglo', () => { 
        const owner = [
            
                {
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                },
                {
                    id: 3,
                    name: 'Superman',
                    owner: 'DC'
                },
                {
                    id: 4,
                    name: 'Flash',
                    owner: 'DC'
                }
            
        ];

        const ownerTest = getHeroesByOwner('DC');
        // console.log(getHeroesByOwner('DC'));

        expect( ownerTest ).toEqual(owner);

        const nro = 2;
        const onwerTestTwo = getHeroesByOwner('Marvel');
        const ownerTestTwoLength = onwerTestTwo.length;

        console.log(ownerTestTwoLength);
        expect( nro ).toBe( ownerTestTwoLength );
     })
})