import express from 'express';
import Task from '../models/Task.js';

const router = express.Router();

// Get all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.findAll({ order: [['id', 'DESC']] });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Server messed up' });
  }
});

// Add new task
router.post('/', async (req, res) => {
  try {
    const { title } = req.body;
    if (!title) return res.status(400).json({ error: 'Title required' });
    const newTask = await Task.create({ title });
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add task' });
  }
});

// Toggle task status
router.patch('/:id', async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (!task) return res.status(404).json({ error: 'Not found' });
    task.isDone = !task.isDone;
    await task.save();
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: 'Update failed' });
  }
});

// Delete task
router.delete('/:id', async (req, res) => {
  try {
    const rows = await Task.destroy({ where: { id: req.params.id } });
    res.json({ deleted: rows > 0 });
  } catch (err) {
    res.status(500).json({ error: 'Could not delete' });
  }
});

export default router;
