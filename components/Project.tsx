import React from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import { Project1, Project3, youtubeClone } from "@/public/assets";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";

const Project = () => {
  return (
    <section
      id="project"
      className="max-w-container mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4 "
    >
      <SectionTitle title="Some Things I have Built.." titleNo="03" />
      <div
        className="w-full flex flex-col items-center justify-between gap28 mt-10
     "
      >
        {/* Project One  */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href=""
              target="_blank"
            >
              <div>
                <Image src={Project1} alt="" />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide ">
                Freelance Company Project
              </p>
              <h3 className="text-2xl font-bold">
                Information Management System
              </h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                Developed an Information Management System to efficiently handle
                daily sales, customer entry, and generate monthly reports.
                Successfully managed and processed around 2600 data entries on a
                monthly basis. Implemented features for data entry, storage,
                retrieval, and reporting to streamline business operations and
                enhance decision-making processes.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li className="duration-300 hover:text-textGreen cursor-pointer">
                  React.js
                </li>
                <li className="duration-300 hover:text-textGreen cursor-pointer">
                  Node.js
                </li>
                <li className="duration-300 hover:text-textGreen cursor-pointer">
                  MongoDB
                </li>
                <li className="duration-300 hover:text-textGreen cursor-pointer">
                  Netlify
                </li>
                <li className="duration-300 hover:text-textGreen cursor-pointer">
                  Cyclic.sh
                </li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/AnkushDiverseCoder/Father_Project_Mern"
                >
                  <TbBrandGithub />
                </a>
                <a href="https://vcaccounts.netlify.app">
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Project Two */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row-reverse gap-6 ">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href=""
              target="_blank"
            >
              <div>
                <Image src={youtubeClone} alt="" />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right  z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide ">
                Video Sharing Application
              </p>
              <h3 className="text-2xl font-bold">Youtube Clone</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md xl:-mr-16">
                Developed a full-stack YouTube clone with user authentication,
                video upload and playback, comment system, subscription
                functionality, recommendation engine, and search feature. and
                integrated REST APIs for seamless user experience.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li className="duration-300 hover:text-textGreen cursor-pointer">
                  React.js
                </li>
                <li className="duration-300 hover:text-textGreen cursor-pointer">
                  Node.js
                </li>
                <li className="duration-300 hover:text-textGreen cursor-pointer">
                  MongoDB
                </li>
                <li className="duration-300 hover:text-textGreen cursor-pointer">
                  Netlify Deployment
                </li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/AnkushDiverseCoder/Youtube_Clone"
                >
                  <TbBrandGithub />
                </a>
                <a href="https://ankushyoutube1808.netlify.app">
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Project Three  */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href=""
              target="_blank"
            >
              <div>
                <Image src={Project3} alt="" />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide ">
                Realtime Project
              </p>
              <h3 className="text-2xl font-bold">CollabWrite Docs</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                CollabWrite: The ultimate collaborative document editor. Create,
                edit, and share documents in real-time with multiple users.
                Enjoy a wide range of formatting options to customize your
                content. Effortlessly share documents via email invitations or
                unique links. Access and edit documents from any device with
                internet connectivity. Experience the power of collaborative
                document editing with CollabWrite..
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li className="duration-300 hover:text-textGreen cursor-pointer">
                  React.js
                </li>
                <li className="duration-300 hover:text-textGreen cursor-pointer">
                  Node.js
                </li>
                <li className="duration-300 hover:text-textGreen cursor-pointer">
                  MongoDB
                </li>
                <li className="duration-300 hover:text-textGreen cursor-pointer">
                  Netlify 
                </li>
                <li className="duration-300 hover:text-textGreen cursor-pointer">
                  Render 
                </li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/AnkushDiverseCoder/GoogleDocClone"
                >
                  <TbBrandGithub />
                </a>
                <a href="https://googledocs1808.netlify.app/docs/c5d2332b-abca-46e8-a5f4-56ab08d4a2ed">
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
