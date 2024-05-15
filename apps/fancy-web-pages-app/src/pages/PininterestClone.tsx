import React,{useState} from 'react'
import { FaBell } from "react-icons/fa";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { FaPinterest } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";


export default function PininterestClone() {

    var animes = [
        {
            "name" : "One Piece",
            "image": "https://m.media-amazon.com/images/M/MV5BM2YwYTkwNjItNGQzNy00MWE1LWE1M2ItOTMzOGI1OWQyYjA0XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg",
        },
        {
            "name" : "Naruto",
            "image": "https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg",
        },
        {
            "name" : "Attack on Titan",
            "image": "https://img.etimg.com/thumb/width-1600,height-900,imgsize-2996858,resizemode-75,msid-106601149/news/international/us/attack-on-titan-english-dub-series-finale-release-date-and-streaming-details-unveiled.jpg",
        },
        {
            "name" : "One Punch",
            "image": "https://m.media-amazon.com/images/M/MV5BZjJlNzE5YzEtYzQwYS00NTBjLTk5YzAtYzUwOWQyM2E3OGI2XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg",
        },
        {
            "name" : "One Piece",
            "image": "https://m.media-amazon.com/images/M/MV5BM2YwYTkwNjItNGQzNy00MWE1LWE1M2ItOTMzOGI1OWQyYjA0XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg",
        },
        {
            "name" : "Naruto",
            "image": "https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg",
        },
        {
            "name" : "Attack on Titan",
            "image": "https://img.etimg.com/thumb/width-1600,height-900,imgsize-2996858,resizemode-75,msid-106601149/news/international/us/attack-on-titan-english-dub-series-finale-release-date-and-streaming-details-unveiled.jpg",
        },
        {
            "name" : "One Punch",
            "image": "https://m.media-amazon.com/images/M/MV5BZjJlNzE5YzEtYzQwYS00NTBjLTk5YzAtYzUwOWQyM2E3OGI2XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg",
        },
        {
            "name" : "One Piece",
            "image": "https://m.media-amazon.com/images/M/MV5BM2YwYTkwNjItNGQzNy00MWE1LWE1M2ItOTMzOGI1OWQyYjA0XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg",
        },
        {
            "name" : "Naruto",
            "image": "https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg",
        },
        {
            "name" : "Attack on Titan",
            "image": "https://img.etimg.com/thumb/width-1600,height-900,imgsize-2996858,resizemode-75,msid-106601149/news/international/us/attack-on-titan-english-dub-series-finale-release-date-and-streaming-details-unveiled.jpg",
        },
        {
            "name" : "One Punch",
            "image": "https://m.media-amazon.com/images/M/MV5BZjJlNzE5YzEtYzQwYS00NTBjLTk5YzAtYzUwOWQyM2E3OGI2XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg",
        }
    ];
    const [searchSelected, setSearchSelected] = useState(false)
    const [searchText, setSearchText] = useState('')

  return (
    <div className=' '>
        <div id="navigation " className='sticky top-0 font-["Gilroy"] flex items-center justify-between px-10 py-6 z-10  bg-white'>
            <div className='flex justify-between items-center gap-4'>
                <FaPinterest className='text-4xl'/>
                <div className='text-lg'>Home</div>
                <div className='text-lg'>Explore</div>
                <div className='text-lg flex gap-2 items-center'>Create <FaAngleDown className='text-2xl'/></div>
            </div>
            <div className='flex  w-full relative '>

                <div className='flex grow-1 w-full mx-10 rounded-3xl pl-4 items-center bg-gray-200 border-2 '>
                    <input onFocus={()=> setSearchSelected(true)} onBlur={()=>setSearchSelected(false)} onChange={(e)=>setSearchText(e.target.value)} type="text" placeholder='Search Pizza, 3d Designs or what not...' 
                    className='w-full h-10  bg-gray-200  border-none focus:border-none focus:outline-none'/>
                    <div className='border-l-2 border-gray-300 rounded-3xl flex items-center justify-center 
                    font-bold pl-4 pr-2 hover:bg-gray-300 cursor-pointer py-4'>
                        <div className='whitespace-nowrap font-semibold'>All Pins</div>
                        <FaAngleDown className='text-xl'/> 
                        </div>
                </div>
                <div className={`w-full bg-white text-left pl-20 mx-10 my-4 absolute top-full left-1/2 -translate-x-1/2 rounded-md py-3 ${searchSelected ?'':'hidden'}`}>
                        
                        {animes.filter((anime)=>anime.name.toLowerCase().startsWith(searchText)).slice(0,10).map((anime,index)=>{
                            return(
                                <div className='flex gap-4 text-2xl'>
                                    <FaSearch/>
                                    {anime.name}
                                </div>
                            )
                        })}
                </div>
            </div>
            <div className='flex justify-between items-center gap-4'>
                <FaBell className='text-4xl'/>
                <BiSolidMessageSquareDetail className='text-4xl'/>
                <img src='./avatar2.jpg' alt='avatar' className='rounded-full w-10 h-10'/>
                <FaAngleDown className='text-2xl'/>
            </div>
        </div>
        <div id="posts" className={`w-full`}>
            <div className={`overlay fixed w-full h-screen bg-black/80 ${searchSelected ? 'block':'hidden'}`}></div>
            <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 mx-32'>
                {animes.map((anime,index)=>{
                    return(
                        <div key={index} className=' rounded-2xl overflow-hidden hover:opacity-90 cursor-pointer'>
                            <img src={anime.image} alt={anime.name} className=''/>
                        </div>
                    )
                })}
            </div>
            
        </div>
    </div>
  )
}
