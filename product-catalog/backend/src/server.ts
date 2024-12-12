import express from 'express';
import { Request, Response } from 'express-serve-static-core';
import cors from 'cors';
import helmet from 'helmet';
import { products } from './data';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(helmet());
app.use(express.json());

// Get all products
app.get('/api/products', (req: Request, res: Response) => {
    const search = req.query.search?.toString().toLowerCase();
    if (search) {
        const filtered = products.filter(p =>
            p.title.toLowerCase().includes(search) ||
            p.description.toLowerCase().includes(search)
        );
        return res.json(filtered);
    }
    res.json(products);
});

// Get product by ID
app.get('/api/products/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        return res.status(400).json({ message: 'Invalid product ID' });
    }
    const product = products.find(p => p.id === id);
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});