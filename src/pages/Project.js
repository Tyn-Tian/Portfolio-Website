import ButtonPrimary from "../components/ButtonPrimary";
import { projects } from "../data/project";
import { motion } from "framer-motion";
import { containerVariants, projectCardVariants } from "../utils/variants";

const Project = () => {
  return (
    <main className="mt-3 pt-3 px-3 px-md-5">
      <section className="project container">
        <div className="title text-center">
          <h1 className="display-5 fw-bolder">Projects</h1>
          <p className="opacity-50 fs-5">Here are some of my projects.</p>
        </div>
        <div className="projects-container mt-5">
          <motion.div
            className="row"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {projects.map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-12 mb-4">
                <motion.div className="card" variants={projectCardVariants}>
                  <img src={item.url} className="card-img-top" alt="Project" />
                  <div className="card-body">
                    <h3 className="fs-5 opacity-75">{item.title}</h3>
                    <p className="opacity-50 limited-text">{item.describe}</p>
                    <ButtonPrimary
                      link={item.href}
                      className={"w-100"}
                      content={"View Project"}
                    />
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Project;
