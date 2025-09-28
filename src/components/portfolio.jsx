import { useState } from "react";
import PortfolioBox from "./services/portfoliobox";

export default function Portfolio() {
  const items = ["All", "Website Design", "App Mobile Design", "App Desktop", "Branding"];
  const [activeIndex, setActiveIndex] = useState(0);

  // 👇 هنا بنخزن المشاريع كلها مع التصنيف
  const projects = [
    { img: "project-01.png", name: "Project 1", category: "Website Design" },
    { img: "project-02.png", name: "Project 2", category: "App Mobile Design" },
    { img: "project-01.png", name: "Project 3", category: "App Desktop" },
    { img: "project-02.png", name: "Project 4", category: "Branding" },
    { img: "project-01.png", name: "Project 5", category: "Website Design" },
  ];

  // 👇 فلترة المشاريع بناءً على التاب المحددة
  const filteredProjects =
    activeIndex === 0
      ? projects // لو "All" نعرض الكل
      : projects.filter((p) => p.category === items[activeIndex]);

  return (
    <div className="portfolio mt-[150px]" id="portfolio">
      <h2 className="text-[40px] text-white font-bold text-center">Portfolio</h2>

      {/* Tabs */}
      <ul className="tabs flex items-center gap-[24px] justify-center mt-[50px] flex-wrap">
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`px-[40px] py-[14px] rounded-[8px] text-[16px] font-bold cursor-pointer transition-all duration-300
              ${activeIndex === index
                ? "text-white bg-[linear-gradient(to_right,#FD6F00,#E46400)]"
                : "text-[#C6C6C6] bg-[#1d1d1d] hover:bg-[#333]"}
            `}
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Projects */}
      <div className="projects-container grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-[30px] mt-[70px]">
        {filteredProjects.map((project, index) => (
          <PortfolioBox
            key={index}
            img={project.img}
            name={project.name}
            category={project.category}
          />
        ))}
      </div>
    </div>
  );
}
