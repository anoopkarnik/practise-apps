
import { useContext, useEffect } from 'react';
import { SocketContext } from '../contexts/SocketContext.jsx';
import { SelectedUserContext } from '../contexts/selectedUserContext.jsx';
import notificationSound from '/notification.mp3';

const useListenMessages = () => {
    const { socket } = useContext(SocketContext) || {};
    const {conversations,setConversations}= useContext(SelectedUserContext) || {};

    useEffect(() =>{
        socket?.on('newMessage',(newMessage:any)=>{
            const sound = new Audio(notificationSound);
            sound.play();
            setConversations([...conversations,newMessage]);
        });
        return () => socket?.off('newMessage');
    }, [socket,conversations,setConversations]);

}

export default useListenMessages;