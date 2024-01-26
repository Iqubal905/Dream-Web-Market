import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 '>
            <div>
            <Link to={'/'} href={"/"} className="font-extrabold  capitalize text-3xl "><span className="text-white-900">D</span><span className="text-red-500">W</span><span className="text-blue-500">M</span></Link>
               <p className='  text-sm'>Dream Web Market is a leading global IT provider. Dream Web Market was started 
                to provide software solutions, website development and consulting services to all.</p>     
            </div>
            <div className=' flex   justify-center pt-4 md:pt-0 md:justify-end items-center '>
                <div>
                <h2 className='text-xl  mb-6   '><span className='border-b-2  border-red-500'>Serv</span><span className='border-b-2 border-b-blue-500'>ices</span></h2>
                <ul className='text-sm'>
                <li className='mb-2 transition-all duration-300 transform hover:translate-x-2'><Link to={'/'} href={"/"}>Website development</Link></li>
                    <li className='mb-2 transition-all duration-300 transform hover:translate-x-2'><Link to={'/'} href={"/"}>Consultancy</Link></li>
                    <li className='mb-2 transition-all duration-300 transform hover:translate-x-2'><Link to={'/'} href={"/"}>Contact Us</Link></li>
                </ul>
                </div>
            </div>
            <div className='flex justify-center items-center'>
               <div>
               <h2 className='text-xl  mb-6  pt-4 md:pt-0 '><span className='border-b-2  border-red-500'>Li</span><span className='border-b-2 border-b-blue-500'>nk</span></h2>
                <ul className='text-sm '>
                    <li className='mb-2 transition-all duration-300 transform hover:translate-x-2'><Link to={'/'} href={"/"}>About</Link></li>
                    <li className='mb-2 transition-all duration-300 transform hover:translate-x-2'><Link to={'/'} href={"/"}>Portfolio</Link></li>
                    <li className='mb-2 transition-all duration-300 transform hover:translate-x-2'><Link to={'/'} href={"/"}>Project</Link></li>
                </ul>
               </div>
            </div>
            <div>
                <h2 className=' pb-4'>Newsletter</h2>
            <Link to={'/'}  href={'/'}>
            <div className='  flex justify-between text-lg items-center border-b-2 border-slate-50 mr-8  bg-gray-900 shadow-lg'>
             <div className='flex justify-start items-center'>
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 64 64" id="email"><path fill="#fff" d="M53.42 53.32H10.58a8.51 8.51 0 0 1-8.5-8.5V19.18a8.51 8.51 0 0 1 8.5-8.5h42.84a8.51 8.51 0 0 1 8.5 8.5v25.64a8.51 8.51 0 0 1-8.5 8.5ZM10.58 13.68a5.5 5.5 0 0 0-5.5 5.5v25.64a5.5 5.5 0 0 0 5.5 5.5h42.84a5.5 5.5 0 0 0 5.5-5.5V19.18a5.5 5.5 0 0 0-5.5-5.5Z"></path><path fill="#fff" d="M32 38.08a8.51 8.51 0 0 1-5.13-1.71L3.52 18.71a1.5 1.5 0 1 1 1.81-2.39L28.68 34a5.55 5.55 0 0 0 6.64 0l23.35-17.68a1.5 1.5 0 1 1 1.81 2.39L37.13 36.37A8.51 8.51 0 0 1 32 38.08Z"></path><path fill="#fff" d="M4.17 49.14a1.5 1.5 0 0 1-1-2.62l18.4-16.41a1.5 1.5 0 0 1 2 2.24L5.17 48.76a1.46 1.46 0 0 1-1 .38zm55.66 0a1.46 1.46 0 0 1-1-.38l-18.4-16.41a1.5 1.5 0 1 1 2-2.24l18.39 16.41a1.5 1.5 0 0 1-1 2.62z">
                </path></svg>
            <span className='ml-2'>Click here</span>
             </div>
            <span className=' mr-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" data-name="Layer 1" viewBox="0 0 32 32" id="right-arrow"><path fill="red" d="M28.66 17.11a1.19 1.19 0 0 0 .09-.15l.1-.2.06-.2a.84.84 0 0 0 .05-.17 2 2 0 0 0 0-.78.84.84 0 0 0-.05-.17l-.06-.2-.1-.2a1.19 1.19 0 0 0-.09-.15 1.79 1.79 0 0 0-.25-.31l-10-10a2 2 0 0 0-2.82 2.82l6.58 6.6H5a2 2 0 0 0 0 4h17.17l-6.58 6.59a2 2 0 1 0 2.82 2.82l10-10a1.79 1.79 0 0 0 .25-.3Z">
                </path></svg>
 
            </span>
             </div>
            </Link>
              <div className=' flex mt-4 gap-2'>
              <a className='px-1' href="https://www.facebook.com/YourPageURL" target="_blank" rel="noopener noreferrer">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="126.445 2.281 589 589" id="facebook">
  <circle cx="420.945" cy="296.781" r="294.5" fill="#fff"></circle>
  <path fill="#3c5a9a" d="M516.704 92.677h-65.239c-38.715 0-81.777 16.283-81.777 72.402.189 19.554 0 38.281 0 59.357H324.9v71.271h46.174v205.177h84.847V294.353h56.002l5.067-70.117h-62.531s.14-31.191 0-40.249c0-22.177 23.076-20.907 24.464-20.907 10.981 0 32.332.032 37.813 0V92.677h-.032z">
    </path>
    </svg>
</a>

<a className='px-1' href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" viewBox="0 0 224 226" id="facebook-messenger"><defs><linearGradient id="a" x1="50%" x2="50%" y1="6.76%" y2="95.6%"><stop offset="0" ></stop><stop offset="1" ></stop></linearGradient></defs><path fill="#fff" d="m41.255 185.52v40.2l37.589-21.37c10.478 3.02 21.616 4.65 33.156 4.65 61.86 0 112-46.79 112-104.5 0-57.714-50.14-104.5-112-104.5-61.856 0-112 46.786-112 104.5 0 32.68 16.078 61.86 41.255 81.02z"></path><path fill="#3c5a9a" d="m100.04 75.878l-60.401 63.952 54.97-30.16 28.721 30.16 60.06-63.952-54.36 29.632-28.99-29.632z"></path></svg>
</a>
<a className='' href="">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 99.59 99.59" id="linkedin-circle"><defs><linearGradient id="a" x1="-1.971" x2="-1.264" y1="2.61" y2="3.317" gradientUnits="objectBoundingBox"><stop offset="0" ></stop><stop offset="1" ></stop></linearGradient></defs><path fill="#fff" d="M56.82,7.025a49.795,49.795,0,1,0,49.8,49.795A49.795,49.795,0,0,0,56.82,7.025ZM43.534,80.893H32.6V45.572H43.534ZM38.016,40.946a6.518,6.518,0,1,1,6.465-6.517A6.492,6.492,0,0,1,38.016,40.946Zm46.49,39.947H73.626V62.353c0-5.085-1.932-7.924-5.953-7.924-4.376,0-6.662,2.956-6.662,7.924V80.893H50.525V45.572H61.011v4.757a12.319,12.319,0,0,1,10.644-5.835c7.49,0,12.851,4.573,12.851,14.034V80.893Z" data-name="linkedin circle" transform="translate(-7.025 -7.025)">
  </path>
  </svg>
</a>
              </div>
            </div>
            
            
        </div>
       <div className='mt-6 pb-4 '>
        <hr />
        <div className="flex  justify-center items-center">
  <span className="mr-2 text-base mt-2">All reserve   &copy; by DWM</span>
 
</div>

       </div>
        </div>
    );
};

export default Footer;