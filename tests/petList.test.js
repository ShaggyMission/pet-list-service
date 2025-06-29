const request = require('supertest');
const express = require('express');
const petRoutes = require('../routes/pet.routes');
const connectDB = require('../config/db');

const app = express();
app.use(express.json());
app.use('/pets', petRoutes);

beforeAll(async () => {
  await connectDB();
});

describe('GET /pets/list', () => {
  it('should return paginated pets with currentPage and totalPages', async () => {
    const res = await request(app).get('/pets/list?page=1');

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('pets');
    expect(Array.isArray(res.body.pets)).toBe(true);
    expect(res.body).toHaveProperty('currentPage');
    expect(res.body).toHaveProperty('totalPages');
  });
});
