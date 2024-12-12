const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { products } = require('./data');
import { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to enable CORS, enhance security with Helmet, and parse JSON requests
app.use(cors());
app.use(helmet());
app.use(express.json());

// Get all products, with optional search query
app.get('/api/products', (req: Request, res: Response) => {
    const search = req.query.search?.toString().toLowerCase();
    if (search) {
        // Filter products based on search query
        const filtered = products.filter((p: any) =>
            p.title.toLowerCase().includes(search) ||
            p.description.toLowerCase().includes(search)
        );
        return res.json(filtered);
    }
    // Return all products if no search query
    res.json(products);
});

/// Get product by ID
app.get('/api/products/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        // Return 404 for invalid product ID format
        return res.status(400).json({ message: 'Invalid product ID' });
    }
    const product = products.find((p: any) => p.id === id);
    if (!product) {
        // Return 404 if product not found
        return res.status(404).json({ message: 'Product not found' });
    }
    // Return the product if found
    res.json(product);
});

// Start the server and listen on the specified port
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}

module.exports = app;