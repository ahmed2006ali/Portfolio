import SpecialHead from "./services/specialheader";
import SrvBox from "./services/srv-box";

export default function Services(){
    return(
        <div className="services mt-[150px]" id="services">
            <SpecialHead head={"Services"} p={"Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam"}/>
            <div className="services-container mt-[40px] grid grid-cols-[repeat(auto-fill,minmax(290px,1fr))]  gap-[80px]">
                <SrvBox head={"App Design"} />
                <SrvBox head={"App Design"} />
                <SrvBox head={"App Design"} />
                <SrvBox head={"App Design"} />
                <SrvBox head={"App Design"} />
                <SrvBox head={"App Design"} />
            </div>
        </div>
    )
}