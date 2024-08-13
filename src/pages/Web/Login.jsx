// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Button } from "@/components/ui/button";
// import { Link } from 'react-router-dom';
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import toast, { Toaster } from 'react-hot-toast';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Replace this with your actual authentication logic
//     if (username === 'admin' && password === 'admin') {
//       toast.success('Admin login successful!');
//       navigate('/admin/dashboard');
//     } else if (username === 'user' && password === 'user') {
//       toast.success('User login successful!');
//       navigate('/user/dashboard');
//     } else {
//       toast.error('Invalid credentials');
//     }
//   };

//   return (
//     <div className="h-full w-full flex justify-center items-center">
//       <Toaster position="bottom-right"/>
//       <Card className="w-[350px]">
//         <CardHeader>
//           <CardTitle>Login</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleLogin}>
//             <div className="grid w-full items-center gap-4">
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor="username">Username</Label>
//                 <Input 
//                   id="username" 
//                   placeholder="Enter username" 
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor="password">Password</Label>
//                 <Input 
//                   id="password" 
//                   placeholder="Enter password" 
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />
//               </div>
//             </div>
//             <CardFooter className="flex justify-between mt-4">
//               <Button type="submit">Login</Button>
//             </CardFooter>
//             <p>Don't have an account? 
//               <Link to='/register'> Register</Link>
//             </p>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default Login;
// import { useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import toast, { Toaster } from 'react-hot-toast';
// import { authService } from '@/services/auth';
// import { SignIn } from '@/services/api';
// const Login = () => {
//   const navigate = useNavigate()

//   const checkRedirect = async () => {
//     if (authService.getToken() !== null && authService.isLoggedIn()) {
//       const userRole = authService.getUserRole();
//       if (userRole !== null) {
//         if (userRole === "Admin") {
//           navigate('/admin/dashboard');
//         } else if (userRole === "User") {
//           navigate('/admin/dashboard');
//         } else {
//           toast.error("Something went wrong");
//         }
//       }
//     }
//   };

//   useEffect(() => {
//     checkRedirect();
//   }, []);

//   const emailRef = useRef(null)
//   const passwordRef = useRef(null)
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     const res = await SignIn(emailRef.current.value, passwordRef.current.value)
//     // const res = await authService.SignIn(emailRef.current.value, passwordRef.current.value)
//     if (res.status === 200) {
//       console.log(res.data)
//       authService.setToken(res.data.accessToken )
//       toast.success("Welcome")
//       console.log(res.data.accessToken)
//       console.log(authService.getToken())

//       setTimeout(() => {
//         checkRedirect();
//       }, 3000)

//     }
//   };
//   return (
//     <>
//       <div style={{ backgroundImage: 'https://plus.unsplash.com/premium_photo-1661342434748-e8d1486582f9?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}>
//         <div className='p-0 m-0 h-[90vh] w-screen flex justify-center items-center flex-col' >
//           <form className='flex flex-col gap-5 bg-slate-50/80 h-3/6 w-[30%] items-center justify-center rounded-md shadow-md shadow-gray-900' onSubmit={handleLogin}>
//             <input type="email" ref={emailRef} placeholder='Email' className='bg-gray-400 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-red-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' required />
//             <input type="password" ref={passwordRef} placeholder='Password' className='bg-gray-400 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-red-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' required />
//             <button type="submit" className='w-[80%] bg-gradient-to-tr from-red-600 to-red-300 text-white p-2 rounded-sm font-bold mt-4 shadow-sm shadow-red-500/40'>Login</button>
//             <p>Dont have an account ? <span className='text-red-500 cursor-pointer font-bold' onClick={() => navigate('/register')}> Register ! </span></p>
//           </form>
//         </div>
//         <Toaster />
//       </div>
//     </>
//   )
// }

// export default Login

import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
  const navigate = useNavigate();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // Hardcoded admin credentials
  const adminCredentials = {
    email: 'admin@example.com',
    password: 'admin123'
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // Check if the credentials match the hardcoded admin credentials
    if (email === adminCredentials.email && password === adminCredentials.password) {
      // Admin login
      toast.success("Welcome Admin");
      navigate('/admin/dashboard');
    } else {
      // User login (any credentials)
      toast.success("Welcome User");
      navigate('/user/dashboard');
    }
  };

  useEffect(() => {
    // Optionally, check if the user is already logged in and redirect
    const checkRedirect = () => {
      const token = localStorage.getItem('authToken'); // Assuming a token is stored
      if (token) {
        const userRole = localStorage.getItem('userRole'); // Assuming userRole is stored
        if (userRole === "Admin") {
          navigate('/admin/dashboard');
        } else if (userRole === "User") {
          navigate('/user/dashboard');
        }
      }
    };
    checkRedirect();
  }, [navigate]);

  return (
    <>
      <div style={{ backgroundImage: 'https://plus.unsplash.com/premium_photo-1661342434748-e8d1486582f9?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}>
        <div className='p-0 m-0 h-[90vh] w-screen flex justify-center items-center flex-col'>
          <form className='flex flex-col gap-5 bg-slate-50/80 h-3/6 w-[30%] items-center justify-center rounded-md shadow-md shadow-gray-900' onSubmit={handleLogin}>
            <input type="email" ref={emailRef} placeholder='Email' className='bg-gray-400 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-red-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' required />
            <input type="password" ref={passwordRef} placeholder='Password' className='bg-gray-400 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-red-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' required />
            <button type="submit" className='w-[80%] bg-gradient-to-tr from-blue-600 to-red-300 text-white p-2 rounded-sm font-bold mt-4 shadow-sm shadow-blue-500/40'>Login</button>
            <p>Dont have an account? <span className='text-blue-500 cursor-pointer font-bold' onClick={() => navigate('/register')}>Register!</span></p>
          </form>
        </div>
        <Toaster />
      </div>
    </>
  );
};

export default Login;
