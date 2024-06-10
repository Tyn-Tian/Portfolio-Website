import Typewriter from "typewriter-effect";
import ButtonPrimary from "../components/ButtonPrimary";

const Home = () => {
  return (
    <main className="mt-5 pt-5 px-3 px-md-5">
      <section className="hero container">
        <div className="row">
          <div className="col-12 text-sm-start text-center">
            <div className="d-flex d-md-block gap-2 gap-md-0 justify-content-sm-start justify-content-center">
              <h1 className="fw-bolder display-5 mb-0">Hi, I am</h1>
              <h1 className="fw-bolder display-5 ">Christian</h1>
            </div>
            <h3 className="fw-medium fs-3 d-flex gap-2 justify-content-sm-start justify-content-center">
              I am a
              <span>
                <Typewriter
                  options={{
                    strings: [
                      "FE Web Dev",
                      "Web Developer",
                      "Programmer",
                      "Photographer",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h3>
          </div>
          <div className="col-lg-8 col-md-10 col-12 mt-3 mt-md-0">
            <p className="description fs-5 text-center text-sm-start opacity-50">
              I am a motivated individual, always eager to take on new
              challenges. With a passion for learning, I am dedicated to
              delivering high quality results. With a positive attitude and
              growth mindset, I am ready to make meaningful contributions and
              achieve great things.
            </p>
          </div>
          <div className="col-12 text-center text-sm-start">
            <ButtonPrimary
              className={"fw-medium btn-lg mt-3"}
              content={"LinkedIn Profile"}
              link={"https://www.linkedin.com/in/christian72/"}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
