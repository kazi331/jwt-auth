'use client'
const SendEmail = () => {
    const sendEmail = async (e: any) => {
        e.preventDefault()
        const firstName = e.target.firstName.value
        const lastName = e.target.lastName.value
        const email = e.target.email.value

        try {
            const response = await fetch('/api/email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ firstName, lastName, email })
            })
            const { data } = await response.json();
            console.log(data)
            // /* if (status === 'success') {
            //     alert('Email Sent')
            // } else {
            //     alert('Email Failed')
            // } */
        } catch (err: any) {
            console.error(err)
        }
    }
    return (
        <div>
            <h2>Send Email</h2>
            <form onSubmit={sendEmail} className="flex flex-col gap-3 p-4 max-w-lg mx-auto">
                <input className="p-2 px-4 " type="text" name="firstName" placeholder="First Name" />
                <input className="p-2 px-4 " type="text" name="lastName" placeholder="Last Name" />
                <input className="p-2 px-4 " type="text" name="email" placeholder="Email" />
                <input className="p-2 px-4 " type="submit" value="Send Email" />
            </form>
        </div>
    )
}

export default SendEmail