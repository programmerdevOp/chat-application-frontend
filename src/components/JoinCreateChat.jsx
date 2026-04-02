const JoinCreateChat = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="p-8 w-full flex flex-col gap-5 max-w-md rounded dark:bg-gray-800">
                <h1 className="text-2xl font-semibold text-center text-white shadow">Join Room / Create Room...</h1>
                {/* name div */}
                <div className="">

                    <label htmlFor="name"
                        className="block font-medium mb-2 text-white">
                        Your Name
                    </label>

                    <input type="text"
                        id="name"
                        className="w-full dark:bg-gray-600 px-4 py-2 border dark:border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* room id div */}
                <div className="">
                    <label htmlFor="name" 
                      className="block font-medium mb-2 text-white">
                        Room Id / New Room ID...
                    </label>

                    <input type="text" 
                       id="name"
                       className="w-full dark:bg-gray-600 px-4 py-2 border dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* buttons */}

                <div className="flex justify-center gap-2 mt-2">
                    <button className="px-3 py-2 dark:bg-blue-500 hover:dark:bg-blue-800 rounded-full text-amber-50">Join Room</button>  

                    <button className="px-3 py-2 dark:bg-orange-500 hover:dark:bg-orange-800 rounded-full text-amber-50">Create Room</button>  
                </div>
            </div>


        </div>
    )
}

export default JoinCreateChat;