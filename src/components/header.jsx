import { useState } from "react";
import Logo from "./services/logo";
import Nav from "./services/nav";

export default function Header({handlemobile}){
    
    return(
        <header className="flex justify-between items-center">
            <div className="button md:hidden">
            <i 
                className="fa-solid fa-bars hidden text-[#959595] text-clamp(1rem, 2vw + 0.5rem, 24px) cursor-pointer"
                onClick={handlemobile}
            >
            </i>
            </div>
            <Logo/>
            <Nav/>
            <button className="hireme cursor-pointer z-20 border-0 text-[white] text-clamp(1rem, 2vw + 0.5rem, 16px) font-[bold] bg-gradient-to-r from-[#FD6F00] to-[#E46400] rounded-[8px] px-[40px] py-[12px] ">Hire Me</button>
        </header>
    )
}