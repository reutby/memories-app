import React, { useState } from 'react';
import { SendOutlined, PictureOutlined} from '@ant-design/icons';
import { sendMessage, isTyping } from 'react-chat-engine';
import { Button, Input, InputLabel } from "@material-ui/core";
import useStyles from "./styles/message-form";
const MessageForm = (props) => {
  const [value, setValue] = useState('');
  const { chatId, creds } = props;
  const classes = useStyles();
  const handleChange = (event) => {
    setValue(event.target.value);

    isTyping(props, chatId);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const text = value.trim();

    if (text.length > 0) {
      sendMessage(creds, chatId, { text });
    }

    setValue('');
  };

  const handleUpload = (event) => {
    sendMessage(creds, chatId, { files: event.target.files, text: '' });
  };

  return (
    <form className={classes.messageForm} onSubmit={handleSubmit}>
      <Input
        className={classes.messageInput}
        placeholder="Send a message..."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <div className={classes.buttonsDiv}>
        <InputLabel className={classes.imageButtonContainer} htmlFor="upload-button">
          <span className={classes.imageButton}>
            <PictureOutlined className={classes.pictureIcon} />
          </span>
        </InputLabel>
        <Input
        placeholder="Choose avatar"
          type="file"
          multiple={false}
          id="upload-button"
          style={{ display: 'none' }}
          onChange={handleUpload}
        />
        <Button type="submit" className={classes.sendButton}>
          <SendOutlined className={classes.sendIcon} disabled={!value.length} style={{ transform: value.length ? 'rotate(0deg)' : null }} />
        </Button>

      </div>
    </form>
  );
};

export default MessageForm;
