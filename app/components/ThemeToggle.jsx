'use client'
import { BsFillMoonFill,BsFillSunFill } from "react-icons/bs";
import { useState } from "react"

const themes={

    winter:'winter',
    dracula:'dracula',
}

const ThemeToggle = () => {
    const [theme,SetTheme]=useState(themes.winter);


    const toggleTheme=()=>{

      const newTheme= theme===themes.winter? themes.dracula : themes.winter;

      document.documentElement.setAttribute('data-theme',newTheme);

      SetTheme(newTheme);


    }

  return (


    <button onClick={toggleTheme} className="btn btn-sm btn-outline">

        {theme==='winter'?(<BsFillSunFill className="size-4" />):(<BsFillMoonFill className="size-4" />)}
    </button>
  )
}

export default ThemeToggle