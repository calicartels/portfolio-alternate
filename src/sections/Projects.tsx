import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/blindai.png",
      projectName: "Blind.ai",
      projectLink: "https://netlify.com",
      projectDescription:
        "An app to make the lives of visually impaired people a little more ordinary, powered by Flutter, Python, Twilio and Flask The app offers an intuitive UI which facilitates the user to access the key features : SOS, Object detection, Currency detection and Read text, without much effort.",
      projectTech: [
        "Python",
        "Flutter",
        "Twilio",
        "YoloV5",
        "PyTesseract",
        "Heroku",
      ],
      projectExternalLinks: {
        github: "https://github.com/calicartels/blind.ai",
        externalLink: "",
      },
    },
    {
      image: "/tamil letter.jpg",
      projectName: "Tamil Character Recognition using Shape based Features",
      projectLink: "https://netlify.com",
      projectDescription:
        "This is the Code for the paper presented at the 7th International Conference on Computing, Communication, Control and Automation (ICCUBEA-2023), Pune, India.The research aims to address the gap in OCR technology for Tamil characters and provide a comparative analysis of existing OCR studies across different languages and algorithms.",
      projectTech: [
        "Python",
        "OpenCv",
        "Catboost",
        "Optune",
      ],
      projectExternalLinks: {
        github: "https://github.com/calicartels/Categorical-Boosting-Machine-for-Tamil-Character-Recognition-using-Shape-based-Features",
        externalLink: "",
      },
    },
    {
      image: "/LLMtalk Logo.jpeg",
      projectName: "LLMTalk",
      projectLink: "https://netlify.com",
      projectDescription:
        "A Streamlit based application that helps you chat with your audio file, powered by Langchain, ChromaDB, and OpenAI. Used to chat with any YouTube Video by inputting the URL into a pipeline that extracts the video transcript and feeds it into the GPT-4 .",
      projectTech: [
        "StreamLit",
        "GPT-4",
        "Python",
        "VectorDB",
        "Langchain",
        "Assembly AI",
      ],
      projectExternalLinks: {
        github: "https://github.com/calicartels/LLMTalk",
        externalLink: "",
      },
    },
  ];
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I’ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
