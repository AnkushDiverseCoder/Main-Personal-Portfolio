import React from "react";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import Image from "next/image";
import ProfileImg from "@/public/assets/ProfileImg.png";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4 "
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col gap-16 lgl:flex-row">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            I am a passionate Full Stack Developer with expertise in the MERN
            stack. With a deep curiosity for web development, I have explored
            various programming languages and frameworks, ultimately finding my
            true calling in Full Stack Development. I possess comprehensive
            knowledge and hands-on experience in building robust web
            applications using MongoDB, Express.js, React.js, and Node.js.
          </p>
          <p>
            Throughout my journey, I have worked on diverse projects, including
            <span className="text-textGreen">
              {" "}
              Real World Freelancing Application{" "}
            </span>{" "}
            and{" "}
            <span className="text-textGreen">
              {" "}
              Personal Blog to Youtube Clone applications.
            </span>{" "}
            These experiences have not only strengthened my technical skills but
            also cultivated a keen eye for detail and a solution-oriented
            mindset.
          </p>
          <p>
            As a lifelong learner, I am committed to staying up-to-date with the
            latest industry trends and continuously improving my skill set.
            I value effective
            communication and excel as a team player. My personal attributes
            include adaptability, a strong work ethic, and a passion for
            creating high-quality software solutions.
          </p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>{" "}
              JavaScript (ES6+){" "}
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>{" "}
              Next.js{" "}
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>{" "}
              React{" "}
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>{" "}
              TypeScript{" "}
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>{" "}
              Mongodb{" "}
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>{" "}
              Node.js{" "}
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>{" "}
              Express.js{" "}
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>{" "}
              Tailwind Css{" "}
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src={ProfileImg}
                alt="ProfileImg"
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textDark/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textDark rounded-md group-hover:-translate-x-2 group-hover: -translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
