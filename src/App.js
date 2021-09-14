import {ChatEngine, ChatFeed} from "react-chat-engine";

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = ()=> {
    return (
        <ChatEngine
            height="100vh"
            projectID="4fedb5ec-be9b-4d42-bb87-585d9fccff50"
            userName="Denis"
            userSecret="pwnz1010"
            renderChatFeed = {(chatAppProps) =>
            <ChatFeed {...chatAppProps} />
            }

        />

    )
}

export default App;