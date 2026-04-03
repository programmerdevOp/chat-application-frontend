import { MdSend } from "react-icons/md";


const ChatPage = () => {
    return (
        <div className="h-screen bg-black text-white">
            {/* Header Portion */}
            <header className="dark:border-gray-700 shadow border py-5 flex justify-around items-center dark:bg-gray-900 fixed w-full h-20">
                {/* room name container */}
                <div>
                    <h1 className="text-xl font-semibold"> 
                        Room: <span>Family Room</span>
                    </h1>
                </div>

                {/* username container */}
                <div>
                    <h1 className="text-xl font-semibold">
                        User: <span>Sumit Pal</span>
                    </h1>
                </div>

                {/* leave room button */}
                <div>
                    <button className="dark:bg-red-500 dark:hover:bg-red-700 px-3 py-1  rounded-full text-white">Leave Room</button>
                </div>
            </header>

            {/* input message container */}
            <div className="fixed bottom-2 w-full h-16" >
                <div className="h-full rounded border w-2/3 mx-auto dark:bg-gray-700">
                    <input type="text" placeholder="Type your message Here" className="dark:border-gray-700    rounded px-3 py-2 dark:bg-gray-900 h-full"></input>

                    <button className="dark:bg-green-600 h-10 w-10 flex justify-center items-center px-3 py-2 rounded-full">
                        <MdSend/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ChatPage;