import express from 'express';
import { UserController } from './user.controller';

const router = express.Router();

router.post('/api/users', UserController.createUser);
router.get('/api/users', UserController.getAllUsers);
router.get('/api/users/:userId', UserController.getSingleUser);
router.put('/api/users/:userId', UserController.updateSingleUser);
router.delete('/api/users/:userId', UserController.deleteSingleUser);
export const UserRoutes = router;
