import React from 'react'

const ChatHeaders = ({chat})=> {
    
    return (
        <div className="chat-title-container">
        <div className="chat-title">{chat?.title}</div>
        <div className="chat-subtitle">
          {chat.people.map((person) => ` ${person.person.username}`)}
        </div>
      </div>
    )
}

export default ChatHeaders;
