const Product = require('../models/productModel');

class ProductController{

    static async getAllProducts(req, res)
    {
        try {
            const products = await Product.findAll();
            res.json(products);
        } catch (error) {
            res.status(500).json({error:error.message})
        }
    }

    static async getProductById(req, res) {
      try {
        const product = await Product.findById(req.params.idProducto);
        if (!product) {
          return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }

    static async createProduct(req, res) {
        try {
          const product = await Product.create(req.body);
          res.status(201).json(product);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      }
    
      static async updateProduct(req, res) {
        try {
          const product = await Product.update(req.params.idProducto, req.body);
          if (!product) {
            return res.status(404).json({ message: "Product not found or already deleted" });
          }
          res.json(product);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      }
    
      static async deleteProduct(req, res) {
        try {
          const result = await Product.delete(req.params.idProducto);
          res.json(result);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      }
    }

module.exports = ProductController;