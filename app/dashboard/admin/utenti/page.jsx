'use client'
import { useEffect,useState } from 'react'
import { supabase } from '../../../../lib/supabaseClient'
export default function Utenti(){
 const[d,setD]=useState([])
 useEffect(()=>{(async()=>{
 const {data}=await supabase.from('profiles').select('*')
 setD(data||[])
 })()},[])
 return(<div><h1>Utenti</h1>{d.map(u=><div key={u.id}>{u.nome} {u.cognome}</div>)}</div>)
}
