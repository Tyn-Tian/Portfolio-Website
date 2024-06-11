const EducationCard = ({ classname }) => {
  return (
    <div className={`card ${classname}`}>
      <div className="card-body">
        <h3 className="fw-bold fs-5 mb-0">
          Institute Sains and Bussiness Atma Luhur, Bangka Belitung
        </h3>
        <p className="opacity-50 mb-0">Informatics Engineering</p>
        <p className="opacity-25 mb-2">Sep 21 - Sep 25 (Expected)</p>
        <p className="opacity-75">GPA: 4</p>
        <p className="opacity-50">
          I am a 3rd year Informatics Engineering student at ISB Atma Luhur.
          Currently I am focusing my interest in the field of Web Development,
          especia ly in the frontend. Because I have various experiences through
          organizations and internships in Frontend Web Development. Currently,
          I am focused on gaining more professional experience by attending Web
          Development internships and bootcamps
        </p>
      </div>
    </div>
  );
};

export default EducationCard;
