'use client'
import React, { useState } from 'react'
import LandingHeader from '@repo/ui/notion/LandingPage/LandingHeader'
import HookPage from '@repo/ui/notion/LandingPage/HookPage'
import Image from 'next/image'
import ClientsPage from '@repo/ui/notion/LandingPage/ClientsPage'
import { CLIENTS } from '../../lib/constants'

const page = () => {
  const [path,setPath] = useState('#products')
  const banner = '/appBanner.png'
  return (
    <div className='w-full min-h-screen '>
        <LandingHeader path={path} setPath={setPath}/>
        <HookPage Banner={banner} />
        <ClientsPage CLIENTS={CLIENTS}/>
    </div>
  )
}

export default page