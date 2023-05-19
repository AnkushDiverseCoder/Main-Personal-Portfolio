import About from "@/components/About";
import Archive from "@/components/Archive";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import LeftSide from "@/components/LeftSide";
import Middle from "@/components/Middle";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import RightSide from "@/components/RightSide";
import { motion } from "framer-motion";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/assets/Logo.png" />
        <title>Thakur Ankush Singh</title>
      </Head>
      <main className="w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60">
        <Navbar />
        <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between ">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0"
          >
            <LeftSide />
          </motion.div>
          <div className="h-[88vh] w-full mx-auto p-4">
            <Middle />
            <About />
            {/* <Experience /> */}
            <Project />
            <Archive />
            <Contact />
            <Footer />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0"
          >
            <RightSide />
          </motion.div>
        </div>
      </main>
    </>
  );
}
