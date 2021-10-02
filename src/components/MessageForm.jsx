import { useState } from 'react';
import { SendOutlined, CloudUploadOutlined } from '@ant-design/icons';
import { sendMessage, isTyping } from 'react-chat-engine';


const MessageForm = (props) => {
    const [value, setValue] = useState('');
    const { chatId, creds } = props;

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

    const handleLogout = () => {
        window.localStorage.clear();
        window.location.reload();
    }

    return (
        <div>
            <div className="logout-button">
                <button className="logout" onClick={handleLogout}>Logout</button>
            </div>
            <form className="message-form" onSubmit={handleSubmit}>
                <input
                    className="message-input"
                    placeholder="Send a message..."
                    value={value}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                />
                <label htmlFor="upload-button">
                    <span className="image-button">
                        <CloudUploadOutlined className="picture-icon" />
                    </span>
                </label>
                <input
                    type="file"
                    multiple={false}
                    id="upload-button"
                    style={{ display: 'none' }}
                    onChange={handleUpload.bind(this)}
                />
                <button type="submit" className="send-button">
                    <SendOutlined className="send-icon" />
                </button>
            </form>
        </div>

    );
};

export default MessageForm;
