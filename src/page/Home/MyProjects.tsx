import Project from "../components/Project";
import sectionImg from "../../assets/img/sectionImg.png";
import sectionImg1 from "../../assets/img/sectionImg1.png";
import sectionImg2 from "../../assets/img/sectionImg2.png";

const MyProjects = () => {
  return (
    <div>
      <div>
        <Project
          title="Bangla blog Website Ui Design"
          subtitle="Programming Hero"
          description="This case study looks at the mobile-first redesign of Sick.org’s landing page. The study will focus on how the redesign improved user experience, increased mobile traffic, and how the changes have impacted the overall performance of the site…"
          img={sectionImg}
          reverse={false}
          btn={
            <button className="text-white bg-[#4379FB] hover:bg-blue-400 font-medium rounded-lg text-sm px-5 py-2.5  mb-2 ">
              View Full Work
            </button>
          }
        />
      </div>
      <div className="mb-12">
        <div>
          <Project
            title="Bangla blog Website Ui Design"
            subtitle="Programming Hero"
            description="This case study looks at the mobile-first redesign of Sick.org’s landing page. The study will focus on how the redesign improved user experience, increased mobile traffic, and how the changes have impacted the overall performance of the site…"
            img={sectionImg2}
            reverse={true}
            btn={
              <button className="text-white bg-[#4379FB] hover:bg-blue-400 font-medium rounded-lg text-sm px-5 py-2.5  mb-2 ">
                View Full Work
              </button>
            }
          />
        </div>
      </div>
      <div>
        <div>
          <Project
            title="Bangla blog Website Ui Design"
            subtitle="Programming Hero"
            description="This case study looks at the mobile-first redesign of Sick.org’s landing page. The study will focus on how the redesign improved user experience, increased mobile traffic, and how the changes have impacted the overall performance of the site…"
            img={sectionImg1}
            reverse={false}
            btn={
              <button className="text-white bg-[#4379FB] hover:bg-blue-400 font-medium rounded-lg text-sm px-5 py-2.5  mb-2 ">
                View Full Work
              </button>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
