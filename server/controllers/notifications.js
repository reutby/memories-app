import Mongoose from "mongoose";
import Notification from "../models/notifications.js";



export const getNotifications = (req, res) => {
    Notification.find({ receiverId: req.userId })
        .then((result) => res.status(200).json(result))
        .catch(error => res.status(404).json({ message: error.message }));

};

export const createNotification = (req, res) => {
    const notification = req.body;
    const newNotification = new Notification({ ...notification, userId: req.userId, createAt: new Date().toISOString() });
    Notification.findOneAndDelete({ receiverId: newNotification.receiverId, notificationType: 'like', userId: newNotification.userId,isPost:newNotification.isPost })
        .then((result) => {
            if (result && newNotification.notificationType === 'like') {
                res.status(409).json({ message: 'This notification already exist' })
            }
            else {
                newNotification.save()
                    .then(() => res.status(201).json(newNotification))
                    .catch(err => res.status(409).json({ message: err.message }));
            }
        })
        .catch(err => res.status(409).json({ message: err.message }));

}



