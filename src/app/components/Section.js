

export default function Section() {
    return (
        <div className="flex justify-center">
            <form>
                {/* form body */}
                {/* address */}
                <div className="justify-center mt-10 grid grid-cols-1 w-96">
                    <label for="username" className="block text-sm font-medium">Recievers Address</label>
                    <div className="mt-3">
                        <input type="text" name="address" id="address" className="block flex-1 border rounded-full w-96 bg-transparent py-1.5 pl-3  placeholder:text-gray-400 hover:border-2 hover:border-green-500 active:border-2 focus:border-2 focus:border-green-500 focus:outline-none" placeholder="0x8de6637bdh6............" />
                    </div>
                </div>
                {/* token */}
                <div className=" justify-center mt-5 grid grid-cols-1 w-96 mb-10">
                    <label for="username" className="block text-sm font-medium">Token Amount</label>
                    <div className="mt-3">
                        <input type="text" name="tokenAmount" id="tokenAmount" className="block flex-1 border rounded-full w-96 bg-transparent py-1.5 pl-3  placeholder:text-gray-400 hover:border-2 hover:border-green-500 active:border-2 focus:border-2 focus:border-green-500 focus:outline-none" placeholder="100000" />
                    </div>
                </div>
                {/* send button */}
                <div className="mt-5 grid grid-cols-1 w-96 mb-10 ">
                    <div className="flex justify-center">
                        <button className="border border-solid rounded-full bg-transparent font-semibold border-green-500 w-24 p-1 hover:bg-green-500 hover:text-lg hover:font-bold focus:bg-green-500">Send</button>
                    </div>
                </div>
            </form>

        </div>

    )
}