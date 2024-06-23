import { Card, CardFooter, CardHeader } from '@repo/ui/components/card';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Button } from '@repo/ui/components/button';
import { FormResult } from './FormResult';

interface LoginCardProps {
  showGoogleProvider?: boolean;
  showGithubProvider?: boolean;
  showLinkedinProvider?: boolean;
  onGoogleProviderSubmit?: any;
  onGithubProviderSubmit?: any;
  onLinkedinProviderSubmit?: any;
  errorMessage?: string;
}

const LoginCard = ({showGoogleProvider,showGithubProvider,showLinkedinProvider,
  onGoogleProviderSubmit,onGithubProviderSubmit,onLinkedinProviderSubmit,errorMessage}
  :LoginCardProps
) => {


 
  return (
    <Card className='w-[400px] bg-white text-black  hover:bg-white   shadow-xl shadow-white/20 pt-10'>
      <CardHeader>
        <div className='text-6xl font-bold text-center'>Login</div>
        <div className='text-md font-extralight text-center'>Welcome Back</div>
      </CardHeader>
      <CardFooter className='flex flex-col items-center justify-center rounded-2xl gap-4 mt-20 mb-4'>
        {showGoogleProvider && 
        <Button onClick={onGoogleProviderSubmit} variant='default' className=' py-4 px-[40%] shadow-xl shadow-black/20'>
          <FcGoogle size={20}/>
        </Button>}
        {showGithubProvider && <Button onClick={onGithubProviderSubmit} variant='default' className=' py-4 px-[40%] shadow-xl shadow-black/20'><FaGithub size={20}/></Button>}
        {showLinkedinProvider && <Button onClick={onLinkedinProviderSubmit} variant='default' className=' py-4 px-[40%] shadow-xl shadow-black/20'><FaLinkedin size={20}/></Button>}
        <FormResult type="error" message={errorMessage }/>
      </CardFooter>
    </Card>
  )
}

export default LoginCard;