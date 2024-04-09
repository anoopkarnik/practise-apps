import Image from "next/image";
import {useBalance} from '@repo/recoil-store/useBalance'
export default function Home() {
  
  const balance = useBalance()
  return (
    <div className='text-white'>Current {balance}</div>
  );
}
