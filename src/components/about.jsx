import SpecialHead from "./services/specialheader";

export default function About(){
    return(
        <div className="about mt-[150px]" id="about">
            <SpecialHead head={"About Me"} p={"User Interface and User Experience and Also video editing "}/>
            <div className="about-container flex flex-col lg:flex-row items-center mt-[40px]">
                <div className="image basis-[50%]">
                    <img src="Man in black suit looking confident.png" alt="Man in black suit looking confident" />
                </div>
                <div className="details basis-[50%]">
                    <p className="text-[#959595] text-[20px] font-medium leading-[1.8] lg:mt-0 mt-[40px]">
                        A software engineer, the modern-day architect of digital realms, navigates the ethereal landscapes of code, sculpting intangible structures that shape our technological world. With fingers poised over keyboards like virtuoso pianists, they compose symphonies of logic, their minds a labyrinth of algorithms and solutions.Their canvas is a screen, a vast expanse where lines of code dance in intricate patterns, weaving the fabric of programs and applications. Each keystroke is a brushstroke, crafting intricate architectures and breathing life into innovative designs.In this digital atelier, they don the mantle of problem solvers, confronting bugs and glitches like valiant knights in an ever-evolving quest for perfection. Debugging becomes a noble pursuit, unraveling the mysteries hidden within the tangled webs of code. designs.In this digital atelier.
                    </p>
                    <button className="text-white rounded-[8px] px-[30px] py-[12px] cursor-pointer mt-[40px] bg-[linear-gradient(to_right,#FD6F00,#E46400)] ">Download CV</button>
                </div>
            </div>
        </div>
    )
}