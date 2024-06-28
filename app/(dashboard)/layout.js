import React from 'react'
import { FaBarsStaggered } from "react-icons/fa6";


import Sidebar from '../components/Sidebar'

const layout = ({ children }) => {

    return (

        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center px-4  bg-base-100 py-12 ">
                {children}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                    <FaBarsStaggered className='w-8 h-8 text-primary' />
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <Sidebar />

            </div>
        </div>


    )
}

export default layout
