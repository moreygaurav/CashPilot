import React, { useState } from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Inputs/Input';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  // Handle Login Form Submission
  const handleLogin = async (e) => {
    e.preventDefault();
  }
  return (
    <AuthLayout>
      <div className='lg:w-[70%] h3/4 md:h-full flex flex-col justify-center'>
        <h3 className='text-xl font-semibold text-black'>Welcome Back!</h3>
        <p className='text-xs text-slate-700 mt-[5px] mb-6'>Please enter your detials to log in!</p>

        <form onSubmit={handleLogin}>
          <Input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            lable="Email Address"
            placeholder="gaurav@example.com"
            type="text"
          />

        </form>

      </div>
    </AuthLayout>
  )
}

export default Login
