'use client'

import { getAllTours } from "./../../utils/action"
import { useQuery } from "@tanstack/react-query"
import ToursList from"./ToursList"
import { useState } from "react"
const ToursPage = () => {
    const [searchValue,setSearchValue]=useState('')
   const {data,isPending}= useQuery({
        queryKey:['tours',SearchValue],
        queryFn:()=>getAllTours(searchValue),
    })
  return (
    <>
    <form className="max-w-lg mb-12">
        <div className="join w-full">
            <input required value={searchValue} type="text" placeholder="enter city or country here.." className="input input-bordered join-item w-full" onChange={(e)=> setSearchValue(e.target.value)}/>
            <button type="button" className="btn btn-primary" onClick={()=>setSearchValue('')}>Reset</button>
        </div>
    </form>
        {isPending?<span className="loading"></span>:<ToursList data={data}/>}

    </>
  )
}

export default ToursPage