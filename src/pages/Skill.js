import { skills } from "../data/skill";
import { motion } from "framer-motion";

const Skill = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 0.75,
    },
  };

  return (
    <main className="mt-3 pt-3 px-3 px-md-5">
      <section className="skills container">
        <div className="title text-center">
          <h1 className="display-5 fw-bolder">Skills</h1>
          <p className="opacity-50 fs-5">
            Here are some of my skills on which I have been working on for the
            past 1 years.
          </p>
        </div>
        <motion.div
          className="skills-container d-flex justify-content-center flex-wrap gap-md-3 gap-2"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-item px-3 py-2 border rounded-3 fw-semibold d-flex gap-2 align-items-center"
              variants={item}
            >
              <img src={skill.url} alt="Logo" />
              {skill.name}
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
};

export default Skill;
