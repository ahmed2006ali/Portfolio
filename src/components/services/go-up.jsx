import { useState } from "react";
import { useEffect } from "react"

export default function GoUp(){
    const[scrolled,setScrolled]=useState(false)

    useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY >= 800) {
            setScrolled(true);       // لو نزلنا أكتر من 800px
        } else {
        setScrolled(false);      // لو رجعنا لفوق
        }
    };

    window.addEventListener("scroll", handleScroll);
}, []);
    return(
        <button 
        className={`go-up cursor-pointer fixed bottom-10  p-3 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-opacity duration-300 ${scrolled?"right-10":"right-[-50px]"} transition-all duration-300`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
            <i className="fa-solid fa-arrow-up "></i>
            </button>
    )
}