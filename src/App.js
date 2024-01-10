import './App.css';

function App() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="mx-auto my-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-12 lg:max-w-7xl lg:grid-cols-2 lg:px-8 h-full">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Hello world!</h2>
                    <p className="mt-4 text-gray-500">
                        Dictum. Integer lectus mattis nisi leo, cursus malesuada dictum. Amet venenatis pulvinar sed consectetur et risus
                        libero, vitae non vestibulum faucibus. Mattis amet lacinia amet vel molestie dictumst.
                    </p>
                </div>
                <div>
                    <img
                        src="https://images.unsplash.com/photo-1702560030602-1b780380b892?q=80&w=2999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Card"
                        className="rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
