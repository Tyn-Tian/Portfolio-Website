const ExperienceCard = ({className, item}) => {
  return (
    <div className={`card ${className}`}>
      <div className="card-body">
        <h3 className="fw-bold fs-5 mb-0">{item.position}</h3>
        <p className="opacity-50 mb-0">{item.company}</p>
        <p className="opacity-25">{item.time}</p>
        <p className="opacity-50">{item.describe}</p>
        <div className="d-flex opacity-50">
          <p className="fw-semibold">skills:</p>
          <ul className="d-flex column-gap-4 flex-wrap">
            {item.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
