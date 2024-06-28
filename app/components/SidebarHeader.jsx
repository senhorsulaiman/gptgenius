import React from 'react'
import { CiApple } from "react-icons/ci";
import ThemeToogle from './ThemeToggle'

const SidebarHeader = () => {
  return (
    <div className='flex items-center mb-4 gap-4 px-4'>

        <CiApple className='w-10 h-10 text-primary' />
        <h2 className='text-xl font-extrabold text-primary me-auto'>GPTGenius</h2>
        <ThemeToogle/>
    </div>
  )
}

export default SidebarHeader