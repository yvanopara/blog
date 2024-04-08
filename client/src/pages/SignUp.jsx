import { Button, Label, TextInput } from 'flowbite-react'
import { Link} from 'react-router-dom'

export default function SignUp() {
  return(<div className="min-h-screen mt-20">
    <div className='flex max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>

        {/* LHS */}
      <div className="flex-1">
      <Link to="/" className='font-bold dark:text-white text-4xl' >
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500
            to-pink-500 rounded-lg text-white'>Landry</span>Blog
        </Link>
        <p className='mt-5 text-sm'>This is a demo project by tahang opara yvan didier</p>
      </div>

        {/* RHS */}
      <div className="flex-1"> 
        <form className='flex flex-col gap-4'>
          <div>
            <Label value='your user name'/>
            <TextInput
            type='text'
            placeholder='Name'
            id='username'
            />
          </div>
          <div>
            <Label value='your user email'/>
            <TextInput
            type='text'
            placeholder='Email'
            id='email'
            />
          </div>
          <div>
            <Label value='your user password'/>
            <TextInput
            type='text'
            placeholder='Password'
            id='password'
            />
          </div>
          <Button gradientDuoTone='purpleToPink' type='submit'>
            Sign Up
          </Button>
        </form>
        <div>
          <span>Have an account? </span>
          <Link to='/sing-in' className='text-blue-500'>
          Sign In
          </Link>
        </div>

      </div>
    </div>


    </div>
  )
}
