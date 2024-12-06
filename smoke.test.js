const request = require('supertest');
const app = require('../server'); // Імпортуємо інстанс додатку

describe('Smoke Tests', () => {
  it('should respond with status 200 to the root route', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });

  it('should create a new user and respond with status 201', async () => {
    const newUser = { name: 'John Doe', email: 'john.doe@example.com' };
    const response = await request(app)
      .post('/api/users')
      .send(newUser);
    expect(response.status).toBe(201);
  });

  it('should update an existing user and respond with status 200', async () => {
    const updatedUser = { name: 'John Smith' };
    const userId = 1; // Замініть на правильний ID користувача
    const response = await request(app)
      .put(`/api/users/${userId}`)
      .send(updatedUser);
    expect(response.status).toBe(200);
  });
});
