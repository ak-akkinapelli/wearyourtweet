// src/Login.js
import { useState } from 'react';
import { supabase } from '../Utils/supabase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!email || !password) return;
    try {
      const {data, error} = await supabase.auth.signInWithPassword({
        email: email,
        password: password});
        console.log(data, error);
        if(error){
          if(error.message === "Invalid login credentials"){
            alert("Invalid login credentials")
          }
        }
    } catch (error) {
      console.log('Error: ', error)
    }
    // try {
    //   const { data, error } = await supabase.auth.signUp({
    //     email: email,
    //     password: password,
    //     options: {
    //       data: { name: 'John Doe' }
    //     }
    //   });
    //   console.log(data, error);
    // } catch (error) {
    //   console.log('Error: ', error)
    // }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type='email'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type='submit'>Login</button>
    </form>
  );
};

export default Login;
