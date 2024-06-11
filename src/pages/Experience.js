import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { experience } from "../data/experience";
import { createTheme } from "@mui/material";
import ExperienceCard from "../components/ExperienceCard";
import { motion } from "framer-motion";

const Experience = () => {
  createTheme({
    palette: {
      secondary: {
        light: "#854CE6",
        main: "#854CE6",
        dark: "#854CE6",
        contrastText: "#854CE6",
      },
    },
  });

  const paraf = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 0.75,
      transition: {
        duration: 0.5
      }
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <main className="mt-md-5 pt-md-5 mt-3 pt-3 px-3 px-md-5">
      <section className="experience container">
        <div className="title text-center">
          <h1 className="display-5 fw-bolder">Experience</h1>
          <p className="opacity-50 fs-5">
            My work experience as a Frontend Web Developer, Photographer and
            working on different companies and projects.
          </p>
        </div>
        <div className="experience-container mt-5">
          <Timeline position="alternate-reverse">
            {experience.map((item, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot color="secondary" />
                  {index === experience.length - 1 ? "" : <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <motion.p
                    className="d-block d-md-none fw-semibold"
                    data-bs-toggle="modal"
                    data-bs-target={`#${index}`}
                    initial="hidden"
                    animate="visible"
                    variants={paraf}
                  >
                    {item.company}
                  </motion.p>
                  <div
                    className="modal fade"
                    id={index}
                    tabIndex="-1"
                    aria-labelledby={`${index}-label`}
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered">
                      <ExperienceCard item={item} />
                    </div>
                  </div>
                  <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    className="d-none d-md-block"
                  >
                    <ExperienceCard item={item} />
                  </motion.div>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </section>
    </main>
  );
};

export default Experience;
