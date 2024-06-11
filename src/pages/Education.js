import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { motion } from "framer-motion";
import EducationCard from "../components/EducationCard";

const Education = () => {
  const paraf = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 0.75,
      transition: {
        duration: 0.5,
      },
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
    <main className="mt-3 pt-3 px-3 px-md-5">
      <section className="education container">
        <div className="title text-center">
          <h1 className="display-5 fw-bolder">Education</h1>
          <p className="opacity-50 fs-5">
            My education has been a journey of self-discovery and growth. My
            educational details are as follows.
          </p>
        </div>
        <div className="education-container mt-5">
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="secondary" />
                <TimelineConnector className="d-none d-md-block" />
              </TimelineSeparator>
              <TimelineContent>
                <motion.p
                  className="d-block d-md-none fw-semibold"
                  data-bs-toggle="modal"
                  data-bs-target={`#modalId`}
                  initial="hidden"
                  animate="visible"
                  variants={paraf}
                >
                  ISB Atma Luhur
                </motion.p>
                <div
                  className="modal fade"
                  id="modalId"
                  tabIndex="-1"
                  aria-labelledby="modalId-label"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <EducationCard />
                  </div>
                </div>
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  className="d-none d-md-block"
                >
                  <EducationCard classname={"d-none d-md-block"} />
                </motion.div>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </section>
    </main>
  );
};

export default Education;