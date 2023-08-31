const express = require('express');
const router = express.Router();
const voterController = require('../controllers/voterController');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');

// Get all voters
router.get('/', authMiddleware, voterController.getAllVoters);

// Add voter
router.post('/add', authMiddleware, adminMiddleware, voterController.addVoter);

// Delete voter
router.delete('/:id', authMiddleware, adminMiddleware, voterController.deleteVoter);

module.exports = router;
