const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');

// Create user by superadmin
router.post('/create', authMiddleware, adminMiddleware, userController.createUser);

// Delete user by superadmin
router.delete('/:id', authMiddleware, adminMiddleware, userController.deleteUser);

module.exports = router;
