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
            listItem={["React.js", "Tailwind CSS", "Chat GPT"]}
            link="https://querygenerator1808.netlify.app"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <ArchiveCard
            title="File Sharing Application"
            des="personal file sharing application that allows users to securely upload, store, and share files.
             Successfully managed the entire project lifecycle, showcasing my full stack development skills creating practical solutions."
            listItem={["React.js", "Multer", "MongoDB"]}
            link="https://shareJoy1808.netlify.com/"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <ArchiveCard
            title="Realtime Chat App"
            des=" Designed and developed a high-performance, real-time chat application with a sleek user interface, enabling seamless communication and instant messaging. "
            listItem={["React.js", "Tailwind CSS", "MongoDB"]}
            link="https://ankushchat.netlify.app"
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
                title="Youtube React api"
                des="Created a personal project utilizing the YouTube API with React.
                Implemented features like video search suggested videos based on user preferences.
                Designed an intuitive user interface with responsive design principles..."
                listItem={["Reactjs", "Tailwind CSS", "MongoDB.io"]}
                link="https://ankushyoutube.netlify.app/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ArchiveCard
                title="Personal Blog"
                des="Passionate and introspective blogger sharing personal experiences, insights, and reflections. Engaging storytelling combined with authentic vulnerability to inspire and connect with readers. Topics encompass life, growth, relationships, mental health, and self-discovery. "
                listItem={["Reactjs", "Tailwind CSS", "MongoDB.io"]}
                link="https://blog1808.netlify.app"
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
