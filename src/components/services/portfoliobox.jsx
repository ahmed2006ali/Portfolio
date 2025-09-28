export default function PortfolioBox({img,name,category}){
    return(
        <div className="portfolio-box cursor-pointer">
            <img src={img} alt={name} className="rounded-t-[28px] " />
            <div className="text text- flex justify-between items-center p-[16px] max-w-[415px] max-h-[415px] rounded-b-[16px] bg-[#1d1d1d]">
                <p className="text-[16px] font-bold text-[#C6C6C6]">{name}</p>
                <p className="text-[16px] font-bold text-[#C6C6C6]">{category}</p>
            </div>
        </div>
    )
}