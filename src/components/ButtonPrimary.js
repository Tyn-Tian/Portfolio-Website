const ButtonPrimary = ({className, link, content}) => {
  return (
    <a
      className={`btn px-4 py-2 btn-outline-success button-primary ${className}` }
      target="_blank"
      href={link}
      rel="noreferrer"
    >
      {content}
    </a>
  );
};

export default ButtonPrimary;
