import React from 'react'
import Auth from '../components/Auth.tsx'
import Quote from '../components/Quote.tsx'

export default function Signin() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
    <div>
        <Auth type="signin"/>
    </div>
    <div className='invisible lg:visible'>
        <Quote/>
    </div>

</div>
  )
}
