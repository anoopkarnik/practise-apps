import React from 'react'
import Quote from '../components/Quote.tsx'
import Auth from '../components/Auth.tsx'

export default function Signup() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
            <Auth type="signup"/>
        </div>
        <div className='invisible lg:visible'>
            <Quote/>
        </div>

    </div>
  )
}
