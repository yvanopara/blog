import { Button, TextInput } from 'flowbite-react'
import {useSelector} from 'react-redux'


export default function DashProfile() {
     const {currentUser} = useSelector(state => state.user)


  return (
   
    <div className='max-w-lg mx-auto w-full'>
        
        <h1 className='text-center my-9 font-semibold'>Profile</h1>
        <form className='flex flex-col gap-5'>
            <div className='w-35 h-35 self-center cursor-pointer self-center '>
            <img src={currentUser.profilePicture} alt='user' className='rounded-full  w-full h-full border-8 border-[gray] x '/>
        
            </div>
            <TextInput type='text' id='username' placeholder='username'
            defaultValue={currentUser.username}/>
            
            <TextInput type='email' id='email' placeholder='email'
            defaultValue={currentUser.email}/>
            
            <TextInput type='text' id='password' placeholder='****************'
            defaultValue=''/>
            <Button type='submit' gradientDuoTone='purpleToBlue' outline>
              Update
            </Button>
        </form>
        <div className='text-red-500 flex justify-between mt-5 '>
          <span className='cursor-pinter'>Delete Account</span>
          <span className='cursor-pinter'>Sign Out</span>

        </div>

        
      
    </div>
  )
}
