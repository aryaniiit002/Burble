import React from 'react';
import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

const projectID = process.env.REACT_APP_PROJECT_ID;
console.log(projectID);

export const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID={projectID}
            userName='Aryan'
            userSecret='burblechat'
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            // onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
        // renderChatFeed - to render our own component for the entire chat feed
    )
}

export default App;