"use client"

import React, { FormEvent } from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
export default function Home()  {
  const[inputval,setInputval]=useState("")
const {push}=useRouter();
const handleSubmit=(event:FormEvent)=>{
event.preventDefault();

push(`/prediction/${inputval}`)
}

  return (
     <div style={{
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#f0f2f5',
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: '#fff',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '2.5em',
          color: '#333',
          marginBottom: '25px'
        }}>
          Enter your name
        </h1>
        <form onSubmit={handleSubmit} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          alignItems: 'center'
        }}>
          <input
            type="text"
            value={inputval}
            placeholder='type your name'
            onChange={(e) => setInputval(e.target.value)}
            style={{
              padding: '12px 15px',
              fontSize: '1.1em',
              borderRadius: '8px',
              border: '1px solid #ccc',
              width: '80%', 
              maxWidth: '300px', 
              boxSizing: 'border-box' 
            }}
          />
          <button
            type='submit'
            style={{
              padding: '12px 25px',
              fontSize: '1.1em',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: '#007bff',
              color: 'white',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              width: '80%', 
              maxWidth: '300px'
            }}
           
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
          >
            Predict Data
          </button>
        </form>
      </div>
    </div>
  )
}
