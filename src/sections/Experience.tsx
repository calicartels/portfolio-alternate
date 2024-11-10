import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const expereinces = [
    {
      name: "Deakin University",
      role: "SEBE Research Intern",
      url: "https://www.deakin.edu.au",
      start: "November 2023",
      end: "June 2023",
      shortDescription: [
        "Developed a pipeline capable of on-edge video text detection using the Google Vision API.",
        "Wrote the C# code for the wrapper to run on a Microsoft Hololens headset.",
        "Collaborated with Dr. William Raffe to deploy it as a scalable implementation.",
      ],
    },
    {
      name: "Sentics GmbH",
      role: "Computer Vision Intern",
      url: "https://www.sensics.com",
      start: "August 2022",
      end: "November 2022",
      shortDescription: [
        "Developed an algorithm for accurate base point estimation using pose keypoint data from TRTPose, improving accuracy by 100%.",
        "Conducted research and experimentation on object and keypoint tracking, presenting findings and recommendations to the team.",
      ],
    },
    {
      name: "Miniscule Technologies",
      role: "AIOps Intern",
      url: "https://www.minisculetech.com",
      start: "May 2022",
      end: "July 2022",
      shortDescription: [
        "Worked as a Cloud AIOps Engineer, evaluating Cloud Service Providers for industrial 5G use-cases.",
        "Deployed an on-edge custom face detection model using Amazon Rekognition with 88% accuracy, trained on employee data stored on Amazon S3.",
        "Platforms and hardware used: AWS Cloud, Hikvision AcuSense camera.",
      ],
    },
  ];
  return (
    <motion.div
      className="experience"
      id="experience"
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
        <h2>Where I&apos;ve Worked</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {expereinces.map((expereince, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
                key={expereince.name}
              >
                <span>{expereince.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{expereinces[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link href={expereinces[selected].url} className="link">
                  {expereinces[selected].name}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {expereinces[selected].start} - {expereinces[selected].end}
            </p>
            <ul className="exp-details-list">
              {expereinces[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
