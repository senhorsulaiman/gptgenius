'use client'
import { useState } from "react"


const Chat = () => {

    const [text,SetText]=useState('')
    // const [message,SetMessage]=useState('');

    const handleClick=(e)=>{
        e.preventDefault();
        console.log(text)

    }
  return (
    <div className="min-h-[calc(100vh-6rem)] grid grid-rows[1fr,auto]">
        <div>
            <h2 className="text-5xl">messages</h2>
        </div>

            <form action=" "  onSubmit={handleClick} className="max-w-4xl pt-12">

                <div className="join w-full">
                    <input type="text" placeholder="Message GeniusGPT" value={text}
                     className="input input-bordered join-item w-full focus:outline-none " onChange={(e)=>SetText(e.target.value)}/>
                     <button type="submit" className="btn btn-primary  join-item" >Ask Questions</button>
                </div>
            </form>

    </div>
  )
}

export default Chat
