import express from "express"
import {getNotifications, createNotification, deleteNotification} from "../controllers/notifications.js";
import auth from "../middleware/auth.js";

 const router = express.Router();


 router.get('/', getNotifications);
 router.post('/',auth,createNotification);
 router.delete('/:id',deleteNotification);
export default router;
