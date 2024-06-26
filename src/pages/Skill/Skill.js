import { skills } from "../../data/skill";
import { motion } from "framer-motion";
import { containerVariants, skillVariants } from "../../utils/variants";
import TitlePage from "../../components/TitlePage/TitlePage";
import "./Skill.css";

const Skill = () => {
  const title = {
    h1: "Skills",
    p: "Here are some of my skills on which I have been working on for the past 1 years.",
  };

  return (
    <main className="mt-3 pt-3 px-3 px-md-5">
      <section className="skills container">
        <TitlePage h1={title.h1} p={title.p} />
        <motion.div
          className="skills-container d-flex justify-content-center flex-wrap gap-md-3 gap-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-item px-3 py-2 border rounded-3 fw-semibold d-flex gap-2 align-items-center"
              variants={skillVariants}
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
