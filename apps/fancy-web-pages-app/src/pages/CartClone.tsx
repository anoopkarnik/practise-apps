import React,{useState} from 'react'
import { FaHeart, FaShoppingCart, FaSuitcase } from "react-icons/fa";
import { MdOutlineSubject } from "react-icons/md";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { IoHomeOutline } from "react-icons/io5";
import { PiMouseScroll } from "react-icons/pi";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { CiBookmark, CiUser } from "react-icons/ci";
import { AiOutlineGlobal } from "react-icons/ai";
import { MdOutlineCleaningServices } from "react-icons/md";
import { IoHomeSharp } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { IoIosSettings } from 'react-icons/io';

type Item = {
    name: string,
    headline: string,
    price: string,
    image: string

}


export default function CartClone() {

    var products = [
        {name:"camera", headline:"Best Camera ever", price:"1000", image:"https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg"},
        {name:"headphone", headline:"Best Headphone ever", price:"100", image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"},
        {name:"watches", headline:"Best Watch ever", price:"10", image:"https://burst.shopifycdn.com/photos/wrist-watches.jpg?width=1000&format=pjpg&exif=0&iptc=0"},
        {name:"skin care kit", headline:"Best Skin Care ever", price:"50", image:"https://plus.unsplash.com/premium_photo-1661769750859-64b5f1539aa8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"},
    ]
    var popular = [
        {name:"camera", headline:"Best Camera ever", price:"1000", image:"https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg"},
        {name:"headphone", headline:"Best Headphone ever", price:"100", image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"},
    ]

    const [cartItems, setCartItems] = useState<Item[]>([]);
    const [showCart, setShowCart] = useState(false);

  return (
    <div className='bg-gray-100 w-full h-screen'>
        <div className='flex items-center justify-between p-6'>
            <MdOutlineSubject className='text-2xl'/>
            <FaShoppingCart onClick={()=>setShowCart(!showCart)} className='text-2xl'/>
        </div>
        <div className={`bg-white fixed right-4 w-[15%] ${showCart ? '' : 'hidden'}`}>
            {cartItems.map((item,index)=>{
                return(
                    <div key={index} className='flex items-center justify-start p-6 gap-4'>
                        <img src={item.image} alt={item.name} className='h-10 w-10 object-cover rounded-xl'/>
                        <div>
                            <div className='text-md font-bold'>{item.name}</div>
                            <div className='text-md font-bold'>${item.price}</div>
                        </div>
                    </div>
                )
            })}
        </div>
        <div className='flex items-center justify-center p-6  '>
            <input placeholder='Search' className='w-full bg-gray-300 h-10 border-2 border-gray-300 rounded-xl p-2 grow-1'/>
            <TbAdjustmentsHorizontal className='text-black text-4xl'/>
        </div>
        <div className=' flex gap-6 m-6 items-center '>
            <div className="bg-gradient-to-br from-[#69628a] to-[#040309] rounded-full px-8 shadow-xl shadow-black/40 py-8 bg-line text-yellow-400">
                <IoHomeOutline className='text-xl'/>
            </div>
            <div className="icon rounded-full shadow-md shadow-slate/10 px-8 py-8">
                <PiMouseScroll className='text-xl'/>
            </div>
            <div className="icon rounded-full shadow-md shadow-slate/10 px-8 py-8">
                <MdOutlineLocalGroceryStore className='text-xl'/>
            </div>
            <div className="icon rounded-full shadow-md shadow-slate/10 px-8 py-8">
                <CiBookmark className='text-xl'/>
            </div>
            <div className="icon rounded-full shadow-md shadow-slate/10 px-8 py-8">
                <AiOutlineGlobal className='text-xl'/>
            </div>
            <div className="icon rounded-full shadow-md shadow-slate/10 px-8 py-8">
                <MdOutlineCleaningServices className='text-xl'/>
            </div>
            <div className="icon rounded-full shadow-md shadow-slate/10 px-8 py-8">
                <IoHomeSharp className='text-xl'/>
            </div>
        </div>
        <div className='flex px-6 gap-6 py-6'>
            {products.map((product,index)=>{
                return (
                    <div key={index} className='bg-white rounded-xl shadow-xl p-6 '>
                        <img src={product.image} alt={product.name} className='h-60 w-60 object-cover rounded-xl'/>
                        <div className='flex items-center justify-between'>
                            <div>
                                <div className='text-xl font-bold text-left'>{product.name}</div>
                                <div className='text-lg text-left'>{product.headline}</div>
                                <div className='text-xl font-bold text-left'>${product.price}</div>
                            </div>
                            <div onClick={() => { setCartItems([...cartItems, product]); console.log(cartItems) }} className='bg-gradient-to-br from-[#69628a] to-[#040309] rounded-full  p-4  cursor-pointer'>
                                <FaPlus className='text-xl  text-yellow-400'/>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
        <div className='text-4xl font-black font-["Helvetica"] text-left mx-10 my-6'>
            Popular
        </div>
        <div className='flex px-6 gap-6 py-6'>
            {popular.map((product,index)=>{
                return(
                    <div key={index} className='bg-white rounded-xl shadow-xl p-6 flex'>
                        <img src={product.image} alt={product.name} className='h-20 w-20 object-cover rounded-xl mr-10'/>
                        <div className='mr-10'>
                            <div className='text-xl font-bold text-left'>{product.name}</div>
                            <div className='text-lg text-left'>{product.headline}</div>
                            <div className='text-xl font-bold text-left'>${product.price}</div>
                        </div>
                    </div>
                )
            })}
        </div>
        <div className='fixed bottom-0 w-full h-[8%] bg-white flex items-center justify-between px-32' >
            <div className='flex items-center justify-between gap-6'>
                <IoHomeSharp className='text-2xl text-gray-500'/>
                <FaHeart className='text-2xl text-gray-500'/>
            </div>
            <div className='bg-gradient-to-br from-[#69628a] to-[#040309] rounded-full p-6 -translate-y-10 shadow-xl shadow-black/40'>
                <FaSuitcase className='text-xl text-yellow-400'/>
            </div>
            <div className='flex items-center justify-between gap-6'>
                <IoIosSettings className='text-2xl text-gray-500'/>
                <CiUser className='text-2xl text-gray-500'/>
            </div>
        </div>
    </div>
  )
}
