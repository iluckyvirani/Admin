import express from "express"
import { register, getAllUser, updateUser, deleteUser } from "../Controllers/UserController.js"
const router = express.Router()

router.post('/register', register)
router.get('/getusers', getAllUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

export default router