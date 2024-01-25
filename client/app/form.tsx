'use client'

import axios from "@/lib/axios";




const Form = () => {
    const login = async (e: any) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        try {
            /*  const res = await fetch('http://localhost:5000/login', {
                 method: 'POST',
                 headers: { 'Content-Type': 'application/json' },
                 body: JSON.stringify({ email, password })
             }) */
            const res = await axios.post(`/login`, { email, password })
            console.log(res.data)



        } catch (err: any) {
            console.log(err.message)
        }
    }
    return (
        <form onSubmit={login} className="bg-gray-900/80 backdrop-blur p-8 rounded-xl mx-auto w-full md:max-w-lg m-1">
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