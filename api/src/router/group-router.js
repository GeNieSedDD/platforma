const express = require('express');
const router = express.Router();
const groupController = require('../controllers/group-controller');

router.get('/:userId', (req, res, next) => {
    console.log('Запрос на получение групп для пользователя:', req.params.userId);
    next();
  }, groupController.getUserGroups);

module.exports = router;