import { skills } from "../data/skill";

const Skill = () => {
  return (
    <main className="mt-md-5 pt-md-5 mt-3 pt-3 px-3 px-md-5">
      <section className="skills container">
        <div className="title text-center">
          <h1 className="display-5 fw-bolder">Skilss</h1>
          <p className="opacity-50 fs-5">
            Here are some of my skills on which I have been working on for the
            past 1 years.
          </p>
        </div>
        <div className="skills-container d-flex justify-content-center flex-wrap gap-md-3 gap-2">
          {skills.map((skill) => (
            <div className="skill-item px-3 py-2 border rounded-3 opacity-50 fw-semibold">
              {skill.name}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Skill;
