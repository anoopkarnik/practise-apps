import React,{useContext,useEffect,useRef,useState} from 'react'
import { IoIosSend} from "react-icons/io";
import { SelectedUserContext } from '../../contexts/selectedUserContext.jsx';
import {useSendMessage} from '../../hooks/useSendMessage.jsx';
import Conversation from './Conversation.jsx';
import useListenMessages from '../../hooks/useListenMessages.jsx';

const Conversations = () => {

    const {selectedUser,conversations}= useContext(SelectedUserContext) || {}
    const [message,setMessage] = useState('')
    useListenMessages();
    const lastMessageRef = useRef<HTMLDivElement | null>(null);

    const { sendMessage } = useSendMessage();

    const onSendMessage = async () => {
        if (message === '') return;
        await sendMessage({ message });
        setMessage('');
    };

    useEffect(() => {
        setTimeout(() => {
            lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }, [conversations]);

  return (
    
    <div className='flex flex-col justify-between items-center w-full h-full md:min-w-[450px]'>
        <div className='w-full p-4 bg-gray-400 flex'>
            <p>To:</p>
            <p className='font-black mx-2'>{selectedUser.name}</p>
        </div>
        <div className='flex flex-col  w-full h-full overflow-auto'>
            {conversations.map((conversation:any,index:any)=>(
                <div ref={lastMessageRef}>
                    <Conversation key={index} conversation={conversation}/>
                </div>
            ))}
        </div>
        <div className='bg-gray-700 w-[90%] m-4 p-4  flex justify-between items-center overflow-hidden border-black border-2 rounded-xl'>
            <input onChange={e=>setMessage(e.target.value)} className='text-white bg-gray-700 w-full' placeholder='Send a message' 
            value={message}/>
            <IoIosSend onClick={onSendMessage} className='text-3xl text-white'/>
        </div>
    </div>
  )
}

export default Conversations;