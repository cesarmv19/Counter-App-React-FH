describe('Pruebas en el archivo demo.test.js', () =>{
    test('deben ser iguales los strings', () => { 
        // const isActive = true;
        
        // if (isActive) {
        //     throw new Error('No está activo')
        // 
        //.1 mensaje
        const mensaje = 'Hola mundo'
        //.2 estímulo
        const mensaje2 = `Hola mundo`
        //.3 observar el comportamiento
        expect( mensaje ).toBe( mensaje2);
    
    });

    
});
