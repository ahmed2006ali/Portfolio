export default function Nav(){
    return(
        <ul className="nav md:flex items-center gap-[60px] z-20 hidden">
            <li><a href="#"className="text-[#FA6E00] text-clamp(1rem, 2vw + 0.5rem, 20px) font-bold">Home</a></li>
            <li><a href="#services"className="text-[#959595] hover:text-[#FA6E00] text-clamp(1rem, 2vw + 0.5rem, 20px) font-bold">Services</a></li>
            <li><a href="#about"className="text-[#959595] hover:text-[#FA6E00] text-clamp(1rem, 2vw + 0.5rem, 20px) font-bold">About Me</a></li>
            <li><a href="#portfolio"className="text-[#959595] hover:text-[#FA6E00] text-clamp(1rem, 2vw + 0.5rem, 20px) font-bold">Portfolio</a></li>
            <li><a href="#contact"className="text-[#959595] hover:text-[#FA6E00] text-clamp(1rem, 2vw + 0.5rem, 20px) font-bold">Contact Me</a></li>
        </ul>
    )
}