const Citas = require('../models/citasModel');

class citasController{

    static async getAllCitas(req, res)
    {
        try {
            const citas = await Citas.findAll();
            res.json(citas);
        } catch (error) {
            res.status(500).json({error:error.message})
        }
    }

    static async getCitasById(req, res) {
      try {
        const citas = await Citas.findById(req.params.IdCita);
        if (!citas) {
          return res.status(404).json({ message: 'Cita not found' });
        }
        res.json(citas);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }

    static async createCitas(req, res) {
        try {
          const citas = await Citas.create(req.body);
          res.status(201).json(citas);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      }
    
      static async updateCitas(req, res) {
        try {
          const citas = await Citas.update(req.params.IdCita, req.body);
          if (!citas) {
            return res.status(404).json({ message: "Cita not found or already deleted" });
          }
          res.json(citas);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      }
    
      static async deleteCitas(req, res) {
        try {
          const result = await Citas.delete(req.params.IdCita);
          res.json(result);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      }
    }

module.exports = citasController;