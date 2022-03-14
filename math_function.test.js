const { sumar } = require("./math_functions");

describe('Prueba la funcion para sumar', function() {
    test("Al sumar 2 y 2, retorna 4", () => {
        expect(sumar(2, 2)).toBe(4);
    });

    it("No debe retornar 0 al sumar 5 y 1", () => {
        expect(sumar(5, 1)).not.toBe(0);
    });

    it("Deberia retornar un numero como resultado", () => {
       expect(typeof sumar(1, 1)).toBe("number"); 
    });

    it.skip("Deberia retornar un numero aunque se le pase un string", () => {//Prueba fallando!
        expect(typeof sumar("1", "1")).toBe("number");
    });

    test('Funciona correctamente con decimales', () => {
        expect(sumar(0.2, 0.1)).toBeCloseTo(0.3, 5);
    });
});

it("Prueba que dos objetos sean iguales", () => {
    expect({name: "Juan", telefonos: [{celular: {numero: "+56123456789", nombre: "personal"}}]})
        .toEqual({name: "Juan", telefonos: [{celular: {numero: "+56123456789", nombre: "personal"}}]});
    expect(true).toBeTruthy();
    expect("la gallina turuleca").toContain("gallina");
});