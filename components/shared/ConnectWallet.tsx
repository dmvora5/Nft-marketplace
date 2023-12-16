/* eslint-disable @next/next/no-img-element */

const ConnectWallet = () => {
    return (
        <div className="min-h-screen flex max-md:flex-col">
            <div>
                <img
                    className="object-center h-screen max-md:w-full object-cover"
                    src="images/piano.svg"
                    alt="piano-iamge"
                />
            </div>
            <div className="flex-1 sm:relative max-sm:w-full p-5">
                <div className="sm:absolute top-24 sm:left-24 max-sm:mx-auto">
                    <div className="mb-24">
                        <h1 className="font-semibold text-3xl my-2">Connect wallet</h1>
                        <p>Connect with one of our available wallet providers or create a new one.</p>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <button className="px-5 py-4 border border-gray-400 w-full flex items-cent rounded-2xl">
                            <img className="block mx-1" src="images/metamask.svg" alt="metamask-icon" />
                            <span className="text-start block mx-1 flex-1">Metamask</span>
                            <img className="block my-auto" src="images/populer.svg" alt="populer" />
                        </button>
                        <button className="px-5 py-4 border border-gray-400 w-full flex items-cent rounded-2xl">
                            <img className="block mx-1" src="images/metamask.svg" alt="metamask-icon" />
                            <span className="text-start block mx-1 flex-1">Metamask</span>
                        </button>
                        <button className="px-5 py-4 border border-gray-400 w-full flex items-cent rounded-2xl">
                            <img className="block mx-1" src="images/metamask.svg" alt="metamask-icon" />
                            <span className="text-start block mx-1 flex-1">Metamask</span>
                        </button>
                        <button className="px-5 py-4 border border-gray-400 w-full flex items-cent rounded-2xl">
                            <img className="block mx-1" src="images/metamask.svg" alt="metamask-icon" />
                            <span className="text-start block mx-1 flex-1">Metamask</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConnectWallet