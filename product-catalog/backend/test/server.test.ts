import request from 'supertest';
import { expect } from 'chai';
const app = require('../src/server');

describe('GET /api/products', () => {
    it('should return all products', async () => {
        const res = await request(app).get('/api/products');
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
    });

    it('should return filtered products based on search query', async () => {
        const res = await request(app).get('/api/products?search=iphone');
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
        const hasIphone = res.body.some((product: any) => product.title.includes('iPhone'));
        expect(hasIphone).to.be.true;
    });
});

describe('GET /api/products/:id', () => {
    it('should return a product by ID', async () => {
        const res = await request(app).get('/api/products/1');
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('object');
        expect(res.body.id).to.equal(1);
    });

    it('should return 404 if product not found', async () => {
        const res = await request(app).get('/api/products/999');
        expect(res.status).to.equal(404);
    });


});