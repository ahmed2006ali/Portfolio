import SpecialHead from "./services/specialheader";

export default function ContactMe(){
    return(
        <div className="contact mt-[150px]" id="contact">
            <SpecialHead head={"Contact me"} p={"Cultivating Connections: Reach Out and Connect with Me"}/>
            <div className="form mt-[50px] flex flex-col items-center">
                
                    <div className="row-input flex flex-col md:flex-row gap-[30px] items-center mb-[30px]">
                        <input type="text" placeholder="Name" className="px-[24px] py-[14px] block rounded-[8px] focus:outline-hidden placeholder:text-[#959595] placeholder:font-[500] placeholder:text-[16px] caret-[#FD6F00] bg-[#1d1d1d]"/>
                        <input type="email" placeholder="Email" className="px-[24px] py-[12px] block rounded-[8px] focus:outline-hidden placeholder:text-[#959595] placeholder:font-[500] placeholder:text-[16px] caret-[#FD6F00] bg-[#1d1d1d]"/>
                    </div>
                    <div className="row-input flex flex-col md:flex-row gap-[30px] items-center mb-[30px]">
                        <input type="text" placeholder="Phone Number" className="px-[24px] py-[14px] block rounded-[8px] focus:outline-hidden placeholder:text-[#959595] placeholder:font-[500] placeholder:text-[16px] caret-[#FD6F00] bg-[#1d1d1d]"/>
                        <textarea placeholder="Project Details..." className="focus:outline-hidden px-[24px] py-[14px] rounded-[8px] placeholder:text-[#959595] placeholder:font-[500] placeholder:text-[16px] resize-none bg-[#1d1d1d] caret-[#FD6F00] max-h-[162px]"></textarea>
                    </div>
                
                
                    <button className="border-[2px] border-[#959595] text-[#959595] text-[20px] font-bold rounded-[8px] px-[40px] py-[12px] cursor-pointer">Send</button>
                
            </div>
        </div>
    )
    {/* <input type="text" placeholder="TimeLine" className="px-[24px] py-[14px] block rouded-[8px] focus:outline-hidden placeholder:text-[#959595] placeholder:font-[500] placeholder:text-[16px] caret-[#FD6F00] bg-[#1d1d1d]"/> */}
}