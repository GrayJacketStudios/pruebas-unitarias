const axios = require('axios');

jest.mock('axios');

describe("Se prueba axios mockeado", () => {
    beforeAll(() => {
       axios.get.mockResolvedValue({data: [{name: "Juan", telefonos: [{celular: {numero: "+56123456789", nombre: "personal"}}]}]}); 
    });

    it("Obtiene usuarios con un .then", (done) => {
        expect.assertions(1);
        axios.get("https://cualquier-pagina-no-importa.cl/usuarios")
        .then(response => {
            expect(response.data.length).toBe(1);
            done();
            })
            .catch(error => {
                throw new Error(error);
             });
     });
 
     it("Obtiene usuarios con un await", async () => {
         const result = await axios.get("https://cualquier-pagina-no-importa.cl/usuarios");
         expect(result.data).not.toBeNull();
     });
});