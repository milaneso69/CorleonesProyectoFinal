const Cliente = require('../models/clienteModel'); // Asegúrate de que la ruta sea correcta

class ClienteController {
    // Obtener todos los clientes
    static async getAllClientes(req, res) {
        try {
            const clientes = await Cliente.findAll();
            res.json(clientes);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Obtener un cliente por su ID
    static async getClienteById(req, res) {
        try {
            const cliente = await Cliente.findById(req.params.IdCliente);
            if (!cliente) {
                return res.status(404).json({ message: 'Cliente no encontrado' });
            }
            res.json(cliente);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Crear un nuevo cliente
    static async createCliente(req, res) {
        try {
            const cliente = await Cliente.create(req.body);
            res.status(201).json(cliente);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Actualizar un cliente
    static async updateCliente(req, res) {
        try {
            const cliente = await Cliente.update(req.params.IdCliente, req.body);
            if (!cliente) {
                return res.status(404).json({ message: 'Cliente no encontrado o ya eliminado' });
            }
            res.json(cliente);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Eliminar un cliente
    static async deleteCliente(req, res) {
        try {
            const result = await Cliente.delete(req.params.IdCliente);
            res.json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = ClienteController;
