"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("./index"));
const postUserUrl = '/api/1.0/users';
const testUser = { username: 'test', email: 'test@test.com', password: 'test' };
describe('When user provides username and password', () => {
    it('returns 200 OK when the user request is valid', done => {
        supertest_1.default(index_1.default)
            .post(postUserUrl)
            .send(testUser)
            .then(response => {
            expect(response.status).toBe(200);
            done();
        });
    });
    it("should contain a userId in the response body", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield supertest_1.default(index_1.default).post("/users").send(testUser);
        console.log('the response : ');
        console.log(response);
        expect(response.body.userId).toBeDefined();
    }));
    test('should specify json as the content type in the http header', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield supertest_1.default(index_1.default).post(postUserUrl).send(testUser);
        expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
    }));
    it('returns message in body upon successful registration', done => {
        supertest_1.default(index_1.default)
            .post(postUserUrl)
            .send(testUser)
            .then(response => {
            expect(response.body.message).toBe('User created');
            done();
        });
    });
});
describe('When user provides invalid request', () => {
    it('should return a 400 status code', () => __awaiter(void 0, void 0, void 0, function* () {
        const bodies = [{ username: 'test' }, { password: 'test' }, { email: 'test@test.com' }];
        for (const body of bodies) {
            const response = yield supertest_1.default(index_1.default).post(postUserUrl).send(body);
            expect(response.statusCode).toBe(400);
        }
    }));
});
