import { useState } from "react";
import Logo from "./services/logo";
import Nav from "./services/nav";

export default function Header(){
    const[mobileisclicked,setmobileisclicked]=useState(false);
    return(
        <header className="flex justify-between items-center">
            {/* <i 
            className="fa-solid fa-bars sm:flex hidden text-[#959595] text-[24px] cursor-pointer"
            onClick={()=>setmobileisclicked(!mobileisclicked)}
            >
            </i> */}
            <Logo/>
            <Nav/>
            <button className="hireme cursor-pointer z-20 border-0 text-[white] text-[16px] font-[bold] bg-gradient-to-r from-[#FD6F00] to-[#E46400] rounded-[8px] px-[40px] py-[12px] ">Hire Me</button>
        </header>
    )
}