import Icons from "./services/icons";
import Logo from "./services/logo";
import Nav from "./services/nav";

export default function Footer(){
    return(
        <footer className="text-center mt-[150px] px-[80px] pt-[40px] pb-[24px]  bg-[#1d1d1d] flex flex-col items-center gap-[50px]">
            <Logo/>
            <Nav/>
            <Icons/>
            <div className="contact flex text-center gap-[40px] ml-auto mr-auto">
                <div className="email text-[#959595] flex items-center cursor-pointer">
                    <i className="fa-solid fa-envelope"></i>
                    <a className="font-bold text-[20px]" href="mailto:Mahmood.fazile7005@gmail.com">Mahmood.fazile7005@gmail.com</a>
                </div>
                <div className="phone text-[#959595] flex items-center cursor-pointer">
                    <i className="fa-solid fa-phone"></i>
                    <a className="font-bold text-[20px]" href="tel:+93 729 107 005">+93 729 107 005</a>
                </div>
            </div>
            <p className="text-center text-[16px] font-bold text-[#707070] px-[120px] pt-[16px]">Designed by @mahmood.fazile UI/UX designer</p>
        </footer>
    )
}