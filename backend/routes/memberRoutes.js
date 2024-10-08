const express = require('express');
const { getMembers, createMember } = require('../controllers/memberController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', getMembers);
router.post('/', authMiddleware, createMember);

module.exports = router;
