import express from 'express';
import cors from 'cors';
import { products } from './data';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Get all products
app.get('/api/products', (req, res) => {
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
app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});