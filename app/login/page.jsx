'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../../lib/supabaseClient'
export default function Login(){
 const r=useRouter(); const[email,setE]=useState(''); const[p,setP]=useState('');
 const go=async(e)=>{e.preventDefault();await supabase.auth.signInWithPassword({email,password:p});r.push('/dashboard')}
 return(<div><form onSubmit={go}><input placeholder='email' value={email} onChange={e=>setE(e.target.value)} /><input placeholder='password' type='password' value={p} onChange={e=>setP(e.target.value)} /><button>Login</button></form></div>)
}
