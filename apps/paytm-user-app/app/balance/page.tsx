import {useBalance} from '@repo/recoil-store/useBalance'

import React from 'react'

export default function page() {
    const balance = useBalance()
  return (
    <div className='text-white text-4xl'>Current {balance}</div>
  )
}
