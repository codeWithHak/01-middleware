'use client'
import React, { FormEvent, useState } from 'react'
import { ReactFormState } from 'react-dom/client'

function page() {

    

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')

    const data =[
        {
            name:name,
            email:email,
            pass:pass,
        }
    ]

    const handleSubmit=(e:FormEvent)=>{
        e.preventDefault()


    }

  return (
    <div>
        <form action="" className='flex flex-col items-center gap-3 mt-8'>
            <input type="text" placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="email" placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder='Enter password...' value={pass} onChange={(e)=>setPass(e.target.value)}/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default page