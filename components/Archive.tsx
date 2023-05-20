import React from "react";
import ArchiveCard from "./ArchiveCard";
import { motion } from "framer-motion";

const Archive = () => {
  const [showMore, setShowMore] = React.useState(false);
  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          {" "}
          Other Noteworthy Projects
        </h2>
        <p className="text-textGreen text-sm font-titleFont">
          view the archive
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <ArchiveCard
            title="Database Query Generator"
            des="Database Query Generator ChatGPT API Project: Developed an intelligent API using
            ChatGPT to generate accurate and efficient database queries.Ensured compatibility with multiple database systems."
            listItem={["Reactjs", "Tailwind CSS", "Chat GPT"]}
            link="https://app.netlify.com/sites/querygenerator1808/overview"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <ArchiveCard
            title="File Sharing Application"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          ipsum aspernatur tempora mollitia voluptas perferendis minima."
            listItem={["Reactjs", "Tailwind CSS", "MongoDB.io"]}
            link="https://www.netflix.com/"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <ArchiveCard
            title="Educare English Learning Academy"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          ipsum aspernatur tempora mollitia voluptas perferendis minima."
            listItem={["Reactjs", "Tailwind CSS", "MongoDB.io"]}
            link="http://www.netflix.com/"
          />
        </motion.div>

        {showMore && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ArchiveCard
                title="Educare English Learning Academy"
                des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              ipsum aspernatur tempora mollitia voluptas perferendis minima."
                listItem={["Reactjs", "Tailwind CSS", "MongoDB.io"]}
                link="http://www.netflix.com/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ArchiveCard
                title="Educare English Learning Academy"
                des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              ipsum aspernatur tempora mollitia voluptas perferendis minima."
                listItem={["Reactjs", "Tailwind CSS", "MongoDB.io"]}
                link="http://www.netflix.com/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <ArchiveCard
                title="Educare English Learning Academy"
                des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              ipsum aspernatur tempora mollitia voluptas perferendis minima."
                listItem={["Reactjs", "Tailwind CSS", "MongoDB.io"]}
                link="http://www.netflix.com/"
              />
            </motion.div>
          </>
        )}
      </div>
      <div className="mt-12 flex items-center justify-center">
        <button
          onClick={() => setShowMore(!showMore)}
          className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor"
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default Archive;
