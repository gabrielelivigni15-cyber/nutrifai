'use client'
import { useEffect,useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../../lib/supabaseClient'
export default function DashLayout({children}){
 const r=useRouter(); const[u,setU]=useState(null); const[p,setP]=useState(null)
 useEffect(()=>{(async()=>{
 const {data:{user}}=await supabase.auth.getUser(); if(!user)return r.push('/login');
 setU(user);
 const {data}=await supabase.from('profiles').select('*').eq('id',user.id).single(); setP(data);
 })()},[])
 if(!p)return <p>Loading...</p>
 return(<div>
   <aside>
    <a href='/dashboard'>Dashboard</a>
    {p.ruolo==='admin' && <>
      <a href='/dashboard/admin/utenti'>Utenti</a>
      <a href='/dashboard/admin/schede'>Schede</a>
      <a href='/dashboard/admin/alimentazione'>Alimentazione</a>
      <a href='/dashboard/admin/pagamenti'>Pagamenti</a>
    </>}
    {p.ruolo==='user' && <>
      <a href='/dashboard/user/allenamenti'>Allenamenti</a>
      <a href='/dashboard/user/alimentazione'>Piano</a>
      <a href='/dashboard/user/progressi'>Progressi</a>
      <a href='/dashboard/user/pagamenti'>Pagamenti</a>
    </>}
   </aside>
   <main>{children}</main>
 </div>)
}
