import Icons from "./services/icons";

export default function HeroSection(){
    return(
        <div className="hero flex flex-col items-center mt-[120px] justify-between lg:flex-row gap-[100px] lg:gap-[70px]">
            <div className="info">
                <div className="text">
                    <p className="text-clamp(1rem, 24px) text-[#707070] font-[600]">Hi I am</p>
                    <p className="text-clamp(1rem, 28px) text-[#707070] font-bold">Mahmood Fazile</p>
                    <h2 className="text-[70px] mt-[24px] font-[900] bg-[linear-gradient(to_right,#984300,#FD6F00_46%,#CA5900)] bg-clip-text text-transparent">UI/UX designer</h2>
                </div>
                <Icons/>
                <div className="buttons flex items-center gap-[10px] mt-[61px]">
                    <button className="hire cursor-pointer border-0 text-[white] text-[16px] font-[bold] bg-gradient-to-r from-[#FD6F00] to-[#E46400] rounded-[8px] px-[40px] py-[12px] ">Hire Me</button>
                    <button className="download cursor-pointer text-[20px] text-[#959595] font-bold border-[2px] border-[#959595] rounded-[8px] px-[40px] py-[12px]">Download Cv</button>
                </div>
                <div className="stat bg-[#1d1d1d] mt-[70px] rounded-[8px] p-[24px] flex items-center gap-[30px]">
                    <div className="box  border-r-[1px] border-[#959595] py-[6px] pr-[30px]">
                        <p className="text-[#FD6F00] font-[800] text-[24px]">5+</p>
                        <p className="text-[#DFDFDF] font-bold text-[20px]">Experiences</p>
                    </div>
                    <div className="box  border-r-[1px] border-[#959595] py-[6px] pr-[30px]">
                        <p className="text-[#FD6F00] font-[800] text-[24px]">20+</p>
                        <p className="text-[#DFDFDF] font-bold text-[20px]">Project done</p>
                    </div>
                    <div className="box">
                        <p className="text-[#FD6F00] font-[800] text-[24px] py-[6px] pr-[30px]">80+</p>
                        <p className="text-[#DFDFDF] font-bold text-[20px]">Happy Clients</p>
                    </div>
                </div>
            </div>
            <div className="img relative lg:w-[618px] lg:h-[618px] w-[382.99px] h-[382.99px] rounded-full bg-[#1d1d1d]  mx-auto">
                <img 
                src="Man in black suit looking confident.png" 
                alt="Man in black suit looking confident" 
                className="absolute top-1/2 left-1/2 lg:w-[520px] lg:h-[781px] -translate-x-1/2 -translate-y-[60%] w-[322.25px] h-[484px]"
                />
            </div>
        </div>
    )
}
//  before:top-1/2 before:left-1/2 before: before:-translate-y-1/2