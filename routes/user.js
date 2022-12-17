const express =  require('express');
const router = express.Router();

const userController = require('../controllers/user');

router.post('/add-user' ,userController.addExpense );

router.get('/get-user', userController.getExpense);

router.delete('/delete-user/:id', userController.deleteExpense );

router.delete('/edit-user/:id', userController.editExpense );

module.exports  = router ;