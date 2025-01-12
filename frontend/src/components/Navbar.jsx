import React, { useState } from 'react'
import {AiOutlineMenu} from "react-icons/ai"
import {IoCloseSharp } from "react-icons/io5"
import {motion} from "motion/react"


const Navbar = () => {

    const [menu, setMenu] = useState(false)

    const variants = {
        open: {clipPath: "circle(1200px at 43px 33px)"},
        transition: {
            type: "spring",
        },
        closed: {
            clipPath: "circle(25px at 43px 36px)",
            transition: {
                type:"spring",
                duration:1.5,
            },
        },
    }

    const items = [
        {id:1, text:"Home"},
        {id:2, text:"About"},
        {id:3, text:"Services"},
        {id:4, text:"Work"},
    ]
  return (
    <div className='border-b  border-purple-800'>
    <motion.div
        initial={{opacity:0, y:-100}}
        animate={{opacity:1, y:0}}
        transition={{duration:0.7}}
        className='container mx-auto hidden md:flex 
        justify-between items-center py-6'>
        <div className='text-xl lg:text-2xl font-bold flex items-center gap-1'>
            <span className='text-pink-300 cursor-pointer'>RODRIGUEZ</span>
            <span className='text-purple-600 cursor-pointer'>WEB</span>
        </div>
        <div>
            <ul className='hidden cursor-pointer  md:flex items-center text-white space-x-6 list-none lg:text-lg md:text-base'>
                {items.map(({id, text}) => (
                    <li 
                    key={id}
                    className='hover:text-purple-800 hover:font-bold'
                    >{text}</li>
                ))}
            </ul>
        </div>
        <a className='text-white grid md:text-base lg:text-lg bg-purple-900 hover:bg-purple-500 px-4 py-2 rounded-full cursor-pointer'>
           Contact
        </a>
    </motion.div>



    <div className='flex md:hidden justify-between'>
    <motion.div  animate={menu ? "open" : "closed"}>
        
        <motion.div variants={variants}

            onClick={() => setMenu((prev) => !prev)} 
            className='bg-white w-2/3 h-screen text-black fixed z-10'>
            <div className='px-7 py-6 cursor-pointer'>
                {menu ? (
                    <IoCloseSharp size={30} />
                ) : (
                    <AiOutlineMenu size={30} />
                )}
            </div>
            {menu && (
                <div className='flex flex-col justify-center items-center bg-white'>
                    <ul className='space-y-6 text-black text-lg'>
                        {items.map(({ id, text }) => (
                            <li key={id} className='hover:text-purple-300 duration-300 cursor-pointer'>
                                {text}
                            </li>
                        ))}
                    </ul>
                    <a className='text-lg cursor-pointer bg-purple-900 hover:bg-purple-500 text-white mt-7 px-4 py-2 rounded-full'>
                        Contact
                    </a>
                </div>
            )}
        </motion.div>
    </motion.div>
    <motion.div
    initial=
        {{opacity:0, x: 100, y:-100}}
        animate={{opacity:1, x:0, y:0}}
        transition={{duration: 0.5}  }
        className='text-xl font-bold flex items-center gap-2 py-6 px-4 '>
        <span className='text-white'>RODRIGUEZ</span>
        <span className='text-purple-800'>WEB</span>
    </motion.div>
</div>
</div>
   
  )
}

export default Navbar