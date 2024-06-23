import React from 'react'

import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

interface ClientProps {
    alt: string,
    logo: string
}


const ClientsPage = ({CLIENTS}:any) => {
  return (
    <section className='relative'>
    <div className='overflow-hidden flex after:content[""] after:dark:from-brand-dark after:to-transparant 
    after:from-background after:bg-gradient-to-l after:right-0 after:bottom-0 after:top-0 after:w-20 before:absolute after:z-10 
    before:content[""] before:dark:from-brand-dark before:to-transparant before:from-background before:bg-gradient-to-r 
    before:left-0 before:bottom-0 before:top-0 before:w-20 before:z-10 after:absolute '>
        {[...Array(2)].map((arr)=>
        <div key={arr} className='flex flex-nowrap animate-slide '>
            {CLIENTS.map((client: { alt: React.Key | null | undefined; logo: string | StaticImport })=>
                <div key={client.alt} className='relative w-[200px] m-20 shrink-0 flex items-center'>
                    <Image src={client.logo} alt={client.alt} width={200} height={200} className='object-contain max-w-none'/>
                </div>
            )}
        </div>)}
    </div>
</section>
  )
}

export default ClientsPage