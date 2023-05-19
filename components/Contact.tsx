import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 mdl:py-32 flex flex-col gap-4 items-center justify-center "
    >
      <p className="font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide ">
        04. What{"'"}s Next?
      </p>
      <h2 className="font-titleFont text-5xl font-semibold ">Get In Touch</h2>
      <p className="text-center max-w-[600px] text-textDark ">
        Feel free to get in touch with me through the contact details provided
        Above. I'm excited to hear from you and explore potential opportunities
        for collaboration, projects, or any inquiries you may have.
      </p>
      <p className="text-center max-w-[600px] text-textDark ">
        I'm always open to meaningful conversations and eager to connect. to
        learn more about my work and projects. Don't hesitate to reach out—I'm
        looking forward to hearing from you and discussing how we can create
        something extraordinary together
      </p>
      <a href="mailto:thakurankushsingh1902@gmail.com" target="_blank">
        <button className="w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300">
          Say Hello
        </button>
      </a>
    </section>
  );
};

export default Contact;
