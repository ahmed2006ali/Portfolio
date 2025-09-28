export default function SpecialHead({head,p}){
    return(
        <div className="specialhead text-center">
            <h2 className="text-[40px] font-[bold] text-[white]">{head}</h2>
            <p className="font-[500] text-[20px] text-[#707070]">{p}</p>
        </div>
    )
}