import express from 'express';
import { getUsers, addUser, getUser, deleteUser, editUser } from '../controller/users.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/', addUser);
router.get('/:id', getUser); 
router.delete('/:id', deleteUser);
router.patch('/:id', editUser);

export default router;