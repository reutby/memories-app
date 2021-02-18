import React from 'react'
import { MyMessage, TheirMessage, MessageForm } from ".."
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {IconButton,Typography, Container} from '@material-ui/core';
import useStyles from "./styles/chat-feed";

const ChatFeed = (props) => {
    const { chats, typingCounter, activeChat, userName, messages, onExit } = props;
    const chat = chats && chats[activeChat];
    
    const classes = useStyles();
    const renderReadReceipts = (message, isMyMessage) => chat.people.map((person, index) => person.last_read === message.id && (
        <div
            key={`read_${index}`}
            className={classes.readReceipt}
            style={{
                float: isMyMessage ? 'right' : 'left',
                backgroundImage: person.person.avatar && `url(${person.person.avatar})`,
            }}
        />
    ));

    const renderIsTyping = () => {

        if (chat && activeChat && typingCounter[activeChat]) {
            //const activeChatString = `${activeChat}`;
            const activeChatCounter = typingCounter[activeChat];

            const keys = Object.keys(activeChatCounter);
            const activeTypingArray = keys.filter((key) => { return (typingCounter[activeChat][key] > 0) && key !== userName });
            if (!activeTypingArray.length) {
                return null;
            }
            return (activeTypingArray.length === 1) ? <Typography variant='body2' className={classes.isTypingMessage}>{`${activeTypingArray[0]} is typing...`}</Typography>
                : <p className={classes.isTypingMessage}>{`${activeTypingArray.join(', ')} are typing`}</p>
        }
        return null;


    }
    const renderMessages = () => {
        const keys = Object.keys(messages);

        return keys.map((key, index) => {
            const message = messages[key];
            const lastMessageKey = index === 0 ? null : keys[index - 1];
            const isMyMessage = userName === message.sender.username;

            return (
                <div key={`msg_${index}`} style={{ width: '100%' }}>
                    <div className={classes.messageBlock}>
                        {isMyMessage
                            ? <MyMessage message={message} />
                            : <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />}
                    </div>
                    <div className={classes.readReceipts} style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}>
                        {renderReadReceipts(message, isMyMessage)}
                    </div>

                </div>
            );
        });
    };

    if (!chat) return <div />;

    return (
        <Container className={classes.chatFeed}>
            <IconButton className={classes.exitButton} onClick={onExit}>
                <ExitToAppIcon  fontSize="large" />
            </IconButton>
            <div className={classes.chatTitleContainer}>
                <div className={classes.chatTitle}>{chat?.title}</div>
                <div className={classes.chatSubtitle}>
                    {chat.people.map((person) => ` ${person.person.username}`)}
                </div>
            </div>
            {renderMessages()}
            <div style={{ height: '100px' }} />
            <div className={classes.messageFormContainer}>
                {renderIsTyping()}
                <MessageForm {...props} chatId={activeChat} />
            </div>
        </Container>
    );
};

export default ChatFeed;