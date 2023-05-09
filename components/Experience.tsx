import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import ReactBD from "./works/ReactBD";
import ReactBDCopy from "./works/ReactBDCopy";

const Experience = () => {
   const [workReactDb, setWorkReactDb] = useState(true)
   const [workReactCopy, setWorkReactCopy] = useState(false)
   const [temp, setTemp] = useState(false)
   const [temp2, setTemp2] = useState(false)
   const [temp3, setTemp3] = useState(false)
   
   const handleReactDb =()=>{
       setWorkReactDb(true);
       setWorkReactCopy(false);
    }
    
    const handleReactCopy =()=>{
       setWorkReactDb(false);
       setWorkReactCopy(true);
   }
   
  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4 "
    >
      <SectionTitle titleNo="02" title="Where I have Worked" />

      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li onClick={handleReactDb} className={`${workReactDb? "border-l-textGreen text-textGreen": "border-l-hoverColor text-textDark"} border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>ReactBD</li>
          <li onClick={handleReactCopy} className={`${workReactCopy? "border-l-textGreen text-textGreen": "border-l-hoverColor text-textDark"} border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>ReactBDCopy</li>
          <li className={`${temp? "border-l-textGreen text-textGreen": "border-l-hoverColor text-textDark"} border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>Apple</li>
          <li className={`${temp2? "border-l-textGreen text-textGreen": "border-l-hoverColor text-textDark"} border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>Facebook</li>
          <li className={`${temp3? "border-l-textGreen text-textGreen": "border-l-hoverColor text-textDark"} border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>Instagram</li>
        </ul>
        {workReactDb && <ReactBD/>}
        {workReactCopy && <ReactBDCopy/>}
      </div>
    </section>
  );
};

export default Experience;
