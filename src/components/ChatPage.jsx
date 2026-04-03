

const ChatPage = () => {
    return (
        <div className="h-screen bg-black text-white">
            <header className="dark:border-gray-700 shadow border py-5 flex justify-around items-center">
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
        </div>
    )
}

export default ChatPage;