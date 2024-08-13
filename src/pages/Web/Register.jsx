// import { Button } from "@/components/ui/button"
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"


// const Register = () => {
//   return (
//       <div className="h-full w-full flex justify-center items-center">

// <Card className="w-[350px]">
// <CardHeader>
//  <CardTitle>Register</CardTitle>
// </CardHeader>
// <CardContent>
//  <form>
//    <div className="grid w-full items-center gap-4">
//      <div className="flex flex-col space-y-1.5">
//        <Label htmlFor="name">Name</Label>
//        <Input id="name" placeholder="Enter name" required/>
//      </div>
//      <div className="flex flex-col space-y-1.5">
//        <Label htmlFor="framework">Email</Label>
//        <Input id="email" placeholder="Enter email" required />

//      </div>
//      <div className="flex flex-col space-y-1.5">
//        <Label htmlFor="password">Password</Label>
//        <Input id="password" placeholder="Enter password"/>
//      </div>
//      <div className="flex flex-col space-y-1.5">
//        <Label htmlFor="password">Confirm Password</Label>
//        <Input id="password" placeholder="Enter password" />
//      </div>

//    </div>
//  </form>
// </CardContent>
// <CardFooter className="flex justify-between">
//  <Button>Register</Button>
// </CardFooter>
// </Card>
//     </div>
//   )
// }

// export default Register

import  { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SignUp } from '../../services/api'
import { toast, Toaster } from 'react-hot-toast'
const Register = () => {

    const navigate = useNavigate()
    const [registerdata, setRegisterdata] = useState({
        name: '',
        phone: '',
        address: '',
        email: '',
        password: ''
    })
    const handleChange = (e) => {
        setRegisterdata({ ...registerdata, [e.target.id]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(registerdata);
        const res = await SignUp(registerdata.name, registerdata.email, registerdata.phone, registerdata.address, registerdata.password);

        if (res.data==="User registered successfully.") {

            toast.success("Signup Success")
            setTimeout(() => {
                navigate('/login')
            }, 5000)
        }
        else {
            toast.error(res.data)
            // console.log(res.data)
        }

    }
    return (
        <>
            <div className='p-0 m-0 h-[90vh] w-screen flex justify-center items-center flex-col'>
                <form className='flex flex-col gap-5 bg-slate-50/80 h-4/6 w-[30%] items-center justify-center rounded-md shadow-md shadow-red-100' onSubmit={handleSubmit}>
                    <input type="text" name="" id="name" placeholder='Name' className='bg-red-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-red-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' onChange={handleChange} required />
                    <input type="text" name="" id="phone" placeholder='Phone' className='bg-red-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-red-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' onChange={handleChange} required />
                    <input type="text" name="" id="address" placeholder='Address' className='bg-red-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-red-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' onChange={handleChange} required />
                    <input type="email" name="" id="email" placeholder='Email' className='bg-red-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-red-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' onChange={handleChange} required />
                    <input type="password" name="" id="password" placeholder='Password' className='bg-red-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-red-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' onChange={handleChange} required />
                    <button type="submit" className='w-[80%] bg-gradient-to-tr from-blue-600 to-blue-300 text-white p-2 rounded-sm font-bold mt-4 shadow-md shadow-blue-500/40'>Register</button>
                    <p>Already have an account ? <span className='text-blue-500 cursor-pointer font-bold' onClick={() => navigate('/login')}> Login ! </span></p>
                </form>
            </div>
            <Toaster />
        </>
    )
}

export default Register



