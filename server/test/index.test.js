const server = require('../src/server');
const session = require('supertest');
const agent = session(server);

/*
describe = agrupar test unitarios
it = test unitarios

describe("descripcion de lo que testea este grupo de it", () ==>{

    it("descripcion de lo que testea este it", () => {

    })
    it
    it
    it
})

*/

describe("test de rutas", () => {

    describe("GET /rickandmorty/character/:id", () => {

        it("Responde con status: 20", async () => {
            await agent.get('/rickandmorty/character/2').expect(200);
        })

        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {

            const { body } = await agent.get('/rickandmorty/character/2')

            expect(body).toHaveProperty("id")
            expect(body).toHaveProperty("name")
            expect(body).toHaveProperty("species")
            expect(body).toHaveProperty("gender")
            expect(body).toHaveProperty("status")
            expect(body).toHaveProperty("origin")
            expect(body).toHaveProperty("image")

        })

        it("Si hay un error responde con status: 500", async () => {
            await agent.get('/rickandmorty/character/2000000').expect(500);
        })


    })

    describe("GET /rickandmorty/login", () => {
        it("Si la info es correcta, devuelve access: true", async () => {
            const { body } = await agent.get('/rickandmorty/login?email=diego@mail.com&password=diego1')

            expect(body).toEqual({ access: true })
        })

        it("Si la info es incorrecta, devuelve access: false", async () => {
            const { body } = await agent.get('/rickandmorty/login?email=diego@mail.com&password=diego123')

            expect(body).toEqual({ access: false })
        })
    })

    describe("POST /rickandmorty/fav", () => {

        let character1 = { id: 1, name: "Rick" }
        let character2 = { id: 2, name: "Morty" }

        it("debe devolver la info en una array", async () => {
            const { body } = await agent.get("POST /rickandmorty/fav".send(character1))

            expect(body).toBeInstanceOf(Array)
            expect(body).toContainEqual(character1)
        })

        it("al enviar un nuevo elemento por body, este debe ser devuelto en un arreglo que incluye un elemento enviado previamente.",
            async () => {
                const { body } = await agent.post("/rickandmorty/fav").send(character2)
                expect(body).toContainEqual(character1)
                expect(body).toContainEqual(character2)
            })
    })

    describe("DELETE /rickandmorty/fav/:id", () => {
        let character1 = { id: 1, name: "Rick" }
        let character2 = { id: 2, name: "Morty" }

        it("debe devolver un array con los elementos sin modifica si el id no existe", async () => {

            const { body } = await agent.delete("/rickandmorty/fav/3");
            expect(body).toContainEqual(character1)
            expect(body).toContainEqual(character2)

        })
        it("si envio un id valido se elimina correctamente", async () => {

            const { body } = await agent.delete("/rickandmorty/fav/2");
            expect(body).toContainEqual(character1)
            expect(body).toContainEqual(character2)

        })
    })
})