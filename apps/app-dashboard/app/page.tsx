import React from 'react'
import { redirect } from 'next/navigation';


async function page() {

  if (true){
    redirect('/dashboard')
  }
}

export default page