import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import {useDispatch, useSelector} from 'react-redux'
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';
import Auth from '../components/Auth';


export default function SignIn() {
  const [formData, setFormData] = useState({});
  const {error: errorMessage} = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      dispatch(signInFailure('Please fill out all fields.'))
    }
    try {
      dispatch(signInStart());
      const res = await fetch('http://localhost:3000/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
        
      });
      
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }
      
      if(res.ok) {
        dispatch(signInSuccess(data));
        navigate('/');
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return(
  <div className="min-h-screen mt-20">
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
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <div>
            <Label value='your user email'/>
            <TextInput
            type='email'
            placeholder='Email'
            id='email'onChange={handleChange}
            />
          </div>
         
          <div>
            <Label value='your user password'/>
            <TextInput
            type='password'
            placeholder='*******'
            id='password'
            onChange={handleChange}
            />
          </div>
          <Button gradientDuoTone='purpleToPink' type='submit' disabled={loading}>
            {
              loading ? (
                <>
                  <Spinner size='sm' />
                  <span className='pl-3'>Loading...</span>
                </>
              ) : 'Sign up'

            }
           
          </Button>
          <Auth />
        </form>
        <div>
          <span>Dont have an account? </span>
          <Link to='/sing-up' className='text-blue-500'>
          Sign Up
          </Link>
        </div>
       {
         errorMessage && (
          <Alert className='mt-5 ' color='failure'>
            {errorMessage}
          </Alert>
        )
       }

      </div>
    </div>


    </div>
  )
}
