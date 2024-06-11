const TitlePage = ({ h1, p }) => {
  return (
    <div className="title text-center">
      <h1 className="display-5 fw-bolder">{h1}</h1>
      <p className="opacity-50 fs-5">{p}</p>
    </div>
  );
};

export default TitlePage;
