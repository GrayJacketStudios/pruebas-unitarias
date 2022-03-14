let animales = []

describe("Prueba distintas configuraciones con el array animales", () => {
   beforeAll(() => {
       animales = ["perro", "gato", "pez", "vaca"];
   });

   it("animales deberia contener gato", () => {
      expect(animales).toContain("gato"); 
   });
    
   it("animales deberia contener 5 registros luego de incluir elefante", () => {
        animales.push("elefante");
        expect(animales.length).toBe(5); 
   });

   it.skip("animales deberia contener 5 registros luego de incluir jirafa", () => {
        animales.push("jirafa");
        expect(animales.length).toBe(5);
   });
});