const request = require("supertest");
const app = require("../index");

let server;

beforeAll((done) => {
    server = app.listen(3000, done); // Start the server
});

afterAll((done) => {
    server.close(done); // Close the server
});

describe("GET /", () => {
    it("should return Hello World", async () => {
        const res = await request(server).get("/");
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe("Hello World");
    });
});
