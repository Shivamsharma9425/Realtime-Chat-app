import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced";

const ChatsPage = (props) => {
    const chatprops = useMultiChatLogic(
        '4b667f6d-9812-43f2-b19e-cd7c0595f7d6',
        props.user.username,
        props.user.secret
);

  return (
    <div style={{ height: "100vh" }}>
     <MultiChatSocket {...chatprops} />
     <MultiChatWindow {...chatprops} style={{height: '100%'}}/>
    </div>
  );
};

export default ChatsPage;