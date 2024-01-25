
const Form = () => {
    return (
        <form className="bg-gray-200/10 p-8 rounded-xl">
            <div className="flex flex-col space-y-3 mt-2">
                <label htmlFor="email">Email</label>
                <input
                    className="p-2 px-4 rounded-lg"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="someone@gmail.com"
                    defaultValue="someone@gmail.com"
                />
            </div>
            <div className="flex flex-col space-y-3 mt-2">
                <label htmlFor="password">Password</label>
                <input
                    className="p-2 px-4 rounded-lg"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="password"
                    defaultValue="Pa$$w0rd!"

                />
            </div>
            <button type="submit" className="w-full bg-sky-500 text-gray-200 py-2 mt-4 rounded-lg">Login</button>
        </form>
    )
}

export default Form