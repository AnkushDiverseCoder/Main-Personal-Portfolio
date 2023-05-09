import React from "react";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import Image from "next/image";
import { ProfileImg } from "@/public/assets";

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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            reprehenderit explicabo sit sint? Magnam unde sapiente incidunt
            placeat quisquam, reiciendis consequuntur nam reprehenderit.
            Voluptate sint dignissimos aperiam ipsa cum doloremque totam impedit
            maiores dolore, sit repellat perspiciatis deserunt error aliquid ab
            minima laborum laboriosam qui dolorum? Aut sit quas eos!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dignissimos, accusantium.
            <span className="text-textGreen">Lorem ipsum dolor sit amet.</span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed,
            ipsum.
            <span className="text-textGreen">Lorem ipsum dolor sit amet.</span>
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            accusamus a magni! Ab earum quaerat quia officiis minus accusamus!
            Dignissimos architecto aperiam nobis iure, excepturi velit in itaque
            eveniet vitae?
          </p>
          <p>Here are a few technologies I have been working with recently: </p>
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
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
              <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover: -translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
