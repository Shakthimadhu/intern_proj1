import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    
    return (
        <div className='flex p-5 space-x-5'>
            <div className='flex space-x-5'>
                <div onClick={() => setNav(!nav)} className='cursor-pointer' >
                    <AiOutlineMenu size={40} />
                </div>

                <h1 className=' sm:text-3xl lg:text-4xl'>
                    TOURISM <span className='font-bold'>CHECKER</span>
                </h1>
            </div>

            <div className='flex bg-gray-100 items-center px-5 space-x-3 w-[200px] sm:w-[300px] lg:w-[500px] rounded-full'>
                <AiOutlineSearch size={30} />
                <input className='bg-transparent focus:outline-none w-full p-2px' type='text' placeholder="Search Destinations"></input>
            </div>

            {/*overlay*/}
            {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}

            {/*side menu*/}
            <div className={nav ? 'fixed w-[300px] h-screen top-0 left-0 bg-white z-10 duration-300' :
                'fixed w-[300px] h-screen top-0 left-[-100%] bg-white z-10 duration-300'}>
                <AiOutlineClose onClick={() => setNav(!nav)} size={30} className='absolute right-4 top-4 cursor-pointer' />
                <h2 className='text-2xl absolute top-4'>TOURISM<span className='font-bold p-2'>CHECKER</span></h2>
            </div>

        </div>
    )

};


export default Navbar;