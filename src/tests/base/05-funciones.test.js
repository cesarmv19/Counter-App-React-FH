import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe('Pruebas en 05-funciones.js', () =>{

    test(' getUser debe retornar un objeto', () => { 

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect( user ).toEqual( userTest);
     });
//Tarea
     test('getUsuarioActivo debe retornar un objeto', () => { 

        const nombre = 'Fernando';
        const userActivoTest = {
            uid: 'ABC567',
            username: nombre
        }

        console.log(userActivoTest);

        const userActivo = getUsuarioActivo('Fernando');
        expect( userActivo ).toEqual( userActivoTest);


      })

});