import { Link } from 'react-router-dom';
import { Footer} from 'flowbite-react';
import {BsFacebook, BsInstagram, BsTwitter, BsGithub} from 'react-icons/bs';




export default function FooterCom() {
  return (
   <Footer container className='border border-t-18  border-teal-500'>
    <div className=' w-full max-w-9xl mx-auto'>
        <div className='w-full justify-between'>
            <div className=''>
            <Link to="/" className='self-center whitespace-nowrap text-sm
            sm:text-xl font-semibold dark:text-white' >
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500
            to-pink-500 rounded-lg text-white'>Landry</span>Blog
            </Link>

            </div>
            <div className="grid grid-cols-2 gap-3 mt-5 sm:grid-cols-3 sm:gap-6">
                <div>
                     <Footer.Title title='Visit my other projects'/>
                <Footer.LinkGroup>
                    <Footer.Link href='https://www.google.com'
                    target='_blanck' >
                     University website
                    </Footer.Link>
                </Footer.LinkGroup> 

                <Footer.LinkGroup>
                    <Footer.Link href='https://www.google.com'
                    target='_blanck' >
                     Restaurent
                    </Footer.Link>
                </Footer.LinkGroup>   
                </div>
                <div>
                     <Footer.Title title='FOLLOW ME'/>
                <Footer.LinkGroup>
                    <Footer.Link href='https://www.google.com'
                    target='_blanck' >
                     GitHub
                    </Footer.Link>
                </Footer.LinkGroup> 

                <Footer.LinkGroup>
                    <Footer.Link href='https://www.google.com'
                    target='_blanck' >
                     LinkIn
                    </Footer.Link>
                </Footer.LinkGroup>   
                </div>

                <div>
                     <Footer.Title title='legal'/>
                <Footer.LinkGroup>
                    <Footer.Link href='https://www.google.com'
                    target='_blanck' >
                     Privacy Policy 
                    </Footer.Link>
                </Footer.LinkGroup> 

                <Footer.LinkGroup>
                    <Footer.Link href='https://www.google.com'
                    target='_blanck' >
                     Term and Condition
                    </Footer.Link>
                </Footer.LinkGroup>   
                </div>
                 
            </div>


        </div>
        <Footer.Divider />
        <div>
            <Footer.Copyright
             href='#' 
             by='yvan opara'
            year={new Date().getFullYear()}
            
              />
              <div className=' flex gap-6 justify-center mt-4'>
                <Footer.Icon href='#' icon={BsFacebook} />
                <Footer.Icon href='#' icon={BsTwitter} />
                <Footer.Icon href='#' icon={BsInstagram} />
                <Footer.Icon href='#' icon={BsGithub} />

              </div>
        </div>
    </div>

   </Footer>
  )
}
