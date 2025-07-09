import StarPortal from "../Shared/StarBlinkingPortal";
import astro from "../../assets/home/astro.png";
import Image from "next/image";
import Link from "next/link";
import Knowmore from "../Shared/Knowmore";

const jobData = [
  {
    id: 1,
    title: "UI/UX Designer",
    experience: "Minimum Of 1 Year",
    skills:
      "Understand User Needs And Develop User Flows, Wireframes, Prototypes, And High-Fidelity Designs.",
    location: "Kochi, India",
  },
  {
    id: 2,
    title: "Digital Marketing Executive",
    experience: "Minimum Of 1 Year",
    skills: "SEO, Social Media, Video Marketing And Content Marketing",
    location: "Kochi, India",
  },
  {
    id: 3,
    title: "SEO And SEM Analyst",
    experience: "Minimum Of 1 Year",
    skills:
      "Proven Experience In SEO And SEM. Proficiency In Tools Like Google Analytics, SEMrush, Or Similar Platforms.",
    location: "Kochi, India",
  },
  {
    id: 4,
    title: "Web Designer",
    experience: "Minimum Of 1 Year",
    skills:
      "A Bachelor's Degree In Computer Science Or A Related Field. Proficiency In HTML, CSS, And JavaScript",
    location: "Kochi, India",
  },
  {
    id: 5,
    title: "Sales And Marketing Team Lead",
    experience: "Minimum Of 1 Year",
    skills:
      "Develop Strategic Plans And Execute Effective Sales And Marketing Campaigns, Excellent Leadership Skills",
    location: "Kochi, India",
  },
];

const CarrerContent = () => {

  return (
    <StarPortal>
      <div>


        <div className="w-full container mx-auto relative px-4 sm:px-8 md:px-12 lg:px-20 py-20">
          <div className="flex flex-col items-center justify-center min-h-[40vh] relative">
            <Image src={astro} alt="astro" className="absolute top-10 right-4 sm:top-16 sm:right-8 md:top-20 md:right-20 w-16 h-16 sm:w-20 sm:h-20 md:w-auto md:h-auto" />
            <h2 className="text-[#D8FC00]  text-6xl md:text-8xl lg:text-9xl font-poppins font-extrabold leading-[1.1] animate-[textStroke_0.5s_ease-out_2.5s_forwards] inline-block mb-4 sm:mb-6 md:mb-8 text-center">
              Career
            </h2>
            <p className="text-white text-sm sm:text-lg md:text-xl font-poppins font-thin max-w-2xl text-center px-4">
              Careers refer to the various paths individuals choose to pursue in
              their professional lives, typically encompassing a series of related
              jobs and roles over time.
            </p>
          </div>
          <div className="space-y-4 sm:space-y-6 md:space-y-8 py-6 sm:py-8 md:py-10">
            {jobData.map((job, idx) => (
              <div
                key={job.title}
                className="bg-[#000000] rounded-lg px-3 sm:px-4 py-4 sm:py-6 md:py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between shadow-md border border-[#FFFFFF] gap-3 sm:gap-4"
              >
                <div className="flex-1 w-full sm:min-w-[160px]">
                  <h3 className="text-base sm:text-lg md:text-xl font-medium font-poppins text-white">{job.title}</h3>
                </div>
                <div className="flex-1 w-full sm:min-w-[140px]">
                  <span className="block font-semibold text-white text-sm sm:text-base">Experience</span>
                  <span className="block text-xs sm:text-sm text-white">{job.experience}</span>
                </div>
                <div className="flex-[2] w-full sm:min-w-[200px]">
                  <span className="block font-semibold text-white text-sm sm:text-base">Skills</span>
                  <span className="block text-xs sm:text-sm text-white break-words">{job.skills}</span>
                </div>
                <div className="flex-1 w-full sm:min-w-[70px]">
                  <span className="block font-semibold text-white text-sm sm:text-base">Location</span>
                  <span className="block text-xs sm:text-sm text-white">{job.location}</span>
                </div>
                <div className="flex-1 flex justify-center sm:justify-end items-center w-full sm:min-w-[120px] mt-4 sm:mt-0">
                  <Link href={`/careers/${job.id}`} className="border px-4 sm:px-6 md:px-8 py-2 rounded-full relative overflow-hidden group z-10 whitespace-nowrap text-sm sm:text-base">
                    <span className="absolute left-0 top-0 w-0 h-full bg-white transition-all duration-500 group-hover:w-full -z-10"></span>
                    <span className="relative group-hover:text-black transition-colors duration-500">
                      MORE INFO
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Knowmore />
      </div>
    </StarPortal>
  );
};

export default CarrerContent;
