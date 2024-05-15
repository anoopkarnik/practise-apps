import React,{useState,useRef,useEffect} from 'react'
import { FaPlay,FaPause } from "react-icons/fa";
import { IoPlaySkipBackSharp, IoPlaySkipForwardSharp } from "react-icons/io5";

type songProps = {
    name: string,
    src: string,
    music: string

}

export default function MusicPlayerClone() {
    const songs:songProps[] = [
        {
            'name': 'Hello',
            'src': './adele.jpg',
            'music': './adele.mp3'
        },
        {
            'name': 'Kabhi Kabhi Aditi',
            'src': './jaane.jpg',
            'music': './kabhi.mp3'
        },
        {
            'name': 'Saari Duniya Jala Denge',
            'src': './animal.jpg',
            'music': './saari.mp3'
        }
    ]
    const [selected,setSelected] = useState(0)
    const [isPlaying,setIsPlaying] = useState(false)
    const audio = useRef(new Audio());

useEffect(() => {
    // Change the source of the audio element when the selected song changes
    if (audio.current) {
        var selectedSong:songProps = songs[selected];
        audio.current.src = selectedSong.music;
        if (isPlaying) {
            audio.current.play();
        }
    }
}, [selected]);

    const handlePlayPause = () =>{
        console.log(isPlaying)
        if (isPlaying){
            audio.current.pause()
        } else{
            audio.current.src = songs[selected].music
            audio.current.play()
        }
        setIsPlaying(!isPlaying)
    }
    const handleNext = () => {
        if (isPlaying){
            audio.current.pause()
            setIsPlaying(false);
        }
        setSelected((selected + 1) % songs.length);
        if (isPlaying) {
          audio.current.pause();
          audio.current.src = songs[selected].music;
          audio.current.play();
        }
      };
    
    const handlePrev = () => {
        if (isPlaying){
            audio.current.pause()
            setIsPlaying(false);
        }
        setSelected((selected - 1 + songs.length) % songs.length);
        if (isPlaying) {
          audio.current.pause();
          audio.current.src = songs[selected].music;
          audio.current.play();
        }
      };

  return (
    <div className='w-full h-screen flex flex-col text-white'>
        <div className='grow-1 bg-black/95 w-full flex h-5/6 pt-20 '>
            <div className='w-1/2'>
                <div className='bg-gray-600  h-[700px] w-[700px] mr-[25%] ml-[25%]'>
                    <img  src={songs[selected].src} alt={songs[selected].name} className='w-full h-full object-cover'/>
                </div>
            </div>
            <div className='w-1/2'>
                <div className='text-4xl text-left mb-4'>All Songs.</div>
                <div className='flex flex-col mr-[30%]'>
                    {songs.map((song,index) => {
                        return (
                            <div onClick={()=>setSelected(index)} className='flex gap-4 items-center border-t-2 border-white py-10 hover:bg-black/90 cursor-pointer'>
                                <img src={song.src} alt={song.name} className='w-24 h-16'/>
                                <div className='text-xl font-bold'>{song.name}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
        <div className='bg-black h-1/6 flex items-center justify-center gap-6'>
            <div onClick={handlePrev} className=' rounded-full bg-gray-600 p-4'><IoPlaySkipBackSharp className='w-[30px] h-[30px] '/></div>
            <div onClick={handlePlayPause} className=' rounded-full bg-gray-600 p-4'>{isPlaying ?<FaPause className='w-[30px] h-[30px] '/> :<FaPlay className='w-[30px] h-[30px] '/>}</div>
            <div onClick={handleNext} className=' rounded-full bg-gray-600 p-4'>< IoPlaySkipForwardSharp  className='w-[30px] h-[30px] '/></div>
        </div>
    </div>
  )
}
