'use client';
import { useMutation } from '@tanstack/react-query';
import { generateChatResponse } from '../../utils/action'
import { useState } from "react"
import { FaRobot } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import toast from 'react-hot-toast';
// import { useMutation } from "@tanstack/react-query";

const Chat = () => {
    const [text, SetText] = useState('');
    const [messages, SetMessages] = useState([]);

    const { mutate } = useMutation({
        mutationFn: (query) => generateChatResponse (...messages, query),
        onSuccess: (data) => {
            if (!data) {
                toast.error('something went wrong')
                return
            }
            SetMessages((prev) => [...prev, data]);
        }

    })
    // const {mutate}=useMutation({
    //     mutationFn:(message)=>generateChatResponse(message),

    // });
    const handleClick = (e) => {
        e.preventDefault();
        const query = { role: 'user', content: text }
        mutate(query)
        SetMessages((prev) => [...prev, query]);
        SetText('')
    };
    console.log(messages)
    return (
        <div className="min-h-[calc(100vh-6rem)] grid grid-rows[1fr,auto] w-full">
            <div className=''>
                {/* <h2 className="text-5xl">messages</h2> */}

                {messages.map(({ role, content }, index) => {

                    const avatar = role == 'user' ? <RxAvatar className='w-8 h-8 ' /> : <FaRobot className='w-8 h-8' />
                    const bct = role == 'user' ? 'bg-base-200' : 'bg-base-200'

                    return (

                        <div key={index} className={`${bct} flex py-6 -mx-8 px-8 text-xl leading-loose border-b border-base-300 items-center`}>

                            <span className='mr-4'>{avatar}</span>

                            <p className='max-w-3xl'>{content}</p>
                        </div>
                    )
                })}
                {/* {IsPending? <span className='loading-spinner'></span>:null} */}
            </div>
            <form action=" " onSubmit={handleClick} className="max-w-4xl pt-12">

                <div className="join w-full">
                    <input type="text" placeholder="Message GeniusGPT" value={text}
                        className="input input-bordered join-item w-full focus:outline-none " onChange={(e) => SetText(e.target.value)} />
                    <button type="submit" className="btn btn-primary  join-item" >Ask Questions</button>
                </div>
            </form>
        </div>
    )
}

export default Chat
