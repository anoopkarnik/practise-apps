import React from 'react'
import PageCard from './PageCard.tsx'


const Pages = [
    {
        'title': "Portfolio Landing Page 1",
        'description': "A simple landing page with a hero section and a card section",
        'link': "/landing1",
        'image': './portfolio1.png'
    },
    {
        'title': "Portfolio Landing Page 2",
        'description': "A simple landing page with a fancy navbar",
        'link': "/landing2",
        'image': './portfolio3.png'
    },
    {
        'title': "Landing Page 3",
        'description': "A simple landing page",
        'link': "/landing3",
        'image': './BasicLandingPage1.png'
    },

]
export default function Home() {
  return (
    <div>
        <div>
            <h1 className='text-3xl font-bold text-center m-10'>Practised Web Pages</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 m-10 '>
            {Pages.map((page) => (
                <PageCard key={page.title} title={page.title} description={page.description} link={page.link} image={page.image}/> 
            ))}
        </div>
    </div>
  )
}
