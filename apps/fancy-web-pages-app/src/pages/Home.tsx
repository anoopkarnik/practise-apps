import React from 'react'
import PageCard from './PageCard.tsx'


const Pages = [
    {
        'title': "Portfolio Page 1",
        'description': "A simple portfolio page with a hero section and a card section",
        'link': "/landing1",
        'image': './portfolio1.png'
    },
    {
        'title': "PortfolioPage 2",
        'description': "A simple portfolio page with a fancy navbar",
        'link': "/landing2",
        'image': './portfolio3.png'
    },
    {
        'title': "Landing Page 1",
        'description': "A simple landing page",
        'link': "/landing3",
        'image': './BasicLandingPage1.png'
    },
    {
        'title': "Animated Navbar",
        'description': "An animated Nav bar",
        'link': "/animatednavbar",
        'image': './navbar.gif'
    },
    {
        'title': "Cart",
        'description': "Cart Clone of a popular e-commerce site",
        'link': "/cart",
        'image': './cart.gif'
    },
    {
        'title': "Music Player",
        'description': "Music Player with a playlist",
        'link': "/musicplayer",
        'image': './music.gif'
    },
    {
        'title': "Pinterest Clone",
        'description': "A clone page of Pinterest",
        'link': "/pinterest",
        'image': './pinterest.gif'
    },
    {
        'title': "Position of Elements Page",
        'description': "Position of elements on a page",
        'link': "/position",
        'image': './position.gif'
    },
    {
        'title': "Staff Profile Page",
        'description': "A page with staff profiles",
        'link': "/staffprofiles",
        'image': './profile.gif'
    },
    // {
    //     'title': "Animated Landing Page",
    //     'description': "A page with lot of animations for a company landing page",
    //     'link': "/animatedlanding",
    //     'image': './profile.gif'
    // }

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
