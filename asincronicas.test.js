const axios = require('axios');

describe("Prueba de funcion asincronica, directamente hacia el servicio", () => {
   it("Obtiene usuarios con un .then", (done) => {
       axios.get("https://jsonplaceholder.typicode.com/users")
       .then(response => {
           expect(response.data.length).toBeGreaterThanOrEqual(10);
           done();
           })
           .catch(error => {
               throw new Error(error);
            });
    });

    it("Obtiene usuarios con un await", async () => {
        const result = await axios.get("https://jsonplaceholder.typicode.com/users");
        expect(result.data).not.toBeNull();
    });
});