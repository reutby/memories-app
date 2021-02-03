import React from 'react'

import { Typography } from '@material-ui/core';
const Notification = ({ notification }) => {
    return (
        (<Typography><strong>{notification.userName}</strong> {(notification.notificationType === 'like') ?
            `Likes your ${notification.isPost ? 'Post' : 'Comment'}`
            : `Comment on your ${notification.isPost ? 'Post' : 'Comment'}`}</Typography>)
    )
}

export default Notification;
