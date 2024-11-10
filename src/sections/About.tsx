import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
          Hi, my name is Vishnu,
I am an AI Enineer and a Data scientist
I'm passionate in the disciplines of Data Science, Artificial Engineering, & Computer Vision.
          </p>
          <p className="about-grid-info-text">
          I am currently pursuing my MEng in Artificial Intelligence for Product Innovation at 
          {" "}
            <Link href="https://masters.pratt.duke.edu/ai/" className="link" target="_blank">
            Duke University.
            </Link>
          </p>

          <p className="about-grid-info-text">
            Additionally, I share my knowledge and passion with the world
            through my Github, where I demonstrate how to build
            all things ML.
          </p>
          <p className="about-grid-info-text">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">Numpy</li>
            <li className="about-grid-info-list-item">Pandas</li>
            <li className="about-grid-info-list-item">SKlearn</li>
            <li className="about-grid-info-list-item">PyTorch</li>
            <li className="about-grid-info-list-item">Tensorflow</li>
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">Elasticsearch</li>
            <li className="about-grid-info-list-item">AWS</li>
            <li className="about-grid-info-list-item">Docker</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/vishnu.jpeg" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
